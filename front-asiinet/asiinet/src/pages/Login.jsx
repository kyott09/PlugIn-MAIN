import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoAsiinet from "../assets/brand/images/logo-login-sinfondo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }

      // se guarda solo la información del usuario para la vista, mientras el token queda en cookie HttpOnly
      sessionStorage.setItem("user", JSON.stringify(data.user));

      setIsLeaving(true);
      await new Promise((resolve) => setTimeout(resolve, 350));
      navigate("/home", { viewTransition: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`auth-page${isLeaving ? " is-leaving" : ""}`}>
      <section className="auth-card" aria-labelledby="login-title">
        <div className="auth-brand-wrap">
          <img src={logoAsiinet} alt="Asii  net" className="auth-brand-logo" />
        </div>

        <div className="auth-card-header">
          <h1 id="login-title">Iniciar sesión</h1>
          <p className="auth-subtitle">Usá tu cuenta de Asiinet</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-field">
            <span className="sr-only">Email</span>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        {/*
          <div className="auth-helper-row">
            <Link to="/register" className="auth-link muted-link" viewTransition>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          */}
          <label className="auth-field auth-field-password">
            <span className="sr-only">Contraseña</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="password-toggle"
              type="button"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              onClick={() => setShowPassword((isVisible) => !isVisible)}
            >
              <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i>
            </button>
          </label>

          <div className="auth-options">
            <label className="remember-option">
              <input type="checkbox" />
              <span>Recuérdame</span>
            </label>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Ingresando..." : "Siguiente"}
          </button>
        </form>

        <p className="auth-footer">
          ¿Es nuevo en Asiinet? <Link to="/register" viewTransition>Crear una cuenta</Link>
        </p>
      </section>
    </div>
  );
}

export default Login;