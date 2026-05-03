import './style.css';
import { navigation, content } from './content';
import { NavigationSection, PageContent, ContentSection, RoadmapItem } from './models';

/**
 * SRP: MarkdownParser solo se encarga de transformar texto básico.
 */
class MarkdownParser {
  static parse(text: string | undefined): string {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  static escape(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

/**
 * SRP: Sidebar se encarga de la navegación lateral.
 */
class Sidebar {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(navData: NavigationSection[], activeId: string): void {
    this.container.innerHTML = navData.map(section => `
      <div class="nav-section">${section.section}</div>
      ${section.links.map(link => `
        <a href="#${link.id}" class="nav-link ${link.id === activeId ? 'active' : ''}">
          ${link.label}
          ${link.badge ? `<span class="badge ${link.badgeClass || ''}">${link.badge}</span>` : ''}
        </a>
      `).join('')}
    `).join('');
  }
}

/**
 * SRP: ContentArea se encarga de mostrar la página seleccionada.
 */
class ContentArea {
  private container: HTMLElement;
  private allIds: string[];

  constructor(containerId: string, allIds: string[]) {
    this.container = document.getElementById(containerId) as HTMLElement;
    this.allIds = allIds;
  }

  render(id: string, page: PageContent): void {
    this.container.innerHTML = `
      <div class="content-header">
        <h2>${page.title}</h2>
        <p class="subtitle">${page.subtitle}</p>
      </div>

      ${page.sections.map(section => `
        <div class="content-section">
          <h3>${section.title}</h3>
          ${section.content ? `<p>${MarkdownParser.parse(section.content)}</p>` : ''}
          
          ${this.renderRoadmap(section)}
          ${this.renderHighlight(section)}
          ${this.renderCode(section)}
        </div>
      `).join('')}

      ${this.renderNextButton(id)}
    `;
    window.scrollTo(0, 0);
  }

  private renderRoadmap(section: ContentSection): string {
    if (!section.roadmap) return '';
    return `
      <div class="roadmap-container">
        ${section.roadmap.map((item: RoadmapItem) => `
          <div class="roadmap-step">
            <div class="step-icon">${item.icon}</div>
            <div class="step-content">
              <h4>${item.step}. ${item.title}</h4>
              <p>${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  private renderHighlight(section: ContentSection): string {
    if (!section.highlight) return '';
    return `
      <div class="highlight">
        <p>${MarkdownParser.parse(section.highlight)}</p>
      </div>
    `;
  }

  private renderCode(section: ContentSection): string {
    if (!section.code) return '';
    return `
      <div class="code-container">
        <div class="code-header">TypeScript</div>
        <pre class="code-block"><code>${MarkdownParser.escape(section.code)}</code></pre>
      </div>
    `;
  }

  private renderNextButton(currentId: string): string {
    const currentIndex = this.allIds.indexOf(currentId);
    if (currentIndex === -1 || currentIndex === this.allIds.length - 1) return '';
    
    const nextId = this.allIds[currentIndex + 1];
    const nextLabel = navigation.flatMap(n => n.links).find(l => l.id === nextId)?.label;

    return `
      <div class="next-step-container">
        <button class="btn-next" id="next-btn-${nextId}">
          Continuar con: ${nextLabel} →
        </button>
      </div>
    `;
  }
}

/**
 * DIP/Facade: App es el punto de entrada que coordina todo.
 */
class App {
  private sidebar: Sidebar;
  private contentArea: ContentArea;
  private allPageIds: string[];

  constructor() {
    this.allPageIds = navigation.flatMap(n => n.links.map(l => l.id));
    this.sidebar = new Sidebar('sidebar-links');
    this.contentArea = new ContentArea('app', this.allPageIds);
    
    this.init();
  }

  private init(): void {
    window.addEventListener('hashchange', () => this.route());
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
      document.querySelector('.sidebar')?.classList.toggle('active');
    });

    // Delegación de eventos para botones "Next" (KISS)
    document.getElementById('app')?.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('btn-next')) {
        const nextId = target.id.replace('next-btn-', '');
        window.location.hash = nextId;
      }
    });

    this.route();
  }

  private route(): void {
    const id = window.location.hash.slice(1) || 'home';
    const page = content[id];

    if (page) {
      this.sidebar.render(navigation, id);
      this.contentArea.render(id, page);
      document.querySelector('.sidebar')?.classList.remove('active');
    }
  }
}

// Inicializar la aplicación
new App();
