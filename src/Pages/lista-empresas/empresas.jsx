import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import "./empresas.css";

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch empresas from json-server
  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await fetch("http://localhost:3001/empresas");
        const data = await response.json();
        setEmpresas(data);
      } catch (error) {
        console.error("Erro ao buscar empresas:", error);
      }
    };

    fetchEmpresas();
  }, []);

  const filteredEmpresas = empresas.filter((empresa) =>
    empresa.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="text-center mb-4">
        <h1>Empresas Cadastradas</h1>
      </div>

      <div className="mb-4 d-flex flex-column align-items-center w-100">
        <div className="input-group mb-3 w-100">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Pesquisar empresa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="button">
            <Search size={20} />
          </button>
        </div>
        <button className="btn btn-primary" onClick={() => navigate("/cadastro-empresas")}>
          <Plus size={20} /> Criar Empresa
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CNPJ</th>
              <th>Estado</th>
              <th>Contato</th>
              <th>Cidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmpresas.map((empresa) => (
              <tr key={empresa.id}>
                <td>{empresa.nome}</td>
                <td>{empresa.email}</td>
                <td>{empresa.cnpj}</td>
                <td>{empresa.estado}</td>
                <td>{empresa.contato}</td>
                <td>{empresa.cidade}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <Pencil size={16} />
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Empresas;
