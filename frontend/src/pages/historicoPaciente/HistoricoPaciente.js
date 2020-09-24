import React, { useState, useEffect } from "react";
import {Table} from "reactstrap";
import { Container } from "../../commons/component";

import HeaderPaciente from "../../commons/component/header/HeaderPaciente";
import FooterMenu from "../../commons/component/footer/FooterMenu";

export default function HistoricoPaciente({history}){
  let consulta = null;
  const [historico,setHistorico]=useState([]);

  useEffect(() => {
  if (sessionStorage.getItem('Consulta')) {
    let user = sessionStorage.getItem('User');
    consulta = JSON.parse(sessionStorage.getItem('Consulta'));

    let aux = {
      data: consulta.dataInclusao.substr(8,2)+"/"+consulta.dataInclusao.substr(5,2)+"/"+consulta.dataInclusao.substr(0,4),
      local: consulta.dadoSubjetivo.local,
      motivo:null,
      avaliacao: consulta.avaliacao.observacao,
      plano: consulta.plano.observacao,
      aluno: user
    };
    setHistorico([aux]);
    console.log(aux)
  }
},[]);
console.log("historico", historico)
  return (
    <>
    <HeaderPaciente/>
    <FooterMenu history={history}/>
    <Container className="bigbox" title="Cadastro Familiar" subtitle="tela aluno">
        <Table>
          <thead>
            <th>Data Atendimento</th>
            <th>Local Atendimento</th>
            {/* <th>Motivo Consulta</th> */}
            <th>Avaliação</th>
            <th>Plano Cuidados</th>
            <th>Aluno Responsável</th>
          </thead>
          <tbody>
            {historico.length > 0 ?
            (
              <tr>
                <td>{historico[0].data}</td>
                <td>{historico[0].local}</td>
                <td>{historico[0].avaliacao}</td>
                <td>{historico[0].plano}</td>
                <td>{historico[0].aluno}</td>
              </tr>
            ) : null}
          </tbody>
          {/* <tbody>
            {historico.length > 0 ? historico.map((h, index) =>
              <tr key={index}>
                <td>{h.data}</td>
                <td>{h.local}</td>
                <td>{h.avaliacao}</td>
                <td>{h.plano}</td>
                <td>{h.aluno}</td>
              </tr>
            ) : null}
          </tbody> */}
        </Table>
    </Container>
    </>
  );
}