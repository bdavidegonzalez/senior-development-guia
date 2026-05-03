(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={home:{title:`NestJS & Angular`,subtitle:`Guía interactiva de conceptos fundamentales - Versión 20`,sections:[{id:`welcome`,title:`Bienvenido`,content:`Esta guía cubre los conceptos clave de ambos frameworks. Selecciona un tema del menú lateral para comenzar.`,cards:[{title:`Providers`,icon:`🔌`,description:`Servicios, inyección de dependencias y gestión de instancias.`,link:`providers`},{title:`POO`,icon:`🏗️`,description:`Clases, herencia, interfaces y polimorfismo.`,link:`oop`},{title:`SOLID`,icon:`🏛️`,description:`Los 5 principios de diseño orientado a objetos.`,link:`solid`},{title:`Signals`,icon:`📡`,description:`El nuevo sistema reactivo de Angular v20.`,link:`signals`},{title:`Standalone`,icon:`🧩`,description:`Componentes sin NgModules.`,link:`standalone`},{title:`Modules`,icon:`📦`,description:`Organización de la aplicación en NestJS.`,link:`modules`}]}]},providers:{title:`Providers`,subtitle:`El corazón de la inyección de dependencias en ambos frameworks`,sections:[{title:`¿Qué es un Provider?`,content:`Un Provider es cualquier servicio u objeto que el sistema de Inyección de Dependencias (DI) sabe cómo crear y entregar a las clases que lo solicitan.`,highlight:`Fórmula: Yo necesito X → El DI me da X → Yo uso X sin saber cómo se creó`,list:[`**Testeable:** Reemplaza providers por mocks.`,`**Desacoplado:** Tu clase no depende de CÓMO se crea el servicio.`,`**Reutilizable:** Un mismo provider puede usarse en muchos lugares.`]},{title:`NestJS Providers`,content:`En NestJS, un Provider es cualquier clase decorada con @Injectable() que se registra en un módulo.`,code:`@Injectable()
export class UsersService {
  private users: User[] = []
  findAll(): User[] { return this.users }
}`},{title:`Angular Providers`,content:`En Angular, el concepto es similar pero el DI es jerárquico.`,code:`@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users = signal<User[]>([])
  findAll() { return this.users() }
}`}]},oop:{title:`Programación Orientada a Objetos`,subtitle:`La base de Angular y NestJS`,sections:[{title:`Los 4 Pilares`,cards:[{title:`Encapsulamiento`,icon:`📦`,description:`Ocultar detalles internos usando public, private, protected.`},{title:`Herencia`,icon:`🧬`,description:`Extender clases para reutilizar comportamiento.`},{title:`Abstracción`,icon:`🎭`,description:`Exponer solo lo esencial mediante interfaces.`},{title:`Polimorfismo`,icon:`🔄`,description:`Diferentes clases respondiendo al mismo método.`}]}]},solid:{title:`Principios SOLID`,subtitle:`Guía para código mantenible`,sections:[{title:`S - Single Responsibility`,content:`Cada clase debe tener una sola razón para cambiar.`,code:`// BIEN - Responsabilidades separadas
@Injectable() export class UserValidator { ... }
@Injectable() export class PasswordHasher { ... }`},{title:`O - Open/Closed`,content:`Abierto para extensión, cerrado para modificación.`,highlight:`Tip: Usa interfaces para agregar comportamiento sin cambiar el código existente.`}]},signals:{title:`Angular Signals`,subtitle:`Reactividad granular de v20`,sections:[{title:`¿Qué es un Signal?`,content:`Un wrapper que permite a Angular saber cuándo un valor cambia sin usar Zone.js.`,code:`const count = signal(0);
count.set(1);
count.update(n => n + 1);
const double = computed(() => count() * 2);`}]},modules:{title:`NestJS Modules`,subtitle:`Organización de la aplicación`,sections:[{title:`Anatomía de un @Module()`,content:`Agrupa providers, controllers e imports.`,code:`@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}`}]}},t=[{section:`Fundamentos`,links:[{label:`Inicio`,id:`home`},{label:`Providers`,id:`providers`,badge:`Both`,badgeClass:`badge-clean`},{label:`POO`,id:`oop`,badge:`Base`,badgeClass:`badge-clean`},{label:`SOLID`,id:`solid`,badge:`Principios`,badgeClass:`badge-clean`}]},{section:`Angular`,links:[{label:`Signals`,id:`signals`,badge:`Front`,badgeClass:`badge-frontend`},{label:`Standalone`,id:`standalone`,badge:`Front`,badgeClass:`badge-frontend`}]},{section:`NestJS`,links:[{label:`Modules`,id:`modules`,badge:`Back`,badgeClass:`badge-backend`}]}],n=document.querySelector(`#app`),r=document.querySelector(`#sidebar-links`),i=document.querySelector(`#mobile-menu-btn`),a=document.querySelector(`.sidebar`);function o(){r.innerHTML=t.map(e=>`
    <div class="nav-section">${e.section}</div>
    ${e.links.map(e=>`
      <a href="#${e.id}" class="nav-link" data-id="${e.id}">
        ${e.label}
        ${e.badge?`<span class="badge ${e.badgeClass}">${e.badge}</span>`:``}
      </a>
    `).join(``)}
  `).join(``),document.querySelectorAll(`.nav-link`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id;s(t),window.innerWidth<=992&&a.classList.remove(`open`)})})}function s(t){let r=e[t]||e.home;document.querySelectorAll(`.nav-link`).forEach(e=>e.classList.remove(`active`)),document.querySelector(`[data-id="${t}"]`)?.classList.add(`active`),n.innerHTML=`
    <div class="hero">
      <h2>${r.title}</h2>
      <p class="subtitle">${r.subtitle||``}</p>
    </div>
    ${r.sections.map(e=>`
      <div class="content-section">
        <h3>${e.title}</h3>
        <p>${c(e.content)}</p>
        
        ${e.list?`
          <ul style="margin: 1rem 0 1.5rem 1.5rem; color: var(--text-secondary);">
            ${e.list.map(e=>`<li>${c(e)}</li>`).join(``)}
          </ul>
        `:``}

        ${e.highlight?`<div class="highlight"><p>${c(e.highlight)}</p></div>`:``}
        
        ${e.code?`
          <div class="code-header">TypeScript</div>
          <pre class="code-block"><code>${l(e.code)}</code></pre>
        `:``}

        ${e.cards?`
          <div class="cards-grid">
            ${e.cards.map(e=>`
              <a href="${e.link?`#${e.link}`:`#`}" class="card" ${e.link?`onclick="document.querySelector('[data-id=\\'${e.link}\\']').click()"`:``}>
                <div class="icon">${e.icon}</div>
                <h4>${e.title}</h4>
                <p>${e.description}</p>
              </a>
            `).join(``)}
          </div>
        `:``}
      </div>
    `).join(``)}
  `,window.scrollTo(0,0)}function c(e){return e?e.replace(/\*\*(.*?)\*\*/g,`<strong>$1</strong>`).replace(/`(.*?)`/g,`<code>$1</code>`):``}function l(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}i.addEventListener(`click`,()=>{a.classList.toggle(`open`)}),o(),s(window.location.hash.slice(1)||`home`),window.addEventListener(`popstate`,()=>{s(window.location.hash.slice(1)||`home`)});