import { NavigationSection, SiteContent } from './models';

export const navigation: NavigationSection[] = [
  {
    section: "1. Fundamentos Pro",
    links: [
      { label: "Introducción", id: "home" },
      { label: "POO Moderna", id: "oop", badge: "Base", badgeClass: "badge-clean" },
      { label: "SOLID para Humanos", id: "solid", badge: "Arquitectura", badgeClass: "badge-clean" },
      { label: "Clean Code", id: "clean-code", badge: "Práctica", badgeClass: "badge-clean" },
      { label: "KISS & STUPID", id: "kiss", badge: "Tips", badgeClass: "badge-clean" }
    ]
  },
  {
    section: "2. Angular Mastery (v18/19+)",
    links: [
      { label: "Signals & Reactividad", id: "signals", badge: "Core", badgeClass: "badge-frontend" },
      { label: "Standalone Components", id: "standalone", badge: "Estructura", badgeClass: "badge-frontend" },
      { label: "Nuevo Control Flow", id: "control-flow", badge: "Sintaxis", badgeClass: "badge-frontend" },
      { label: "Deferrable Views", id: "defer", badge: "Perf", badgeClass: "badge-frontend" },
      { label: "Inyección de Dependencias", id: "di-front", badge: "Avanzado", badgeClass: "badge-frontend" }
    ]
  },
  {
    section: "3. NestJS Mastering",
    links: [
      { label: "Arquitectura Modular", id: "modules", badge: "Back", badgeClass: "badge-backend" },
      { label: "Controladores y Rutas", id: "controllers", badge: "Back", badgeClass: "badge-backend" },
      { label: "Validación con DTOs", id: "pipes", badge: "Back", badgeClass: "badge-backend" },
      { label: "Seguridad (Guards)", id: "guards", badge: "Back", badgeClass: "badge-backend" },
      { label: "Interceptores", id: "interceptors", badge: "Back", badgeClass: "badge-backend" },
      { label: "Manejo de Errores", id: "error-handling", badge: "Back", badgeClass: "badge-backend" }
    ]
  },
  {
    section: "4. Calidad y Patrones",
    links: [
      { label: "Testing para Todos", id: "testing", badge: "Calidad", badgeClass: "badge-clean" },
      { label: "RxJS vs Signals", id: "rxjs-signals", badge: "Arquitectura", badgeClass: "badge-clean" }
    ]
  }
];

