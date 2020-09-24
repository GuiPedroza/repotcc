import React, {useState} from "react";
import {
  Button,
  ButtonToolbar,
  Col,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import { Container } from "../../commons/component";

import HeaderPaciente from "../../commons/component/header/HeaderPaciente";
import FooterMenu from "../../commons/component/footer/FooterMenu";

import "./ConsultaIndividualStyle.css";

export default function ConsultaIndividual({history}) {
  const [consulta,setConsulta]=useState({
    dadoSubjetivo:{
      local:"",
      comorbidade:"",
      observacao:""
    },
    dadoObjetivo:{
      peso:"",
      altura:"",
      abdomen:"",
      imc:"",
      respiracao:"",
      pressao:"",
      cardio:"",
      temperatura:"",
      dor:"",
      coleta:"",
      observacao:""
    },
    avaliacao:{
      ciap:"",
      cid:"",
      observacao:""
    },
    plano:{
      ciap:"",
      observacao:""
    },
    dataInclusao: new Date(),
    idAluno:'',
  });

  const handleSubmit = () => {
    sessionStorage.setItem('Consulta', JSON.stringify(consulta));
  }

  return (
    <>
    <HeaderPaciente/>
    <FooterMenu history={history}/>
    <Container className="bigbox" title="Consulta Individual" subtitle="tela aluno">
      <div style={{margin:5}}>
      <Container>
      <h3>Dados Subjetivos</h3>
        <Row>
        <Col sm={6}>
            <Label for="comorbidade">Local Atendimento</Label>
            <Input
              type="select"
              name="local"
              id="local"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,dadoSubjetivo:{...consulta.dadoSubjetivo, local: e.target.value}})}
              value={consulta.dadoSubjetivo.local}
              >
              <option value="">Selecione local atendimento</option>
              <option value="Clínica">Clínica</option>
              <option value="Domicílio Paciente">Domicílio Paciente</option>
            </Input>
        </Col>
        <Col sm={6}>
            <Label for="comorbidade">Condições/Situações de Saúde Gerais</Label>
            <Input
              type="select"
              name="comorbidade"
              id="comorbidade"
              onChange={e => setConsulta({...consulta,dadoSubjetivo:{...consulta.dadoSubjetivo, comorbidade: e.target.value}})}
              value={consulta.dadoSubjetivo.comorbidade}
            >
              <option value="">Selecione comorbidades</option>
              <option value="Síndrome metabólica">Síndrome metabólica</option>
              <option value="Cardiopatias">Cardiopatias</option>
              <option value="Dispneia aos esforços">Dispneia aos esforços</option>
              <option value="Câncer">Câncer</option>
              <option value="Aumento de carga sobre a estrutura corporal">Aumento de carga sobre a estrutura corporal</option>
              <option value="Condições de limitação física agravando a obesidade">Condições de limitação física agravando a obesidade</option>
            </Input>
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
        <FormGroup>
        <Label for="observacao">Observação Dados Subjetivos</Label>
        <Input
        type="textarea"
        id="observacao"
        onChange={e => setConsulta({...consulta,dadoSubjetivo:{...consulta.dadoSubjetivo, observacao: e.target.value}})}
        value={consulta.dadoSubjetivo.observacao}
      />
        </FormGroup>
        </Col>
        </Row>
      </Container>
      </div>
      <div style={{margin:5}}>
      <Container>
      <h3>Dados Objetivos</h3>
      <div style={{margin:5}}>
      <Container>
      <Row>
      <Col sm={3}>
            <Label for="peso">Peso</Label>
            <Input
              type="text"
              name="peso"
              id="peso"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, peso: e.target.value}})}
        value={consulta.dadoObjetivo.peso}
            />
        </Col>
        <Col sm={3}>
            <Label for="altura">Altura</Label>
            <Input
              type="text"
              name="altura"
              id="altura"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, altura: e.target.value}})}
        value={consulta.dadoObjetivo.altura}
            />
        </Col>
        <Col sm={4}>
            <Label for="abdomen">Circunferência Abdominal</Label>
            <Input
              type="text"
              name="abdomen"
              id="abdomen"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, abdomen: e.target.value}})}
        value={consulta.dadoObjetivo.abdomen}
            />
        </Col>
        <Button color="info" onClick={e=>e.preventDefault()}>Caular IMC</Button>
        </Row>
        </Container>
        </div>
        <Row>
      <Col sm={3}>
            <Label for="respiracao">Respiração</Label>
            <Input
              type="text"
              name="respiracao"
              id="respiracao"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, respracao: e.target.value}})}
        value={consulta.dadoObjetivo.respracao}
            />
        </Col>
        <Col sm={3}>
            <Label for="pressao">Pressão Arterial</Label>
            <Input
              type="text"
              name="pressao"
              id="pressao"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, pressao: e.target.value}})}
        value={consulta.dadoObjetivo.pressao}
            />
        </Col>
        <Col sm={3}>
            <Label for="cardio">Frequência Cardíaca</Label>
            <Input
              type="text"
              name="cardio"
              id="cardio"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, cardio: e.target.value}})}
        value={consulta.dadoObjetivo.cardio}
            />
        </Col>
        <Col sm={3}>
            <Label for="temperatura">Temperatura</Label>
            <Input
              type="text"
              name="temperatura"
              id="temperatura"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, temperatura: e.target.value}})}
        value={consulta.dadoObjetivo.temperatura}
            />
        </Col>
        </Row>
        <Row>
        <Col sm={4}>
            <Label for="dor">Nível de Dor</Label>

            <ButtonToolbar id="dor">
              <Button style={{backgroundColor:'green'}} onClick={() => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, dor:1}})}>1</Button>
              <Button style={{backgroundColor:'yellowgreen'}} onClick={() => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, dor:2}})}>2</Button>
              <Button style={{backgroundColor:'orange'}} onClick={() => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, dor:3}})}>3</Button>
              <Button style={{backgroundColor:'orangered'}} onClick={() => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, dor:4}})}>4</Button>
              <Button style={{backgroundColor:'red'}} onClick={() => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, dor:5}})}>5</Button>
            </ButtonToolbar>
            {/* <Input
              disabled
              type="text"
              name="dor"
              id="dor"
              //maxLength={50}
              placeholder="Trocar depois"
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, dor: e.target.value}})}
        value={consulta.dadoObjetivo.dor}
            /> */}
        </Col>
        <Col sm={4}>
            <Label for="glicemia">Glícemia Capilar</Label>
            <Input
              type="text"
              name="glicemia"
              id="glicemia"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, glicemia: e.target.value}})}
        value={consulta.dadoObjetivo.glicemia}
            />
        </Col>
        <Col sm={4}>
            <Label for="coleta">Momento Coleta</Label>
            <Input
              type="select"
              name="coleta"
              id="coleta"
              onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, coleta: e.target.value}})}
        value={consulta.dadoObjetivo.coleta}
            >
              <option value="">Selecione momento coleta glicemica</option>
              <option value="">Jejum</option>
              <option value="">Pós prandial</option>
            </Input>
        </Col>
        </Row>
        {/* <Row>
        <Col sm={6}>
        <Row style={{justifyContent:"space-evenly", alignItems:"center", margin:10}}>
        <Label>Vacinação cadastrada?</Label>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Sim
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Não
          </Label>
        </FormGroup>
        </Row>
        </Col>
        <Col sm={6}>
          <Row style={{justifyContent:"space-evenly",alignItems:"center", margin:10}}>
        <Label>Vacinação em dia?</Label>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Sim
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Não
          </Label>
        </FormGroup>
        </Row>
        </Col>
        </Row> */}
        <Row>
        <Col sm={12}>
        <FormGroup>
        <Label for="observacao">Observação Dados Ojetivos</Label>
        <Input type="textarea" id="observacao"
        onChange={e => setConsulta({...consulta,dadoObjetivo:{...consulta.dadoObjetivo, observacao: e.target.value}})}
        value={consulta.dadoObjetivo.observacao}
        />
        </FormGroup>
        </Col>
        </Row>
      </Container>
      </div>
      <div style={{margin:5}}>
      <Container>
      <h3>Avaliação</h3>
        <Row>
        <Col sm={6}>
            <Label for="ciap">CIAP</Label>
            <Input
              type="select"
              name="ciap"
              id="ciap"
              //maxLength={50}
              placeholder=""
              onChange={e => setConsulta({...consulta,avaliacao:{...consulta.avaliacao, ciap: e.target.value}})}
              value={consulta.avaliacao.ciap}
              >
              <option value="">Selecione ..</option>
            </Input>
        </Col>
        <Col sm={6}>
            <Label for="cid">CID</Label>
            <Input
              type="select"
              name="cid"
              id="cid"
              onChange={e => setConsulta({...consulta,avaliacao:{...consulta.avaliacao, cid: e.target.value}})}
              value={consulta.avaliacao.cid}
            >
              <option value="">Selecione ..</option>
            </Input>
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
        <FormGroup>
        <Label for="observacao">Observação Avaliação Profissional</Label>
        <Input type="textarea" id="observacao"
        onChange={e => setConsulta({...consulta,avaliacao:{...consulta.avaliacao, observacao: e.target.value}})}
        value={consulta.avaliacao.observacao}
        />
        </FormGroup>
        </Col>
        </Row>
      </Container>
      </div>
      <div style={{margin:5}}>
      <Container>
      <h3>Plano de Cuidados</h3>
      <Row>
        <Col sm={6}>
          <Label for="ciap">CIAP</Label>
          <Input
            type="select"
            name="ciap"
            id="ciap"
            //maxLength={50}
            placeholder=""
            onChange={e => setConsulta({...consulta,plano:{...consulta.plano, ciap: e.target.value}})}
            value={consulta.plano.ciap}
            >
            <option value="">Selecione ..</option>
          </Input>
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
        <FormGroup>
        <Label for="observacao">Observação Avaliação Profissional</Label>
        <Input type="textarea" id="observacao"
        onChange={e => setConsulta({...consulta,plano:{...consulta.plano, observacao: e.target.value}})}
        value={consulta.plano.observacao}
        />
        </FormGroup>
        </Col>
        </Row>
      </Container>
      </div>
      <Button color="info" onClick={()=>handleSubmit()}>Registrar</Button>
    </Container>
    </>
  );
}
