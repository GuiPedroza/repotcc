import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Footer.css";
import { Button } from "reactstrap";
import {toggleMenu} from "../../../store/modules/navbar/action";

const FooterMenu = (props) => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.navbar.selected);
  
  const handleClick = (selected) => {
    console.log(selected, selected);
    dispatch(toggleMenu(selected));
  };

  const goTo = (route) => {
    props.history.push(route);
  };

  return (
    <div className="footerFlex">
      <div className="footerContainer">
        <Button
          type="button"
          className="icon-btn"
          onClick={() => {if(selected!==1){handleClick(1);goTo('consulta-individual')}}}>
        <span class="material-icons" title="consulta individual" style={selected===1 ?{color:'#fff', margin:5, fontSize:25}:{color:'#89E7DF', margin:5, fontSize:25}}>how_to_reg</span>
        </Button>
        <Button
          type="button"
          className="icon-btn"
          onClick={() => {if(selected!==2){handleClick(2);goTo('historico-paciente')}}}>
        <span class="material-icons" title="histórico paciente" style={selected===2 ?{color:'#fff', margin:5, fontSize:25}:{color:'#89E7DF', margin:5, fontSize:25}}>pending_actions</span>
        </Button>
        {/* <Button
          type="button"
          className="icon-btn"
          onClick={() => {if(selected!==3){handleClick(3); goTo('resumo-clinico')}}}>
        <span class="material-icons" title="resumo clínico" style={selected===3 ?{color:'#fff', margin:5, fontSize:25}:{color:'#89E7DF', margin:5, fontSize:25}}>create_new_folder</span>
        </Button>
        <Button
        disabled//remover
          type="button"
          //className="icon-btn"
          onClick={() => {if(selected!==4){handleClick(4)}}}>
        <span class="material-icons" title="medicamentos" style={selected===4 ?{color:'#fff', margin:5, fontSize:25}:{color:'#89E7DF', margin:5, fontSize:25}}>local_pharmacy</span>
        </Button>
        <Button
        disabled//remover
          type="button"
          //className="icon-btn"
          onClick={() => {if(selected!==5){handleClick(5)}}}>
        <span class="material-icons" title="vacínas" style={selected===5 ?{color:'#fff', margin:5, fontSize:25}:{color:'#89E7DF', margin:5, fontSize:25}}>medical_services</span>
        </Button> */}
        {/* <span class="material-icons" title="" style={{color:'#fff', margin:5}}>biotech</span> */}
      </div>
    </div>
  );
};

export default FooterMenu;
