import CadastroUsuario from '../pages/cadastroUsuario/CadastroUsuario';
import CadastroPaciente from '../pages/cadastroPaciente/CadastroPaciente';
import CadastroFamiliar from '../pages/cadastroFamiliar/CadastroFamiliar';
import ConsultaIndividual from '../pages/consultaIndividual/ConsultaIndividual';
import HistoricoPaciente from '../pages/historicoPaciente/HistoricoPaciente';
import ResumoClinico from '../pages/resumoClinico/ResumoClinico';
import Home from '../pages/home/Home';

const Pages = {
  Home: {
    name: 'home',
    menuName: 'Home',
    route: '/',
    component: Home,
  },
  CadastroUsuario: {
    name: 'cadastro-usuario',
    menuName: 'Cadastro de Usuário',
    route: '/cadastro-usuario',
    component: CadastroUsuario,
  },
  CadastroPaciente: {
    name: 'cadastro-paciente',
    menuName: 'Cadastro de Paciente',
    route: '/cadastro-paciente',
    component: CadastroPaciente,
  },
  CadastroFamiliar: {
    name: 'cadastro-familiar',
    menuName: 'Cadastro Familiar',
    route: '/cadastro-familiar',
    component: CadastroFamiliar,
  },
  ConsultaIndividual: {
    name: 'consulta-individual',
    menuName: 'Consulta Individual',
    route: '/consulta-individual',
    component: ConsultaIndividual,
  },
  HistoricoPaciente: {
    name: 'historico-paciente',
    menuName: 'Histórico Paciente',
    route: '/historico-paciente',
    component: HistoricoPaciente,
  },
  ResumoClinico: {
    name: 'resumo-clinico',
    menuName: 'Resumo Clínico',
    route: '/resumo-clinico',
    component: ResumoClinico,
  },
};

export default Pages;
