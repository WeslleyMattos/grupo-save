import { useState } from 'react';
import { Search, Plus, Pencil, Trash2 } from 'lucide-react';
import './empresas.css';

const Empresas = () => {
  const [empresas] = useState([
    {
      nome: 'W. Wandercock Carved Auto Pecas',
      email: 'BARBAJUTOPECA@GMAIL.COM',
      cnpj: '34.057.391/0001-00',
      estado: 'RJ',
      contato: '(22) 3081-2251',
      cidade: 'MACAE'
    },
    {
      nome: 'Raposa F Silva Clínica Química',
      email: 'COMASES@COMASES.COM.BR',
      cnpj: '24.532.578/0001-68',
      estado: 'MG',
      contato: '(31) 3331-6275',
      cidade: 'BELO HORIZONTE'
    },
    {
      nome: 'Palanha E Confeitaria São Jose',
      email: 'APADARIASJOJOSE@HOTMAIL.COM',
      cnpj: '51.085.959/0001-08',
      estado: 'SP',
      contato: '(18) 3659-1247',
      cidade: 'BILAC'
    },
    {
      nome: 'Fla Administradora De Bens LTDA',
      email: 'teste@teste.com.br',
      cnpj: '10.487.508/0001-10',
      estado: 'SC',
      contato: '(47) 3275-9100',
      cidade: 'JARAGUA DO SUL'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
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
        <button className="btn btn-primary">
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
            {filteredEmpresas.map((empresa, index) => (
              <tr key={index}>
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