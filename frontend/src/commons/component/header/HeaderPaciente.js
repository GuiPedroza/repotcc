import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Header.css";
import * as PacienteActions from "../../../store/modules/paciente/action";
import { nominalTypeHack } from "prop-types";
import {Button} from "reactstrap";

const HeaderPaciente = () => {
  let paciente = null;
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => ({ isOpen: state.paciente.isOpenDataPaciente }));

  if (sessionStorage.getItem('Paciente')) {
    paciente = JSON.parse(sessionStorage.getItem('Paciente'));
  }

  const handleClick = () => {
    dispatch(PacienteActions.togglePaciente(!!!isOpen));
  };

  return (
    <div className="headerFlex">
      <div className="headerContainer">
        {!isOpen ? (
          <div style={{display:'flex', flexDirection: 'row'}} onClick={() => handleClick()}>
          <span class="material-icons" style={{ color: '#fff', margin: 5, cursor: "pointer" }}>perm_identity</span>
          <span class="material-icons" style={{ color: '#fff', margin: 5, cursor: "pointer" }}>arrow_drop_down</span>
          </div>
        ) : (
        <div style={{display:'flex', flexDirection: 'column'}}>
          <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}} onClick={() => handleClick()}>
            <span class="material-icons" style={{ color: '#fff', margin: 5, cursor: "pointer" }}>perm_identity</span>
            <span class="material-icons" style={{ color: '#fff', margin: 5, cursor: "pointer" }}>arrow_drop_up</span>
          </div>

          {paciente && (
            <div style={{ background: '#fff', borderRadius:5 }}>
              <span>Nome: {paciente.nome}</span><br/>
              <span>Apelido: {paciente.apelido}</span><br/>
              <span>Cód: {paciente.codigo}</span><br/>
              <span>Idade: {paciente.dataNascimento}</span><br/>
              <span>Sexo: {paciente.genero}</span><br/>
              <span>Necessidades: {paciente.especial}</span>
            </div>
          )}

          <Button color="info" style={{alignSelf:'center', borderColor:'#006ba4', margin:5}}>Buscar Paciente</Button>
        </div>
        )}
      </div>
    </div>
  );
};

export default HeaderPaciente;
