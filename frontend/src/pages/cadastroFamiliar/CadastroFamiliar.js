import React, { useState, useCallback, useReducer } from "react";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Table
} from "reactstrap";
import { Container } from "../../commons/component";

export default function CadastroFamiliar() {

  const [nome, setNome] = useState('');
  const [rg, setRg] = useState('');
  const [idade, setIdade] = useState('');
  const [vinculo, setVinculo] = useState('');
  const [parentesco, setParentesco] = useState('');
  const [familiar, setFamiliar] = useState([]);

  const handleAdd = useCallback( () => {
    setFamiliar([...familiar, { nome: nome, rg: rg, idade: idade, vinculo: vinculo, parentesco: parentesco }]);
    console.log("familiar", familiar, familiar.length);
  }, [familiar, setFamiliar]);

  return (
    <Container className="bigbox" title="Cadastro Familiar" subtitle="tela aluno">
      <div style={{ margin:5}}>
      <Container>
        <Row>
          <Col sm={6}>
            <Label for="nome">Nome</Label>
            <Input
              type="text"
              name="nome"
              id="nome"
              //maxLength={50}
              placeholder=""
              onChange={e => setNome(e.target.value)}
              value={nome}
            />
          </Col>
          <Col sm={4}>
            <Label for="rg">RG</Label>
            <Input
              type="text"
              name="rg"
              id="rg"
              //maxLength={50}
              placeholder=""
              onChange={e => setRg(e.target.value)}
              value={rg}
            />
          </Col>
          <Col sm={2}>
            <Label for="idade">Idade</Label>
            <Input
              type="text"
              name="idade"
              id="idade"
              maxLength={3}
              placeholder=""
              onChange={e => setIdade(e.target.value)}
              value={idade}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Label for="vinculo">Vínculo</Label>
            <Input
              type="select"
              name="vinculo"
              id="vinculo"
              placeholder=""
              onChange={e => setVinculo(e.target.value)}
              value={vinculo}
            >
              <option value="">Selecione vínculo familiar</option>
            </Input>
          </Col>
          <Col sm={4}>
            <Label for="parentesco">Grau Parentesco</Label>
            <Input
              type="select"
              name="parentesco"
              id="parentesco"
              onChange={e => setParentesco(e.target.value)}
              value={parentesco}
            >
              <option value="">Selecione grau de parentesco</option>
              <option value="1">natural/cosanguíneo</option>
              <option value="2">afinidade</option>
            </Input>
          </Col>
          <Button color="info" onClick={() => handleAdd()}>Add</Button>
        </Row>
      </Container>
      </div>
      <Row>
        <Table>
          <thead>
            <th>Nome</th>
            <th>RG</th>
            <th>Idade</th>
            <th>Vínculo</th>
            <th>Grau Parentesco</th>
          </thead>
          <tbody>
            {familiar.length > 0 ? familiar.map((f, index) =>
              <tr key={index}>
                <td>{f.nome}</td>
                <td>{f.rg}</td>
                <td>{f.idade}</td>
                <td>{f.vinculo}</td>
                <td>{f.parentesco}</td>
              </tr>
            ) : null}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
