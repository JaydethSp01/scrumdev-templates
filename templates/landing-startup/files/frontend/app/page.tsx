"use client";
import { useState } from "react";
import {
  Zap,
  BarChart3,
  Plug,
  ShieldCheck,
  Workflow,
  Headphones,
  Check,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";

const FEATURES = [
  { icon: Workflow, title: "Automatización de procesos", description: "Diseña flujos sin código y deja que Flowbase ejecute las tareas repetitivas por ti." },
  { icon: BarChart3, title: "Análisis en tiempo real", description: "Dashboards en vivo que convierten tus datos en decisiones antes que la competencia." },
  { icon: Plug, title: "Integraciones nativas", description: "Conecta Slack, HubSpot, Stripe y 80+ herramientas en minutos, sin migraciones." },
  { icon: ShieldCheck, title: "Seguridad de nivel empresarial", description: "Cifrado AES-256, SSO y cumplimiento SOC 2 Type II de extremo a extremo." },
  { icon: Zap, title: "Velocidad sin fricción", description: "Infraestructura edge global con latencia inferior a 50 ms para todo tu equipo." },
  { icon: Headphones, title: "Soporte 24/7", description: "Especialistas reales disponibles a toda hora, con tiempo de respuesta medio de 4 min." },
];

const METRICS = [
  { value: "12.000+", label: "Equipos activos" },
  { value: "99,99%", label: "Uptime garantizado" },
  { value: "4,8 M", label: "Tareas automatizadas/mes" },
  { value: "38%", label: "Ahorro de tiempo medio" },
];

const LOGOS = ["Northwind", "Acme Corp", "Quantia", "Vela", "Lumen", "Orbit"];

const PRICING = [
  {
    plan: "Starter",
    price: "$29",
    period: "/mes",
    description: "Para equipos pequeños que empiezan a automatizar.",
    features: ["Hasta 5 usuarios", "3 flujos activos", "Integraciones básicas", "Soporte por email"],
    popular: false,
  },
  {
    plan: "Pro",
    price: "$59",
    period: "/mes",
    description: "El plan favorito de las startups en crecimiento.",
    features: ["Usuarios ilimitados", "Flujos ilimitados", "Analítica avanzada", "Integraciones nativas", "Soporte 24/7"],
    popular: true,
  },
  {
    plan: "Enterprise",
    price: "A medida",
    period: "",
    description: "Para organizaciones con necesidades a gran escala.",
    features: ["SSO y SAML", "SLA dedicado", "Gestor de cuenta", "Auditoría y cumplimiento", "Onboarding premium"],
    popular: false,
  },
];

const TESTIMONIALS = [
  { name: "Juan Pérez", role: "CTO, Northwind", feedback: "Flowbase transformó nuestra operación. Automatizamos lo que antes nos tomaba días en cuestión de horas." },
  { name: "Ana Gómez", role: "Head of Ops, Quantia", feedback: "El soporte es excepcional y la plataforma es increíblemente intuitiva. Lo recomendaría sin dudarlo." },
  { name: "Carlos Ruiz", role: "Founder, Vela", feedback: "Pasamos de hojas de cálculo caóticas a un sistema impecable. El ROI fue evidente en el primer mes." },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}

export default function LandingPage() {
  const [data] = useState({ features: FEATURES, metrics: METRICS, pricing: PRICING, testimonials: TESTIMONIALS });

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar flotante */}
      <header className="fixed inset-x-0 top-4 z-50">
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-md">
            <a href="#" className="flex items-center gap-2 cursor-pointer">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-lg font-bold tracking-tight">Flowbase</span>
            </a>
            <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <a href="#features" className="cursor-pointer transition hover:text-slate-900">Funciones</a>
              <a href="#pricing" className="cursor-pointer transition hover:text-slate-900">Precios</a>
              <a href="#testimonials" className="cursor-pointer transition hover:text-slate-900">Clientes</a>
            </div>
            <button className="cursor-pointer rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark">
              Empezar
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-40 pb-24">
        <div className="absolute left-1/2 top-0 -z-10 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand">
            <Sparkles className="h-4 w-4" /> Nuevo: agentes de IA en tus flujos
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
            Lanza tu startup con software B2B que escala contigo
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Flowbase unifica automatización, analítica e integraciones en una sola plataforma para que tu equipo deje de perder tiempo en tareas manuales.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark">
              Empieza gratis <ArrowRight className="h-4 w-4" />
            </button>
            <button className="cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50">
              Ver demo
            </button>
          </div>

          {/* Mockup placeholder */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-dark to-brand p-2 shadow-2xl shadow-brand/20">
              <div className="rounded-2xl bg-white p-4">
                <div className="flex items-center gap-1.5 border-b border-slate-100 pb-3">
                  <span className="h-3 w-3 rounded-full bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-slate-200" />
                </div>
                <div className="grid gap-4 py-6 sm:grid-cols-3">
                  {[BarChart3, Workflow, Zap].map((Icon, i) => (
                    <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-left">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="mt-3 h-2.5 w-2/3 rounded-full bg-slate-200" />
                      <div className="mt-2 h-2 w-full rounded-full bg-slate-100" />
                      <div className="mt-1.5 h-2 w-4/5 rounded-full bg-slate-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tira de logos */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-400">Confían en nosotros</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {LOGOS.map((logo) => (
              <span key={logo} className="text-xl font-bold text-slate-300 transition hover:text-slate-400">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">Todo lo que tu equipo necesita</h2>
            <p className="mt-4 text-lg text-slate-500">Herramientas potentes diseñadas para que tu startup avance más rápido.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-slate-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto rounded-3xl border border-slate-200 bg-slate-50 px-8 py-14">
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {data.metrics.map((m, i) => (
              <div key={i}>
                <div className="text-4xl font-bold tracking-tight text-brand sm:text-5xl">{m.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">Precios simples y transparentes</h2>
            <p className="mt-4 text-lg text-slate-500">Elige el plan que crece con tu negocio. Sin sorpresas.</p>
          </div>
          <div className="mt-14 grid items-start gap-8 lg:grid-cols-3">
            {data.pricing.map((p, i) => (
              <div
                key={i}
                className={`relative rounded-3xl border bg-white p-8 shadow-sm transition ${
                  p.popular ? "border-transparent ring-2 ring-brand shadow-lg lg:-translate-y-3" : "border-slate-200 hover:shadow-md"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.plan}</h3>
                <p className="mt-2 text-sm text-slate-500">{p.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                  <span className="text-slate-500">{p.period}</span>
                </div>
                <button
                  className={`mt-6 w-full cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    p.popular
                      ? "bg-brand text-white hover:bg-brand-dark"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Empezar
                </button>
                <ul className="mt-8 space-y-3">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                      <Check className="h-4 w-4 shrink-0 text-brand" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">Lo que dicen nuestros clientes</h2>
            <p className="mt-4 text-lg text-slate-500">Miles de equipos confían en Flowbase cada día.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {data.testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-slate-700">&ldquo;{t.feedback}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                    {initials(t.name)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark to-brand px-8 py-16 text-center text-white shadow-xl shadow-brand/20">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight">Empieza a automatizar tu negocio hoy</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Únete a más de 12.000 equipos que ya escalan con Flowbase. Sin tarjeta de crédito.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-brand transition hover:bg-slate-100">
              Crear cuenta gratis <ArrowRight className="h-4 w-4" />
            </button>
            <button className="cursor-pointer rounded-xl border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10">
              Hablar con ventas
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-16">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 cursor-pointer">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-lg font-bold tracking-tight">Flowbase</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              La plataforma B2B que automatiza tu operación y acelera tu crecimiento.
            </p>
          </div>
          {[
            { title: "Producto", links: ["Funciones", "Precios", "Integraciones", "Novedades"] },
            { title: "Empresa", links: ["Sobre nosotros", "Clientes", "Empleo", "Contacto"] },
            { title: "Recursos", links: ["Blog", "Documentación", "Ayuda", "Estado"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="cursor-pointer transition hover:text-slate-900">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-12 border-t border-slate-100 pt-8 text-sm text-slate-400">
          © 2026 Flowbase Inc. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
