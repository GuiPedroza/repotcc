import React, {useState} from "react";
import {
  Button,
  Col,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  Row,
  Spinner,
  Toast,
  ToastBody
} from "reactstrap";
import pt from "date-fns/locale/pt";
import DatePicker from "react-datepicker";
import { Container } from "../../commons/component";

export default function CadastroPaciente() {

  const [paciente, setPaciente]= useState({
    nome:'',
    apelido:'',
    codigo:'',
    cpf:'',
    dataNascimento: null,
    idade:null,
    tipoSangue: null,
    estadoCivil: null,
    escolaridade: null,
    contatoPrincipal: '',
    contatoSecundario:'',
    profissao:null,
    ocupacao:null,
    raca:null,
    etinia:null,
    genero:null,
    idGenero:null,
    orientacaoSex:null,
    endereco:{
      municipio:null,
      uf:null,
      cep:null,
    },
    especial:'',
    dataInclusao: new Date(),
    idAluno:'',
    loading: false,
    success:false
  })

  const defaultState = {
    nome:'',
    apelido:'',
    codigo:'',
    cpf:'',
    dataNascimento: null,
    idade:null,
    tipoSangue: null,
    estadoCivil: null,
    escolaridade: null,
    contatoPrincipal: '',
    contatoSecundario:'',
    profissao:null,
    ocupacao:null,
    raca:null,
    etinia:null,
    genero:null,
    idGenero:null,
    orientacaoSex:null,
    endereco:{
      municipio:null,
      uf:null,
      cep:null,
    },
    especial:'',
    dataInclusao: new Date(),
    idAluno:'',
    loading: false,
    success:false
  }

  const handleSubmit = async() => {
    await sessionStorage.setItem('Paciente', JSON.stringify(paciente));
    setPaciente({...paciente, loading: true});
    setTimeout(()=>{
      setPaciente({...paciente, loading: false, success: true});
    },1500);

    setTimeout(()=>{
      setPaciente({...paciente,success: false});
    },4000);
  } 

  return (
    <Container className="bigbox" title="Cadastro Paciente" subtitle="tela aluno">
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
            onChange={e => setPaciente({...paciente, nome: e.target.value})}
            value={paciente.nome}
            />
            <FormFeedback className="no-margin-t height-zero">
              Nome Completo(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label for="apelido">Nome Social</Label>
            <Input
              type="text"
              name="apelido"
              id="apelido"
              //maxLength={50}
              placeholder="Informe o nome do paciente"
              onChange={e => setPaciente({...paciente, apelido: e.target.value})}
              value={paciente.apelido}
            />
            <FormFeedback className="no-margin-t height-zero">
              Nome Social
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="codigo">Cartão SUS*</Label>
            <Input
              type="text"
              name="codigo"
              id="codigo"
              //maxLength={50}
              placeholder="Informe o numero do seu cartão SUS"
              onChange={e => setPaciente({...paciente, codigo: e.target.value})}
              value={paciente.codigo}
            />
            <FormFeedback className="no-margin-t height-zero">
              Cartão SUS(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label for="cpf">CPF*</Label>
            <Input
              type="text"
              name="cpf"
              id="cpf"
              //maxLength={50}
              placeholder="Informe o numero do CPF"
              onChange={e => setPaciente({...paciente, cpf: e.target.value})}
              value={paciente.cpf}
            />
            <FormFeedback className="no-margin-t height-zero">
              CPF(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <FormGroup>
            <Label for="dataNascimento">Data Nascimento:*</Label>
            <DatePicker
              id="dataNascimento"
              name="dataNascimento"
              dateFormat="dd/MM/yyyy"
              locale={pt}
              selected={paciente.dataNascimento}
              maxDate={new Date()}
              onChange={value => setPaciente({...paciente, dataNascimento: value, idade: parseInt(new Date().getYear())-parseInt(value.getYear())})}
            />
          </FormGroup>
        </Col>
        {/* <Col sm={2}>
          <Label for="age">Idade</Label>
          <Input
            disabled
            type="text"
            name="age"
            id="age"
            //maxLength={50}
            placeholder="Calcula idade"
          //onChange={this.handleChange}
          //value={record.tema}
          />
        </Col> */}
        <Col sm={6}>
          <FormGroup>
            <Label for="tipoSangue">Tipo Sanguíneo*</Label>
            <Input
              type="select"
              name="tipoSangue"
              id="tipoSangue"
              onChange={e => setPaciente({...paciente, tipoSangue: e.target.value})}
              value={paciente.tipoSangue}
            >
              <option value="">Selecione tipo sanguíneo</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
              Tipo Sanguíneo (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="estadoCivil">Estado Civil*</Label>
            <Input
              type="select"
              name="estadoCivil"
              id="estadoCivil"
              onChange={e => setPaciente({...paciente, estadoCivil: e.target.value})}
              value={paciente.estadoCivil}
            >
              <option value="">Selecione estado civil</option>
              <option value="Solteiro">Solteiro</option>
              <option value="Casado">Casado</option>
              <option value="Viúvo">Viúvo</option>
              <option value="Separado">Separado</option>
              <option value="União Estável">União Estável</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
              Genero (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label for="escolaridade">Escolaridade*</Label>
            <Input
              type="select"
              name="escolaridade"
              id="escolaridade"
              onChange={e => setPaciente({...paciente, escolaridade: e.target.value})}
              value={paciente.escolaridade}
            >
              <option value="">Selecione grau escolaridade</option>
              <option value="Sem instrução ou menor que um ano">Sem instrução ou menor que um ano</option>
              <option value="Fundamental Incompleto">Fundamental Incompleto</option>
              <option value="Fundamental Completo">Fundamental Completo</option>
              <option value="Medio Incompleto">Medio Incompleto</option>
              <option value="Medio Completo">Medio Completo</option>
              <option value="Superior Incompleto">Superior Incompleto</option>
              <option value="Superior Completo">Superior Completo</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
              Genero (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="contatoPrincipal">Contato 1*</Label>
            <Input
              type="text"
              name="contatoPrincipal"
              id="contatoPrincipal"
              //maxLength={50}
              placeholder=""
              onChange={e => setPaciente({...paciente, contatoPrincipal: e.target.value})}
              value={paciente.contatoPrincipal}
            />
            <FormFeedback className="no-margin-t height-zero">
              Nome(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label for="contatoSecundario">Contato 2</Label>
            <Input
              type="text"
              name="contatoSecundario"
              id="contatoSecundario"
              //maxLength={50}
              placeholder=""
              onChange={e => setPaciente({...paciente, contatoSecundario: e.target.value})}
              value={paciente.contatoSecundario}
            />
            <FormFeedback className="no-margin-t height-zero">
              Cartão SUS(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="profissao">Profissão*</Label>
            <Input
              type="text"
              name="profissao"
              id="profissao"
              //maxLength={50}
              placeholder=""
              onChange={e => setPaciente({...paciente, profissao: e.target.value})}
              value={paciente.profissao}
            />
            <FormFeedback className="no-margin-t height-zero">
              Profissão(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label for="ocupacao">Ocupação*</Label>
            <Input
              type="text"
              name="ocupacao"
              id="ocupacao"
              //maxLength={50}
              placeholder=""
              onChange={e => setPaciente({...paciente, ocupacao: e.target.value})}
              value={paciente.ocupacao}
            />
            <FormFeedback className="no-margin-t height-zero">
              Cartão SUS(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="raca">Raça</Label>
            <Input
              type="select"
              name="raca"
              id="raca"
              onChange={e => setPaciente({...paciente, raca: e.target.value})}
              value={paciente.raca}
            >
              <option value="">Selecione a raça</option>
              <option value="Branco">Branco</option>
              <option value="Preto">Preto</option>
              <option value="Pardo">Pardo</option>
              <option value="Amarelo">Amarelo</option>
              <option value="Indígena">Indígena</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
              Genero (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label for="etinia">Etnia</Label>
            <Input
              type="select"
              name="etinia"
              id="etinia"
              onChange={e => setPaciente({...paciente, etinia: e.target.value})}
              value={paciente.etinia}
            >
              <option value="">Selecione um etnia</option>
              <option value="Branco">Branco</option>
              <option value="Preto">Negro</option>
              <option value="Pardo">Pardo</option>
              <option value="Indígena">Indígena</option>
              <option value="Mulatos">Mulatos</option>
              <option value="Caboclos">Caboclos</option>
              <option value="Cafuzos">Cafuzos</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
              Genero (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <FormGroup>
            <Label for="genero">Gênero*</Label>
            <Input
              type="select"
              name="genero"
              id="genero"
              onChange={e => setPaciente({...paciente, genero: e.target.value})}
              value={paciente.genero}
            >
              <option value="">Selecione um gênero</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
              Genero (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <Label for="idGenero">Identidade de Gênero</Label>
            <Input
              type="select"
              name="idGenero"
              id="idGenero"
              onChange={e => setPaciente({...paciente, idGenero: e.target.value})}
              value={paciente.idGenero}
            >
              <option value="">Selecione identidade de gênero</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
              Genero (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <Label for="orientacaoSex">Orientação Sexual</Label>
            <Input
              type="select"
              name="orientacaoSex"
              id="orientacaoSex"
              onChange={e => setPaciente({...paciente, orientacaoSex: e.target.value})}
              value={paciente.orientacaoSex}
            >
              <option value="">Selecione orientação sexual</option>
            </Input>
            <FormFeedback className="no-margin-t height-zero">
              Genero (*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <FormGroup>
            <Label for="municipio">Município*</Label>
            <Input
              type="text"
              name="municipio"
              id="municipio"
              //maxLength={50}
              placeholder=""
              onChange={e => setPaciente({...paciente, endereco:{...paciente.endereco, municipio: e.target.value}})}
              value={paciente.endereco.municipio}
            />
            <FormFeedback className="no-margin-t height-zero">
              Nome(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <Label for="uf">UF*</Label>
            <Input
              type="text"
              name="uf"
              id="uf"
              //maxLength={50}
              placeholder=""
              onChange={e => setPaciente({...paciente, endereco:{...paciente.endereco, uf: e.target.value}})}
              value={paciente.endereco.uf}
            />
            <FormFeedback className="no-margin-t height-zero">
              Cartão SUS(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <Label for="cep">CEP*</Label>
            <Input
              type="text"
              name="cep"
              id="cep"
              //maxLength={50}
              placeholder=""
              onChange={e => setPaciente({...paciente, endereco:{...paciente.endereco, cep: e.target.value}})}
              value={paciente.endereco.cep}
            />
            <FormFeedback className="no-margin-t height-zero">
              Cartão SUS(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <FormGroup>
            <Label for="especial">Necessidades Especiais</Label>
            <Input
            type="textarea"
            id="especial"
            onChange={e => setPaciente({...paciente, especial: e.target.value})}
            value={paciente.especial}
            />
          </FormGroup>
        </Col>
      </Row>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Button color="info" disabled={paciente.loading} onClick={()=>handleSubmit()}>{!paciente.loading?'Cadastrar':<Spinner/>}</Button>
      { paciente.success &&
        <Toast style={{backgroundColor: 'lightgreen'}}>
          <ToastBody>
            Cadastrado com sucesso!
          </ToastBody>
        </Toast>
    }
    </div>
    </Container>
  );
}
{/*<Container>
       <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="name">Nome Mãe*</Label>
            <Input
              type="text"
              name="name"
              id="name"
              //maxLength={50}
              placeholder=""
              //onChange={this.handleChange}
              //value={record.tema}
            />
            <FormFeedback className="no-margin-t height-zero">
              Nome(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label for="codigo">RG Mãe*</Label>
            <Input
              type="text"
              name="codigo"
              id="codigo"
              //maxLength={50}
              placeholder=""
              //onChange={this.handleChange}
              //value={record.tema}
            />
            <FormFeedback className="no-margin-t height-zero">
            Cartão SUS(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col sm={5}>
          <FormGroup>
            <Label for="name">Nome Pai*</Label>
            <Input
              type="text"
              name="name"
              id="name"
              //maxLength={50}
              placeholder=""
              //onChange={this.handleChange}
              //value={record.tema}
            />
            <FormFeedback className="no-margin-t height-zero">
              Nome(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={5}>
          <FormGroup>
            <Label for="codigo">RG Pai*</Label>
            <Input
              type="text"
              name="codigo"
              id="codigo"
              //maxLength={50}
              placeholder=""
              //onChange={this.handleChange}
              //value={record.tema}
            />
            <FormFeedback className="no-margin-t height-zero">
            Cartão SUS(*obrigatório)
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col sm={2}>
        <FormGroup>
            <Label for="selectAll">Desconhecido*</Label>
        <CustomInput
              type="checkbox"
              name="selectAll"
              id="selectAll"
              //onChange={this.selectAll}
              //checked={this.inputAll}
            />
            </FormGroup>
        </Col>
      </Row>
      </Container>*/}