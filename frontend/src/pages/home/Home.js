import React, { Component } from 'react';
import '../../assets/styles/style.css';
import Login from '../login/Login';

const CardItem = props => {
  if (props.show) {
    return (
      <div
        className="card-shortcurt"
        title={`Ir para ${props.description}`}
        onClick={() => props.goTo(props.route)}>

        <i className="material-icons" style={{ fontSize: '60px', color: '#87B4E5'}}>
          {props.icon}
        </i>
        <aside style={{color: '#006FCF'}}>{props.description}</aside>
      </div>
    );
  }
  else return null
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortcutList: [
        {
          id: 1,
          icon: 'assignment_ind',
          description: 'Cadastro Usuário',
          route: 'cadastro-usuario'
        },
        {
          id: 2,
          icon: 'group_add',
          description: 'Cadastro Paciente',
          route: 'cadastro-paciente'
        },
        {
          id: 3,
          icon: 'how_to_reg',
          description: 'Consulta Individual',
          route: 'consulta-individual'
        },
        {
          id: 4,
          icon: 'family_restroom',
          description: 'Cadastro Familiar',
          route: 'cadastro-familiar'
        },
      ]
    }
  }

  componentDidMount() {
    let { shortcutList } = this.state;

    //let permission = JSON.parse(sessionStorage.getItem('Authorization')).module.menu;

    shortcutList.map(item => this.checkPermission(item))

    this.setState({ shortcutList: shortcutList })
  }

  checkPermission(item) {
    // let exist = permission.filter(menu => item.route === menu.nome);
    // if (exist && exist.length) { item.show = true }
    item.show = true
  }

  goTo = (route) => {
    this.props.history.push(route);
  }

  render() {
    const { shortcutList } = this.state;
    return (
      <div className="center" style={{ width: '100%' }}>
        <div className="container-shortcurt">
          {
            shortcutList.map(shortcut => {
              return (
                <CardItem
                  {...shortcut}
                  key={shortcut.id}
                  goTo={this.goTo}
                  show={shortcut.show} />
              )
            })
          }
        </div>
      </div>
    );
  }
}
