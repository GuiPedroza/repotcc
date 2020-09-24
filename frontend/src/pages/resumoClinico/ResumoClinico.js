import React, { useState } from "react";
import {Table} from "reactstrap";
import { Container } from "../../commons/component";

import HeaderPaciente from "../../commons/component/header/HeaderPaciente";
import FooterMenu from "../../commons/component/footer/FooterMenu";

export default function ResumoClinico ({history}){
  const [resumo,setResumo]=useState([]);

  return (
    <>
    <HeaderPaciente/>
    <FooterMenu history={history}/>
    <Container className="bigbox" title="Resumo Clínico">
        <Table>
          <thead>
            <th>Data Descoberta</th>
            <th>Condições/Situações de Saúde</th>
            <th>Aluno Responsável</th>
          </thead>
          <tbody>
            {resumo.length > 0 ? resumo.map((r, index) =>
              <tr key={index}>
                <td>{r.data}</td>
                <td>{r.situacao}</td>
                <td>{r.aluno}</td>
              </tr>
            ) : null}
          </tbody>
        </Table>
    </Container>
    </>
  );
}