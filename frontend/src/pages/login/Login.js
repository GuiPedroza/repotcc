import React, { Component } from 'react';
import api from '../../services/api.js';
import history from './history';
import swal from 'sweetalert';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Spinner,
} from 'reactstrap';
import './Login.css';
import { handleTheme } from '../../commons/themeConfig';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      record: {
        user: '',
        password: '',
      },
      errorInput: {
        user: false,
        password: false,
      },
      loading: false,
    };
    this.url = `${process.env.REACT_APP_API}/Autenticar`;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.validateInput = this.validateInput.bind(this); 
  }

  getMenu() {
    let menu = [
      {
        id:1,
        descricao:'Cadastro Usuário',
        route:'cadastro-usuario',
        icon:'assignment_ind',
        excluido:false
      },
      {
        id:2,
        descricao:'Cadastro Paciente',
        route:'cadastro-paciente',
        icon:'group_add',
        excluido:false
      },
      {
        id:3,
        descricao:'Cadastro Familiar',
        route:'cadastro-familiar',
        icon:'family_restroom',
        excluido:false
      },
      {
        id:4,
        descricao:'Consulta Individual',
        route:'consulta-individual',
        icon:'how_to_reg',
        excluido:false
      },
    ];
    // if (!sessionStorage.getItem('Authorization')) return;
    // menu = JSON.parse(sessionStorage.getItem('Authorization')).module.menu;
    return menu;
  }

  goTo(route) {
    this.props.history.push(route);
  }

  togglePassword() {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  handleChange(e) {
    let name = e.target.name ? e.target.name : '';
    let value = e.target.value ? e.target.value : '';
    this.setState({ record: { ...this.state.record, [name]: value } });
  }

  validateInput(e) {
    const { record } = this.state;
    let inputName = e.target.name;

    this.setState({
      errorInput: {
        ...this.state.errorInput,
        [inputName]: !record[inputName],
      },
    });
  }

  handleError(error) {
    const data = error && error.data ? error.data : '';
    const status = data && data.statusCode ? data.statusCode : '';
    let message = data && data.message ? data.message : '';
    let title = 'Algo de errado aconteceu!';

    switch (status) {
      case 400:
        title = title ? title : 'Dados incorretos!';
        message = message ? message : 'Verifique os dados preenchidos.';
        break;
      case 401:
        title = message ? message : 'Falha ao autenticar!';
        message = 'Verifique se o usuário ou a senha estão corretos.';
        break;
      case 404:
        console.log('Não encontrado');
        break;
      case 500:
        message = 'Erro no servidor!';
        break;
      default:
        message = 'Erro desconhecido!';
    }

    if (message) swal(title, message, 'error');
    this.setState({
      errorInput: { user: true, password: true },
      loading: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { record } = this.state;

    // if (!record.user || !record.password) {
    //   return this.setState({
    //     ...this.state,
    //     errorInput: { user: !record.user, password: !record.password },
    //   });
    // }

    this.setState({ loading: true });
    this.login(record);
  }

  login(record) {
    // api
    //   .post('Autenticar', {
    //     login: record.user.toString().toUpperCase(),
    //     senha: record.password,
    //   })
    //   .then(response => {
    //     // Condição para status codes 400
    //     let error400 =
    //       response.data.statusCode >= 400 || response.data.statusCode <= 499;
    //     if (error400) {
    //       this.handleError(response);
    //     } else {
    //       this.setState({ loading: false });
    //       this.setAuthencate(response, record);
    //       this.goTo('/');
    //     }
    //   })
    //   .catch(error => this.handleError(error));
    this.setState({ loading: false });
    this.setAuthencate(record, record);
    this.goTo('/');
  }

  logout() {
    sessionStorage.removeItem('Authorization');
    sessionStorage.removeItem('roleSelected');
    sessionStorage.removeItem('User');
    history.replace('/login');
  }

  //autenticação

  async setAuthencate( data , { user }) {
    await sessionStorage.setItem('Authorization', JSON.stringify(data));
    sessionStorage.setItem('User', user);
  }

  // getAuthencate() {
  //   if (!sessionStorage.getItem('Authorization')) return;
  //   return JSON.parse(sessionStorage.getItem('Authorization'));
  // }

  // getInfo() {
  //   return {
  //     company: JSON.parse(sessionStorage.getItem('Authorization')).empresa,
  //     authToken: `Bearer ${
  //       JSON.parse(sessionStorage.getItem('Authorization'))
  //         .accessTokenAutenticacao
  //       }`,
  //     token: `Bearer ${
  //       JSON.parse(sessionStorage.getItem('Authorization')).accessToken
  //       }`,
  //     user: JSON.parse(sessionStorage.getItem('Authorization')).usuario,
  //   };
  // }

  // isAuthenticated() {
  //   let authorization = this.getAuthencate();
  //   if (!authorization) return false;
  //   let dateIso = authorization.expiration.replace(' ', 'T');
  //   let timeStampExpiresAt = new Date(dateIso).getTime();
  //   let timeStampToday = new Date().getTime();
  //   var authenticated = timeStampToday < timeStampExpiresAt;

  //   return authenticated;
  // }

  // userHasPermission(menuName) {
  //   let menuList = this.getMenu();

  //   if (!menuList) return false;

  //   for (let menuItem of menuList) {
  //     if (menuItem.nome === menuName || menuName === 'home') {
  //       return true;
  //     }
  //   }

  //   return false;
  // }

  render() {
    const { errorInput, loading, showPassword } = this.state;

    return (
      <div className={`login ${handleTheme().class}`}>
        <div className="s-460">          
          <Card>
            <div className="pad-16 center">
              <img
                src={handleTheme().logo}
                width="30%"
                alt="OrgSystem" />
            </div>

            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="user">Usuário</Label>
                  <Input
                    type="text"
                    name="user"
                    id="user"
                    invalid={errorInput.user}
                    placeholder="Digite o usuário"
                    onBlur={this.validateInput}
                    onChange={this.handleChange}
                  />
                  <FormFeedback>Informe o usuário</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="password">Senha</Label>
                  <InputGroup style={{ marginBottom: '24px' }}>
                    <Input
                      type={`${!showPassword ? 'password' : 'text'}`}
                      name="password"
                      id="password"
                      invalid={errorInput.password}
                      placeholder="Digite a senha"
                      onBlur={this.validateInput}
                      onChange={this.handleChange}
                    />
                    <InputGroupAddon addonType="append">
                      <Button
                        color={handleTheme().theme}
                        className="show-password"
                        onClick={this.togglePassword}
                      >
                        <i className="material-icons">
                          {showPassword ? 'visibility' : 'visibility_off'}
                        </i>
                      </Button>
                    </InputGroupAddon>
                    <FormFeedback>Informe a senha</FormFeedback>
                  </InputGroup>
                </FormGroup>

                <FormGroup className="no-margin-b">
                  <Button color={handleTheme().theme} block>
                    {loading ? (
                      <Spinner
                        style={{ margin: '0 6px' }}
                        size="sm"
                        color="light"
                      />
                    ) : (
                        <b>Confirmar</b>
                      )}
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
