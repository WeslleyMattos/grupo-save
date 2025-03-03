import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // simulando o login, deixei com 2 sec para simular a requisição na api
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/cadastro-empresas");
    }, 2000);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <img
          src="../public/logo.webp"
          alt="Logo"
          className="mb-4 mx-auto d-block"
          style={{ maxWidth: "250px", width: "100%" }}
        />

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label text-black">
              E-mail
            </label>
            <div className="input-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Digite seu e-mail"
                required
              />
              <i
                className="bi bi-envelope"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "default",
                }}
              ></i>
            </div>
          </div>

          <div className="mb-4 position-relative">
            <label htmlFor="password" className="form-label text-black">
              Senha
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control pe-5"
              placeholder="Digite sua senha"
              required
            />

            <i
              className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                top: "70%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-warning w-100"
          >
            {isLoading ? (
              <span className="spinner-border spinner-border-sm text-light mr-2"></span>
            ) : (
              "Entrar"
            )}
          </button>
        </form>

        <p className="text-center text-black mt-4">
          Não tem uma conta?{" "}
          <a href="/#plans" className="text-warning">
            Cadastrar-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
