var d=Object.defineProperty;var u=(s,e,a)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var r=(s,e,a)=>u(s,typeof e!="symbol"?e+"":e,a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const c=[{section:"1. Fundamentos Pro",links:[{label:"Introducción",id:"home"},{label:"POO Moderna",id:"oop",badge:"Base",badgeClass:"badge-clean"},{label:"SOLID para Humanos",id:"solid",badge:"Arquitectura",badgeClass:"badge-clean"},{label:"Clean Code",id:"clean-code",badge:"Práctica",badgeClass:"badge-clean"},{label:"KISS & STUPID",id:"kiss",badge:"Tips",badgeClass:"badge-clean"}]},{section:"2. Angular Mastery (v18/19+)",links:[{label:"Signals & Reactividad",id:"signals",badge:"Core",badgeClass:"badge-frontend"},{label:"Standalone Components",id:"standalone",badge:"Estructura",badgeClass:"badge-frontend"},{label:"Nuevo Control Flow",id:"control-flow",badge:"Sintaxis",badgeClass:"badge-frontend"},{label:"Deferrable Views",id:"defer",badge:"Perf",badgeClass:"badge-frontend"},{label:"Inyección de Dependencias",id:"di-front",badge:"Avanzado",badgeClass:"badge-frontend"}]},{section:"3. NestJS Mastering",links:[{label:"Arquitectura Modular",id:"modules",badge:"Back",badgeClass:"badge-backend"},{label:"Controladores y Rutas",id:"controllers",badge:"Back",badgeClass:"badge-backend"},{label:"Validación con DTOs",id:"pipes",badge:"Back",badgeClass:"badge-backend"},{label:"Seguridad (Guards)",id:"guards",badge:"Back",badgeClass:"badge-backend"},{label:"Interceptores",id:"interceptors",badge:"Back",badgeClass:"badge-backend"},{label:"Manejo de Errores",id:"error-handling",badge:"Back",badgeClass:"badge-backend"}]},{section:"4. Calidad y Patrones",links:[{label:"Testing para Todos",id:"testing",badge:"Calidad",badgeClass:"badge-clean"},{label:"RxJS vs Signals",id:"rxjs-signals",badge:"Arquitectura",badgeClass:"badge-clean"}]}],p={home:{title:"Learning Path",subtitle:"Domina el desarrollo Fullstack con NestJS y Angular",sections:[{title:"Tu Ruta de Aprendizaje",content:"Bienvenido a la guía definitiva. Como Senior Developer, te digo: el código que escribes hoy es tu legado de mañana. Esta guía no solo te enseña sintaxis, sino la mentalidad necesaria para construir sistemas escalables.",roadmap:[{step:1,title:"Fundamentos Pro",desc:"POO, SOLID y Clean Code. Sin base no hay paraíso.",icon:"🏛️"},{step:2,title:"Angular v19",desc:"La revolución de las Signals y el renderizado eficiente.",icon:"🅰️"},{step:3,title:"NestJS Core",desc:"Arquitectura modular y servicios backend de grado industrial.",icon:"🐱"},{step:4,title:"Software Quality",desc:"Testing, patrones y toma de decisiones arquitectónicas.",icon:"🧪"}]}]},oop:{title:"POO Moderna",subtitle:"Más allá de las clases: Abstracción y Flexibilidad",sections:[{title:"Abstracción vs Encapsulamiento",content:"La **Abstracción** oculta la complejidad (sabes qué hace el motor, no cómo explota la gasolina). El **Encapsulamiento** protege los datos (nadie toca el motor mientras corre).",code:`class CuentaBancaria {
  // Encapsulamiento: El saldo es PRIVADO
  private _saldo: number = 0;

  // Abstracción: Solo expones lo necesario
  public depositar(monto: number): void {
    if (monto > 0) this._saldo += monto;
  }

  public get saldo(): number { return this._saldo; }
}`},{title:"Polimorfismo: Muchas Formas",content:"Es la capacidad de tratar diferentes objetos de la misma manera si comparten una base o interfaz. En Angular/Nest, esto permite intercambiar servicios sin romper el código.",code:`abstract class Animal {
  abstract hablar(): void;
}

class Perro extends Animal {
  hablar() { console.log('Guau!'); }
}

class Gato extends Animal {
  hablar() { console.log('Miau!'); }
}

function hacerHablar(animal: Animal) {
  animal.hablar(); // No importa qué animal sea, funcionará.
}`}]},solid:{title:"SOLID para Humanos",subtitle:"Los 5 pilares de la arquitectura mantenible",sections:[{title:"S: Single Responsibility (SRP)",content:"Una clase debe tener **una sola responsabilidad**. Si tu servicio de 'Pedidos' también genera PDFs y envía SMS, divídelo en `OrderService`, `PdfService` y `NotificationService`.",highlight:"Senior Tip: Si te cuesta ponerle nombre a una clase porque hace 'un poco de todo', estás rompiendo el SRP."},{title:"O: Open/Closed (OCP)",content:"Abierto para extender, cerrado para modificar. Si necesitas un nuevo tipo de descuento, no añadas un `else if` en el código viejo; crea una nueva clase que implemente la interfaz `DiscountStrategy`.",code:`interface Discount { apply(price: number): number; }
class BlackFriday implements Discount { apply(p: number) => p * 0.5; }
class Christmas implements Discount { apply(p: number) => p * 0.8; }`},{title:"L: Liskov Substitution (LSP)",content:"Si una clase `Hija` hereda de `Padre`, deberías poder usar `Hija` en cualquier lugar donde uses `Padre` sin que nada se rompa.",highlight:"Si tu clase hija lanza un error 'NotImplementedException' en un método del padre, estás violando este principio."},{title:"I: Interface Segregation (ISP)",content:"Es mejor tener muchas interfaces pequeñas que una sola gigante. No obligues a una clase a implementar métodos que no necesita.",code:`// ❌ Mal: Interfaz 'Gorda'
interface Worker { work(); eat(); sleep(); }

// ✅ Bien: Interfaces segregadas
interface Workable { work(); }
interface Eatable { eat(); }`},{title:"D: Dependency Inversion (DIP)",content:"Depende de abstracciones, no de implementaciones concretas. Esto es lo que permite que NestJS y Angular inyecten servicios de forma mágica.",code:`// Dependes de la interfaz 'Logger', no de 'FileLogger'
constructor(private logger: Logger) {}`}]},"clean-code":{title:"Clean Code",subtitle:"Escribe código para humanos, no para máquinas",sections:[{title:"Nombres que Revelan Intención",content:"Evita nombres genéricos como `data`, `info` o `item`. Sé específico.",code:`// ❌ Mal: getItems()
// ✅ Bien: getActiveSubscriptionPlan()`},{title:"Funciones Puras y Pequeñas",content:"Una función ideal no tiene efectos secundarios (no modifica variables externas) y hace una sola cosa.",highlight:"Regla Senior: Si tu función necesita la palabra 'and' en su nombre (ej: saveAndEmail), debe dividirse en dos."}]},kiss:{title:"KISS / STUPID",subtitle:"Simplicidad vs Deuda Técnica",sections:[{title:"KISS: Keep It Simple, Stupid",content:"No uses una librería de 500KB para algo que resuelves con 5 líneas de JS. No crees una arquitectura de microservicios para un blog personal.",highlight:"La simplicidad es el nivel máximo de sofisticación."},{title:"STUPID: El camino al desastre",content:"**S**ingleton (abuso), **T**ight Coupling (clases pegadas), **U**ntestability (código no testeable), **P**remature Optimization (optimizar sin medir), **I**ndescriptive Naming, **D**uplication (DRY).",highlight:"Huye de STUPID, abraza SOLID."}]},signals:{title:"Signals en Angular v19",subtitle:"El futuro de la reactividad granular",sections:[{title:"Signal, Computed y Effect",content:"Las Signals son valores que cambian en el tiempo. `computed` crea un valor que depende de otras signals, y `effect` ejecuta código cuando una signal cambia.",code:`const count = signal(0);
const double = computed(() => count() * 2);

effect(() => {
  console.log('El contador ahora es:', count());
});`},{title:"Resource API (v19+)",content:"La nueva forma de manejar datos asíncronos (HTTP) de forma nativa con Signals, reemplazando muchos casos de uso de RxJS para promesas simples.",code:`const user = resource({
  loader: () => fetch('/api/user').then(res => res.json())
});

// En el template: user.value()?.name`}]},standalone:{title:"Standalone Components",subtitle:"Arquitectura moderna sin NgModules",sections:[{title:"Adiós a los Módulos",content:"Los componentes standalone son autosuficientes. Importan lo que necesitan y se exportan fácilmente. Esto simplifica el Lazy Loading y las pruebas unitarias.",highlight:"A partir de Angular 17+, Standalone es el valor por defecto (`standalone: true`)."}]},"control-flow":{title:"Nuevo Control Flow",subtitle:"@if, @for y @switch nativos",sections:[{title:"Sintaxis Declarativa",content:"Más legible, más rápida y sin necesidad de importar `CommonModule`.",code:`@if (role === 'admin') {
  <admin-panel />
} @else if (role === 'user') {
  <user-panel />
}

@for (item of items; track item.id) {
  <card [data]="item" />
} @empty {
  <p>No hay elementos</p>
}`}]},defer:{title:"Deferrable Views",subtitle:"Carga diferida inteligente para máxima Performance",sections:[{title:"@defer: El sueño del Web Performance",content:"Carga componentes pesados (gráficos, mapas) solo cuando el usuario los necesita. Esto reduce el tamaño del bundle inicial drásticamente.",code:`@defer (on viewport; prefetch on idle) {
  <heavy-chart />
} @placeholder {
  <div class="skeleton">Cargando gráfico...</div>
}`}]},"di-front":{title:"Inyección de Dependencias",subtitle:"Uso avanzado y Patrones en Angular",sections:[{title:"función inject() vs Constructor",content:"La función `inject()` es la forma moderna de obtener dependencias. Permite usar DI en funciones utilitarias y hace el código más limpio.",code:`// Forma moderna
private userService = inject(UserService);

// Inyección dinámica
const analytics = inject(ANALYTICS_TOKEN, { optional: true });`}]},modules:{title:"Módulos en NestJS",subtitle:"Estructura de aplicaciones empresariales",sections:[{title:"Módulos Globales y Dinámicos",content:"Los módulos organizan tu app. Los **Dinámicos** (`forRoot`) permiten pasar configuración (ej: conectar a DB con credenciales variables).",code:`@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`}]},controllers:{title:"Controladores y Rutas",subtitle:"Manejo de peticiones de grado Senior",sections:[{title:"Extracción de Parámetros",content:"NestJS facilita el acceso a cada parte de la petición HTTP mediante decoradores específicos.",code:`@Get(':id')
findOne(
  @Param('id', ParseIntPipe) id: number,
  @Query('include') include: string,
  @Headers('auth-token') token: string
) {
  return this.service.findById(id, include);
}`}]},pipes:{title:"Validación y Transformación",subtitle:"DTOs y Class-Validator",sections:[{title:"Pipes: Tu Primera Línea de Defensa",content:"Los Pipes validan los datos ANTES de que toquen tu lógica de negocio. Si el DTO no es válido, Nest responde automáticamente con un 400 Bad Request.",code:`export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  age: number;
}`}]},guards:{title:"Seguridad (Guards)",subtitle:"Auth y RBAC (Role Based Access Control)",sections:[{title:"Protección de Rutas",content:"Los Guards determinan si una petición puede continuar basándose en condiciones de seguridad (JWT, API Keys, Roles).",code:`@UseGuards(JwtAuthGuard, RolesGuard)
@SetMetadata('roles', ['admin'])
@Get('secret-data')
getSecret() { ... }`}]},interceptors:{title:"Interceptores",subtitle:"AOP: Aspect Oriented Programming",sections:[{title:"Transformar y Observar",content:"Ideales para formatear todas las respuestas de la API, medir tiempos de ejecución o reintentar peticiones fallidas.",code:`intercept(context: ExecutionContext, next: CallHandler) {
  const now = Date.now();
  return next.handle().pipe(
    tap(() => console.log(\`Duración: \${Date.now() - now}ms\`))
  );
}`}]},"error-handling":{title:"Manejo de Errores",subtitle:"Exception Filters y Errores Estándar",sections:[{title:"Excepciones HTTP",content:"NestJS provee una jerarquía de excepciones listas para usar. No devuelvas strings de error, lanza excepciones.",code:`throw new NotFoundException('Usuario no encontrado');
throw new ForbiddenException('No tienes permiso');`},{title:"Filtros Globales",content:"Puedes crear un filtro que capture cualquier error no manejado y devuelva una respuesta estandarizada y bonita al cliente.",highlight:"Senior Tip: Nunca expongas el stack trace de errores internos en producción."}]},testing:{title:"Testing para Todos",subtitle:"Unit, Integration y E2E",sections:[{title:"Estrategia de Testing",content:"Tests unitarios para lógica, integración para servicios con DB, y E2E para flujos críticos (login, checkout).",code:`// Mocking en NestJS
const module = await Test.createTestingModule({
  providers: [
    UsersService,
    { provide: UserRepository, useValue: mockRepo }
  ],
}).compile();`}]},"rxjs-signals":{title:"RxJS vs Signals",subtitle:"Elegir la herramienta correcta",sections:[{title:"Cuándo usar qué",content:"**Signals**: Estado local, UI, valores que se leen en templates. **RxJS**: Streams complejos, debounceTime, switchMap, WebSockets.",highlight:"No intentes reemplazar RxJS con Signals para todo. Son complementarios."}]}};class l{static parse(e){return e?e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/\n/g,"<br>"):""}static escape(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}}class g{constructor(e){r(this,"container");this.container=document.getElementById(e)}render(e,a){this.container.innerHTML=e.map(n=>`
      <div class="nav-section">${n.section}</div>
      ${n.links.map(t=>`
        <a href="#${t.id}" class="nav-link ${t.id===a?"active":""}">
          ${t.label}
          ${t.badge?`<span class="badge ${t.badgeClass||""}">${t.badge}</span>`:""}
        </a>
      `).join("")}
    `).join("")}}class m{constructor(e,a){r(this,"container");r(this,"allIds");this.container=document.getElementById(e),this.allIds=a}render(e,a){this.container.innerHTML=`
      <div class="content-header">
        <h2>${a.title}</h2>
        <p class="subtitle">${a.subtitle}</p>
      </div>

      ${a.sections.map(n=>`
        <div class="content-section">
          <h3>${n.title}</h3>
          ${n.content?`<p>${l.parse(n.content)}</p>`:""}
          
          ${this.renderRoadmap(n)}
          ${this.renderHighlight(n)}
          ${this.renderCode(n)}
        </div>
      `).join("")}

      ${this.renderNextButton(e)}
    `,window.scrollTo(0,0)}renderRoadmap(e){return e.roadmap?`
      <div class="roadmap-container">
        ${e.roadmap.map(a=>`
          <div class="roadmap-step">
            <div class="step-icon">${a.icon}</div>
            <div class="step-content">
              <h4>${a.step}. ${a.title}</h4>
              <p>${a.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>
    `:""}renderHighlight(e){return e.highlight?`
      <div class="highlight">
        <p>${l.parse(e.highlight)}</p>
      </div>
    `:""}renderCode(e){return e.code?`
      <div class="code-container">
        <div class="code-header">TypeScript</div>
        <pre class="code-block"><code>${l.escape(e.code)}</code></pre>
      </div>
    `:""}renderNextButton(e){var i;const a=this.allIds.indexOf(e);if(a===-1||a===this.allIds.length-1)return"";const n=this.allIds[a+1],t=(i=c.flatMap(o=>o.links).find(o=>o.id===n))==null?void 0:i.label;return`
      <div class="next-step-container">
        <button class="btn-next" id="next-btn-${n}">
          Continuar con: ${t} →
        </button>
      </div>
    `}}class b{constructor(){r(this,"sidebar");r(this,"contentArea");r(this,"allPageIds");this.allPageIds=c.flatMap(e=>e.links.map(a=>a.id)),this.sidebar=new g("sidebar-links"),this.contentArea=new m("app",this.allPageIds),this.init()}init(){var e,a;window.addEventListener("hashchange",()=>this.route()),(e=document.getElementById("mobile-menu-btn"))==null||e.addEventListener("click",()=>{var n;(n=document.querySelector(".sidebar"))==null||n.classList.toggle("active")}),(a=document.getElementById("app"))==null||a.addEventListener("click",n=>{const t=n.target;if(t.classList.contains("btn-next")){const i=t.id.replace("next-btn-","");window.location.hash=i}}),this.route()}route(){var n;const e=window.location.hash.slice(1)||"home",a=p[e];a&&(this.sidebar.render(c,e),this.contentArea.render(e,a),(n=document.querySelector(".sidebar"))==null||n.classList.remove("active"))}}new b;
