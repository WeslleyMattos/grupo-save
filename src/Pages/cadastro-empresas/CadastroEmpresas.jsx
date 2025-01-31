import { Tabs, Tab, Form, Button, Row, Col } from "react-bootstrap";

import "./cadastroEmpresas.css";

const CadastroEmpresas = () => {
  return (
    <div className="d-flex">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center my-3">
          <h2 className="p-4">Cadastro de Empresas</h2>
        </div>

        <Tabs
          defaultActiveKey="dadosGerais"
          id="cadastro-tabs"
          className="mb-3"
        >
          <Tab eventKey="dadosGerais" title="Dados Gerais">
            <Form>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formCnpj">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control type="text" placeholder="Digite o CNPJ" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o Nome" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formNomeFantasia">
                    <Form.Label>Nome Fantasia</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o Nome Fantasia"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formContato">
                    <Form.Label>Contato</Form.Label>
                    <Form.Control type="text" placeholder="Digite o Contato" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite o E-mail" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formCep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="Digite o CEP" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formPais">
                    <Form.Label>País</Form.Label>
                    <Form.Control type="text" placeholder="Digite o País" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEstado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="Digite o Estado" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formCidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="Digite a Cidade" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formRua">
                    <Form.Label>Rua</Form.Label>
                    <Form.Control type="text" placeholder="Digite a Rua" />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group controlId="formNumero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="text" placeholder="12345" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formComplemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o Complemento"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Tab>
          <Tab eventKey="filiais" title="Filiais">
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formNomeFilial">
                    <Form.Label>Nome da Filial</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o Nome da Filial"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formCnpjFilial">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o CNPJ da Filial"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formEnderecoFilial">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="Digite o Endereço" />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group controlId="formNumeroFilial">
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="text" placeholder="Digite o Número" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formBairroFilial">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="text" placeholder="Digite o Bairro" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formCidadeFilial">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="Digite a Cidade" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEstadoFilial">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="Digite o Estado" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formCepFilial">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="Digite o CEP" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formResponsavelFilial">
                    <Form.Label>Responsável</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o Nome do Responsável"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formTelefoneFilial">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" placeholder="Digite o Telefone" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Tab>
        </Tabs>

        <Button className="btn-save">Salvar</Button>
      </div>
    </div>
  );
};

export default CadastroEmpresas;