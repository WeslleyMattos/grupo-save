import { useEffect, useState } from 'react';
import './planilha.css';

const ListaPlanilhas = () => {
  const [planilhas, setPlanilhas] = useState([]);

  useEffect(() => {
    const planilhasFake = [
      { id: 1, nome: 'Planilha de Vendas', dataCriacao: '2025-01-01' },
      { id: 2, nome: 'Planilha de Estoque', dataCriacao: '2025-01-10' },
      { id: 3, nome: 'Planilha de Contas', dataCriacao: '2025-01-15' },
      { id: 4, nome: 'Planilha de Clientes', dataCriacao: '2025-01-20' },
      { id: 5, nome: 'Planilha de Finanças', dataCriacao: '2025-01-25' },
    ];

    setPlanilhas(planilhasFake);
  }, []);

  return (
    <div className="lista-planilhas">
      <h1>Lista de Planilhas</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Criação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {planilhas.length > 0 ? (
            planilhas.map((planilha) => (
              <tr key={planilha.id}>
                <td>{planilha.nome}</td>
                <td>{new Date(planilha.dataCriacao).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleAbrirPlanilha(planilha.id)}>
                    <i className="bi bi-folder"></i>
                  </button>
                  <button onClick={() => handleDownloadPlanilha(planilha.id)}>
                    <i className="bi bi-download"></i>
                  </button>
                  <button onClick={() => handleDeletarPlanilha(planilha.id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="no-planilhas">Nenhuma planilha encontrada</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  function handleAbrirPlanilha(id) {
    console.log("Abrir planilha com id:", id);
  }

  function handleDeletarPlanilha(id) {
    console.log("Deletar planilha com id:", id);
  }

  function handleDownloadPlanilha(id) {
    console.log("Baixar planilha com id:", id);
  }
};

export default ListaPlanilhas;
