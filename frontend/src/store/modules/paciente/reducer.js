export default function paciente(state = {}, action) {
  switch (action.type) {
    case "@movement/FIND_PACIENTE":
      const { paciente } = action;
      return {
        ...state,
        paciente,
      };
    case "@paciente/TOGGLE_PACIENTE":
      return {
        ...state,
        isOpenDataPaciente: action.isOpenDataPaciente,
      };
    default:
      return state;
  }
}