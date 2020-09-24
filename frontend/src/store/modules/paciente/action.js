export function findPaciente(paciente){
  return {
    type: "@paciente/FIND_PACIENTE",
    paciente,
  }
}

export function togglePaciente(status) {
  return {
    type: "@paciente/TOGGLE_PACIENTE",
    isOpenDataPaciente:status,
  };
}