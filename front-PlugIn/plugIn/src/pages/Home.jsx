import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Instalación",
    description: "Altas de servicio para clientes residenciales y comerciales.",
  },
  {
    title: "Reconexión",
    description: "Restablecimiento rápido del servicio ante cortes o bajas temporales.",
  },
  {
    title: "Service técnico",
    description: "Mantenimiento y resolución de fallas en la conexión del cliente.",
  },
  {
    title: "Desconexión",
    description: "Bajas de servicio gestionadas de forma prolija y trazable.",
  },
];

const highlights = [
  {
    title: "Órdenes de trabajo",
    description:
      "Cada pedido genera una orden con número único, fecha, móvil asignado y el detalle de las tareas realizadas, siguiendo el flujo: nueva → vista → en proceso → terminada / no terminada.",
  },
  {
    title: "Móviles y equipos",
    description:
      "Los trabajos se asignan a móviles formados por 2 o 3 empleados y un vehículo, con integrantes que pueden rotar según disponibilidad del personal.",
  },
  {
    title: "Ranking de rendimiento",
    description:
      "Los empleados eligen su próxima tarea dentro de su pool asignado. El sistema mide la productividad semanal y prioriza técnicos destacados para clientes premium.",
  },
  {
    title: "Stock y vehículos",
    description:
      "Control de materiales (precintos, tarugos, módems, routers) con alertas de reposición, y seguimiento de cada vehículo: verificación técnica, neumáticos y mantenimiento.",
  },
];

const navigationSections = [
  {
    title: "Registrar",
    icon: "fa-file-signature",
    active: true,
    expandable: true,
    items: [
      { label: "Vehículo", icon: "fa-car", href: "/vehiculos" },
      { label: "Empleado", icon: "fa-users", href: "/empleados" },
      { label: "Tarea", icon: "fa-list-check", href: "/tareas" },
      { label: "Roles", icon: "fa-lock", href: "/roles" },
    ],
  },
  {
    title: "Otros",
    items: [
      { label: "Calendario", icon: "fa-calendar-days", href: "/calendario" },
      { label: "Galería de Fotos", icon: "fa-image", href: "/galeria" },
    ],
  },
  {
    title: "Información General",
    items: [{ label: "Documentación", icon: "fa-file", href: "/documentacion" }],
  },
];

function DashboardSidebar() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <aside className="dashboard-sidebar" aria-label="Navegación principal">
      <Link className="sidebar-brand" to="/home">
        <span className="sidebar-brand-mark" aria-hidden="true">
          <i className="fa-solid fa-play"></i>
        </span>
        <span>PlugIn</span>
      </Link>
      <br></br>
      <nav className="sidebar-navigation">
        {navigationSections.map((section) => (
          <div className="sidebar-section" key={section.title}>
            {section.expandable ? (
              <button
                className={`sidebar-section-heading sidebar-section-button${section.active ? " is-active" : ""}`}
                type="button"
                aria-expanded={isRegisterOpen}
                onClick={() => setIsRegisterOpen((isOpen) => !isOpen)}
              >
                <i className={`fa-solid ${section.icon}`} aria-hidden="true"></i>
                <span>{section.title}</span>
                <i
                  className={`fa-solid fa-chevron-down sidebar-chevron${isRegisterOpen ? " is-open" : ""}`}
                  aria-hidden="true"
                ></i>
              </button>
            ) : (
              <div className="sidebar-section-heading">
                <span>{section.title}</span>
              </div>
            )}
            {(!section.expandable || isRegisterOpen) && <div className="sidebar-section-items">
              {section.items.map((item) => (
                <Link className="sidebar-link" to={item.href} key={item.label}>
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function Home() {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <main className="dashboard-content">
        <div className="account-actions">
          <p className="profile-container">
            <a className="profile-button" href="/profile">
              <i className="fa-solid fa-user" aria-hidden="true"></i>
              Perfil
            </a>
          </p>
          <p className="logout-container">
            <a className="logout-button" href="/login">
              <span aria-hidden="true">➜]</span>
              Cerrar sesión
            </a>
          </p>
        </div>
        <section style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
        <h1>PlugIn</h1>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          PlugIn es una contratista dedicada a brindar servicio de internet por cable a clientes
          residenciales y comerciales. Este panel centraliza la recepción de pedidos, la
          planificación de trabajos, el control de stock y vehículos, y la gestión de personal, para
          reemplazar los procesos en papel por un sistema con trazabilidad completa.
        </p>
        </section>

      <section style={{ maxWidth: "900px", margin: "48px auto 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Qué gestiona el sistema</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid var(--border, #e5e4e7)",
                borderRadius: "10px",
                padding: "18px",
                textAlign: "left",
              }}
            >
              <h3 style={{ margin: "0 0 8px", fontSize: "17px", color: "var(--text-h, #08060d)" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.5 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: "900px", margin: "48px auto 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Tipos de trabajo</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "var(--accent-bg, rgba(255, 255, 255, 0.1))",
                border: "1px solid var(--accent-border, rgba(255, 255, 255, 0.5))",
                borderRadius: "10px",
                padding: "16px",
              }}
            >
              <h3 style={{ margin: "0 0 6px", fontSize: "16px", color: "var(--text-h, #08060d)" }}>
                {service.title}
              </h3>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.5 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      </main>
    </div>
  );
}

export default Home;