export const content: SiteContent = {
  home: {
    title: "Learning Path",
    subtitle: "Domina el desarrollo Fullstack con NestJS y Angular",
    sections: [
      {
        title: "Tu Ruta de Aprendizaje",
        content: "Bienvenido a la guía definitiva. Como Senior Developer, te digo: el código que escribes hoy es tu legado de mañana. Esta guía no solo te enseña sintaxis, sino la mentalidad necesaria para construir sistemas escalables.",
        roadmap: [
          { step: 1, title: "Fundamentos Pro", desc: "POO, SOLID y Clean Code. Sin base no hay paraíso.", icon: "🏛️" },
          { step: 2, title: "Angular v19", desc: "La revolución de las Signals y el renderizado eficiente.", icon: "🅰️" },
          { step: 3, title: "NestJS Core", desc: "Arquitectura modular y servicios backend de grado industrial.", icon: "🐱" },
          { step: 4, title: "Software Quality", desc: "Testing, patrones y toma de decisiones arquitectónicas.", icon: "🧪" }
        ]
      }
    ]
  },
  oop: {
    title: "POO Moderna",
    subtitle: "Más allá de las clases: Abstracción y Flexibilidad",
    sections: [
      {
        title: "Abstracción vs Encapsulamiento",
        content: "La **Abstracción** oculta la complejidad (sabes qué hace el motor, no cómo explota la gasolina). El **Encapsulamiento** protege los datos (nadie toca el motor mientras corre).",
        code: `class CuentaBancaria {
  // Encapsulamiento: El saldo es PRIVADO
  private _saldo: number = 0;

  // Abstracción: Solo expones lo necesario
  public depositar(monto: number): void {
    if (monto > 0) this._saldo += monto;
  }

  public get saldo(): number { return this._saldo; }
}`
      },
      {
        title: "Polimorfismo: Muchas Formas",
        content: "Es la capacidad de tratar diferentes objetos de la misma manera si comparten una base o interfaz. En Angular/Nest, esto permite intercambiar servicios sin romper el código.",
        code: `abstract class Animal {
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
}`
      }
    ]
  },
  solid: {
    title: "SOLID para Humanos",
    subtitle: "Los 5 pilares de la arquitectura mantenible",
    sections: [
      {
        title: "S: Single Responsibility (SRP)",
        content: "Una clase debe tener **una sola responsabilidad**. Si tu servicio de 'Pedidos' también genera PDFs y envía SMS, divídelo en `OrderService`, `PdfService` y `NotificationService`.",
        highlight: "Senior Tip: Si te cuesta ponerle nombre a una clase porque hace 'un poco de todo', estás rompiendo el SRP."
      },
      {
        title: "O: Open/Closed (OCP)",
        content: "Abierto para extender, cerrado para modificar. Si necesitas un nuevo tipo de descuento, no añadas un `else if` en el código viejo; crea una nueva clase que implemente la interfaz `DiscountStrategy`.",
        code: `interface Discount { apply(price: number): number; }
class BlackFriday implements Discount { apply(p: number) => p * 0.5; }
class Christmas implements Discount { apply(p: number) => p * 0.8; }`
      },
      {
        title: "L: Liskov Substitution (LSP)",
        content: "Si una clase `Hija` hereda de `Padre`, deberías poder usar `Hija` en cualquier lugar donde uses `Padre` sin que nada se rompa.",
        highlight: "Si tu clase hija lanza un error 'NotImplementedException' en un método del padre, estás violando este principio."
      },
      {
        title: "I: Interface Segregation (ISP)",
        content: "Es mejor tener muchas interfaces pequeñas que una sola gigante. No obligues a una clase a implementar métodos que no necesita.",
        code: `// ❌ Mal: Interfaz 'Gorda'
interface Worker { work(); eat(); sleep(); }

// ✅ Bien: Interfaces segregadas
interface Workable { work(); }
interface Eatable { eat(); }`
      },
      {
        title: "D: Dependency Inversion (DIP)",
        content: "Depende de abstracciones, no de implementaciones concretas. Esto es lo que permite que NestJS y Angular inyecten servicios de forma mágica.",
        code: `// Dependes de la interfaz 'Logger', no de 'FileLogger'
constructor(private logger: Logger) {}`
      }
    ]
  },
  "clean-code": {
    title: "Clean Code",
    subtitle: "Escribe código para humanos, no para máquinas",
    sections: [
      {
        title: "Nombres que Revelan Intención",
        content: "Evita nombres genéricos como `data`, `info` o `item`. Sé específico.",
        code: `// ❌ Mal: getItems()
// ✅ Bien: getActiveSubscriptionPlan()`
      },
      {
        title: "Funciones Puras y Pequeñas",
        content: "Una función ideal no tiene efectos secundarios (no modifica variables externas) y hace una sola cosa.",
        highlight: "Regla Senior: Si tu función necesita la palabra 'and' en su nombre (ej: saveAndEmail), debe dividirse en dos."
      }
    ]
  },
  kiss: {
    title: "KISS / STUPID",
    subtitle: "Simplicidad vs Deuda Técnica",
    sections: [
      {
        title: "KISS: Keep It Simple, Stupid",
        content: "No uses una librería de 500KB para algo que resuelves con 5 líneas de JS. No crees una arquitectura de microservicios para un blog personal.",
        highlight: "La simplicidad es el nivel máximo de sofisticación."
      },
      {
        title: "STUPID: El camino al desastre",
        content: "**S**ingleton (abuso), **T**ight Coupling (clases pegadas), **U**ntestability (código no testeable), **P**remature Optimization (optimizar sin medir), **I**ndescriptive Naming, **D**uplication (DRY).",
        highlight: "Huye de STUPID, abraza SOLID."
      }
    ]
  },
  signals: {
    title: "Signals en Angular v19",
    subtitle: "El futuro de la reactividad granular",
    sections: [
      {
        title: "Signal, Computed y Effect",
        content: "Las Signals son valores que cambian en el tiempo. `computed` crea un valor que depende de otras signals, y `effect` ejecuta código cuando una signal cambia.",
        code: `const count = signal(0);
const double = computed(() => count() * 2);

effect(() => {
  console.log('El contador ahora es:', count());
});`
      },
      {
        title: "Resource API (v19+)",
        content: "La nueva forma de manejar datos asíncronos (HTTP) de forma nativa con Signals, reemplazando muchos casos de uso de RxJS para promesas simples.",
        code: `const user = resource({
  loader: () => fetch('/api/user').then(res => res.json())
});

// En el template: user.value()?.name`
      }
    ]
  },
  standalone: {
    title: "Standalone Components",
    subtitle: "Arquitectura moderna sin NgModules",
    sections: [
      {
        title: "Adiós a los Módulos",
        content: "Los componentes standalone son autosuficientes. Importan lo que necesitan y se exportan fácilmente. Esto simplifica el Lazy Loading y las pruebas unitarias.",
        highlight: "A partir de Angular 17+, Standalone es el valor por defecto (`standalone: true`)."
      }
    ]
  },
  "control-flow": {
    title: "Nuevo Control Flow",
    subtitle: "@if, @for y @switch nativos",
    sections: [
      {
        title: "Sintaxis Declarativa",
        content: "Más legible, más rápida y sin necesidad de importar `CommonModule`.",
        code: `@if (role === 'admin') {
  <admin-panel />
} @else if (role === 'user') {
  <user-panel />
}

@for (item of items; track item.id) {
  <card [data]="item" />
} @empty {
  <p>No hay elementos</p>
}`
      }
    ]
  },
  defer: {
    title: "Deferrable Views",
    subtitle: "Carga diferida inteligente para máxima Performance",
    sections: [
      {
        title: "@defer: El sueño del Web Performance",
        content: "Carga componentes pesados (gráficos, mapas) solo cuando el usuario los necesita. Esto reduce el tamaño del bundle inicial drásticamente.",
        code: `@defer (on viewport; prefetch on idle) {
  <heavy-chart />
} @placeholder {
  <div class="skeleton">Cargando gráfico...</div>
}`
      }
    ]
  },
  "di-front": {
    title: "Inyección de Dependencias",
    subtitle: "Uso avanzado y Patrones en Angular",
    sections: [
      {
        title: "función inject() vs Constructor",
        content: "La función `inject()` es la forma moderna de obtener dependencias. Permite usar DI en funciones utilitarias y hace el código más limpio.",
        code: `// Forma moderna
private userService = inject(UserService);

// Inyección dinámica
const analytics = inject(ANALYTICS_TOKEN, { optional: true });`
      }
    ]
  },
  modules: {
    title: "Módulos en NestJS",
    subtitle: "Estructura de aplicaciones empresariales",
    sections: [
      {
        title: "Módulos Globales y Dinámicos",
        content: "Los módulos organizan tu app. Los **Dinámicos** (`forRoot`) permiten pasar configuración (ej: conectar a DB con credenciales variables).",
        code: `@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`
      }
    ]
  },
  controllers: {
    title: "Controladores y Rutas",
    subtitle: "Manejo de peticiones de grado Senior",
    sections: [
      {
        title: "Extracción de Parámetros",
        content: "NestJS facilita el acceso a cada parte de la petición HTTP mediante decoradores específicos.",
        code: `@Get(':id')
findOne(
  @Param('id', ParseIntPipe) id: number,
  @Query('include') include: string,
  @Headers('auth-token') token: string
) {
  return this.service.findById(id, include);
}`
      }
    ]
  },
  pipes: {
    title: "Validación y Transformación",
    subtitle: "DTOs y Class-Validator",
    sections: [
      {
        title: "Pipes: Tu Primera Línea de Defensa",
        content: "Los Pipes validan los datos ANTES de que toquen tu lógica de negocio. Si el DTO no es válido, Nest responde automáticamente con un 400 Bad Request.",
        code: `export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  age: number;
}`
      }
    ]
  },
  guards: {
    title: "Seguridad (Guards)",
    subtitle: "Auth y RBAC (Role Based Access Control)",
    sections: [
      {
        title: "Protección de Rutas",
        content: "Los Guards determinan si una petición puede continuar basándose en condiciones de seguridad (JWT, API Keys, Roles).",
        code: `@UseGuards(JwtAuthGuard, RolesGuard)
@SetMetadata('roles', ['admin'])
@Get('secret-data')
getSecret() { ... }`
      }
    ]
  },
  interceptors: {
    title: "Interceptores",
    subtitle: "AOP: Aspect Oriented Programming",
    sections: [
      {
        title: "Transformar y Observar",
        content: "Ideales para formatear todas las respuestas de la API, medir tiempos de ejecución o reintentar peticiones fallidas.",
        code: `intercept(context: ExecutionContext, next: CallHandler) {
  const now = Date.now();
  return next.handle().pipe(
    tap(() => console.log(\`Duración: \${Date.now() - now}ms\`))
  );
}`
      }
    ]
  },
  "error-handling": {
    title: "Manejo de Errores",
    subtitle: "Exception Filters y Errores Estándar",
    sections: [
      {
        title: "Excepciones HTTP",
        content: "NestJS provee una jerarquía de excepciones listas para usar. No devuelvas strings de error, lanza excepciones.",
        code: `throw new NotFoundException('Usuario no encontrado');
throw new ForbiddenException('No tienes permiso');`
      },
      {
        title: "Filtros Globales",
        content: "Puedes crear un filtro que capture cualquier error no manejado y devuelva una respuesta estandarizada y bonita al cliente.",
        highlight: "Senior Tip: Nunca expongas el stack trace de errores internos en producción."
      }
    ]
  },
  testing: {
    title: "Testing para Todos",
    subtitle: "Unit, Integration y E2E",
    sections: [
      {
        title: "Estrategia de Testing",
        content: "Tests unitarios para lógica, integración para servicios con DB, y E2E para flujos críticos (login, checkout).",
        code: `// Mocking en NestJS
const module = await Test.createTestingModule({
  providers: [
    UsersService,
    { provide: UserRepository, useValue: mockRepo }
  ],
}).compile();`
      }
    ]
  },
  "rxjs-signals": {
    title: "RxJS vs Signals",
    subtitle: "Elegir la herramienta correcta",
    sections: [
      {
        title: "Cuándo usar qué",
        content: "**Signals**: Estado local, UI, valores que se leen en templates. **RxJS**: Streams complejos, debounceTime, switchMap, WebSockets.",
        highlight: "No intentes reemplazar RxJS con Signals para todo. Son complementarios."
      }
    ]
  }
};
