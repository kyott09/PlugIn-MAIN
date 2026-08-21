import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Home</h1>
      <p>Bienvenido a la aplicación.</p>
      <Link to="/users" style={{ color: "#2563eb", fontWeight: 600 }}>
        Ver lista de usuarios
      </Link>
    </div>
  );
}

export default Home;
