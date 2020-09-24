import React from 'react';
import {
  Button,
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Login from '../../pages/login/Login';
import { handleTheme } from '../themeConfig';

const login = new Login();

export const Container = props => {
  return (
    <Card className={props.className}>
      {props.title && (
        <div className="pad-16">
          <h1>{props.title}</h1>
          {/*  <span>{props.subtitle}</span> */}
        </div>
      )}

      <CardBody>
        <Form onSubmit={props.onSubmit}>{props.children}</Form>
      </CardBody>
    </Card>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

const PageHeader = props => {
  let letter = '';
  if (sessionStorage.getItem('User'))
    letter = sessionStorage
      .getItem('User')
      .charAt(0)
      .toUpperCase();

  return (
    <React.Fragment>
      <Navbar 
        color={handleTheme().theme} 
        light 
        expand="sm"
      >
        <Button
          type="button"
          title="Menu"
          className="icon-btn"
          onClick={() => props.toggleMenu()}
        >
          <i className="material-icons white">menu</i>
        </Button>

        <NavbarBrand style={{ marginLeft: '16px' }} href="/">
          <img style={{ height: '50px' }} src={handleTheme().logoLight} alt="logo" />
        </NavbarBrand>

        <Nav 
          className="ml-auto center"           
          style={{ backgroundColor: `${handleTheme().color}95` }}
          navbar>
          <UncontrolledDropdown>
            <DropdownToggle
              style={{ backgroundColor: 'transparent', border: 'none' }}
              title="Configurações"
            >
              <span class="material-icons" style={{color:'#fff', margin:5}}>settings</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => login.logout()} title="Sair">
                <span className="material-icons" style={{margin:5}}>
                  exit_to_app
                </span>
                Sair
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>

      {/* Side Menu */}
      <div className={`menu ${props.isOpen ? 'show' : ''}`}>
        <Link
          className="menu-item"
          title={`Ir para Home`}
          to={`/`}
          onClick={() => props.toggleMenu()}
        >
          <div className="row">
          <span className="material-icons" style={{margin:5, color:'#fff'}}>
            home
          </span>
          <p className="navbar__brand">Home</p>
          </div>
        </Link>
        {login.getMenu() ? (
          login.getMenu().map(item => (
            <Link
              className="menu-item"
              title={`Ir para ${item.descricao}`}
              key={item.id}
              to={`/${item.route}`}
              onClick={() => props.toggleMenu()}
            >
              <div className="row">
          <span className="material-icons" style={{margin:5, color:'#fff'}}>
            {item.icon}
          </span>
              <p className="navbar__brand">{item.descricao}</p>
            </div>
            </Link>
          ))
        ) : (
            <div className="pad">Sem opções disponíveis</div>
          )}
      </div>
    </React.Fragment>
  );
};

export default PageHeader;

PageHeader.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
};