import React from 'react';

const RouteAuthorization = (WrappedComponent, name, loginComponent) => {
  return class WithAuthorization extends React.Component {
    render() {
      let allowed = true;//loginComponent.userHasPermission(name);
      
      if (allowed) {
        return (
          <WrappedComponent
            {...this.props}
            //auth={loginComponent.getInfo()}
            style={{ display: `${allowed ? 'initial' : 'none'}` }}
          />
        );
      } else {
        return (
          <div className="container">
            <h1 className="authorization-title">
              <i className="material-icons">error_outline</i>
              Usuário sem acesso a essa área!
            </h1>
          </div>
        );
      }
    }
  }
}

export default RouteAuthorization;