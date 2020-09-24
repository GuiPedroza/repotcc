import React, {useState} from "react";
import {
Button,
  Col,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  Row
} from "reactstrap";
import { Container } from "../../commons/component";

export default function CadastroUsuario() {
  const [usuario, setUsuario] = useState({
    nome:'',
    ra:'',
    senha:'',
    curso:[],
    ubs:[],
    instituicao:''
  })
  return (
    <Container className="bigbox" title="Cadastro Usuario" subtitle="tela aluno">
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="nome">Nome Completo*</Label>
            <Input
              type="text"
              name="nome"
              id="nome"
              //maxLength={50}
              placeholder="Informe o nome do paciente"
              onChange={e => setUsuario({...usuario, nome: e.target.value})}
              value={usuario.nome}
            />
            <FormFeedback className="no-margin-t height-zero">
              Nome Completo(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label for="ra">Registro Acadêmico*</Label>
            <Input
              type="text"
              name="ra"
              id="ra"
              //maxLength={50}
              placeholder="Informe o registro academico"
              onChange={e => setUsuario({...usuario, ra:  e.target.value})}
              value={usuario.ra}
            />
            <FormFeedback className="no-margin-t height-zero">
            Registro Acadêmico(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
      <Col sm={6}>
          <FormGroup>
            <Label for="senha">Senha*</Label>
            <Input
              type="text"
              name="senha"
              id="senha"
              //maxLength={50}
              placeholder="Informe senha de autenticação"
              onChange={e => setUsuario({...usuario, senha:  e.target.value})}
              value={usuario.senha}
            />
            <FormFeedback className="no-margin-t height-zero">
            Senha(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="curso">Curso(s)*</Label>
            <Input
              type="select"
              name="curso"
              id="curso"
              //invalid={errorInput.idUsuarioPalavra}
              onChange={e=>{let op =[]; op.push(usuario.curso); setUsuario({...usuario, curso: op.push(e.target.value)})}}
              onBlur={e=>{let op = []; op.push(usuario.curso); setUsuario({...usuario, curso: op.push(e.target.value)})}}
              //disabled={!options.length}
            >
              {/* {options.map(item=> <option key={item} value={item}>{item}</option>)} */}
              <option value="">Selecione um ou mais curso(s)</option>
              <option value="1">Teste1</option>
              <option value="2">Teste2</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
            Curso(s) (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="ubs">Unidade de Saude alocado*</Label>
            <Input
              type="select"
              name="ubs"
              id="ubs"
              //onChange={this.handleChange}
              //invalid={errorInput.idUsuarioPalavra}
            >
              <option value="">Selecione uma ou mais unidades</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
            Unidade de Saude (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="instituicao">Instituição de Ensino*</Label>
            <Input
              type="text"
              name="instituicao"
              id="instituicao"
              //maxLength={50}
              placeholder=""
              //onChange={this.handleChange}
              value={usuario.instituicao}
              disabled
            />
          </FormGroup>
        </Col>
        </Row>
        <Button onClick={() => console.log("usuario",usuario)} color="info">Cadastrar</Button>
    </Container>
  );
}
