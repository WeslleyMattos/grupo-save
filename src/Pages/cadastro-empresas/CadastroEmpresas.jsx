import { useState } from "react";
import { Tabs, Tab, Form, Button, Row, Col } from "react-bootstrap";
import { isValid as isValidCNPJ } from "@fnando/cnpj"; //Unica biblioteca que encontrei para validar CNPJ
import "./cadastroEmpresas.css";

const CadastroEmpresas = () => {
  const [formData, setFormData] = useState({
    cnpj: "",
    nome: "",
    nomeFantasia: "",
    contato: "",
    email: "",
    cep: "",
    pais: "",
    estado: "",
    cidade: "",
    rua: "",
    numero: "",
    complemento: "",
  });

  const [errors, setErrors] = useState({ cnpj: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    if (id === "cnpj") validateCNPJ(value);
  };

  const validateCNPJ = (cnpj) => {
    if (!isValidCNPJ(cnpj)) {
      setErrors((prevErrors) => ({ ...prevErrors, cnpj: "CNPJ inválido!" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, cnpj: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidCNPJ(formData.cnpj)) {
      alert("CNPJ inválido! Corrija antes de enviar.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/empresas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Empresa cadastrada com sucesso!");
        setFormData({
          cnpj: "",
          nome: "",
          nomeFantasia: "",
          contato: "",
          email: "",
          cep: "",
          pais: "",
          estado: "",
          cidade: "",
          rua: "",
          numero: "",
          complemento: "",
        });
      } else {
        alert("Erro ao cadastrar a empresa.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao cadastrar a empresa.");
    }
  };

  return (
    <div className="d-flex">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center my-3">
          <h2 className="p-4">Cadastro de Empresas</h2>
        </div>

        <Tabs defaultActiveKey="dadosGerais" id="cadastro-tabs" className="mb-3">
          <Tab eventKey="dadosGerais" title="Dados Gerais">
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="cnpj">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o CNPJ"
                      value={formData.cnpj}
                      onChange={handleChange}
                      isInvalid={!!errors.cnpj}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cnpj}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o Nome"
                      value={formData.nome}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="nomeFantasia">
                    <Form.Label>Nome Fantasia</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o Nome Fantasia"
                      value={formData.nomeFantasia}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="contato">
                    <Form.Label>Contato</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o Contato"
                      value={formData.contato}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Digite o E-mail"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="cep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o CEP"
                      value={formData.cep}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="pais">
                    <Form.Label>País</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o País"
                      value={formData.pais}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="estado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o Estado"
                      value={formData.estado}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="cidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite a Cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="rua">
                    <Form.Label>Rua</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite a Rua"
                      value={formData.rua}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group controlId="numero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="12345"
                      value={formData.numero}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="complemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o Complemento"
                      value={formData.complemento}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button className="btn-save" type="submit">
                Salvar
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default CadastroEmpresas;
