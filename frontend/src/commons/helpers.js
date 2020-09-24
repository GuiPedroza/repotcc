import swal from 'sweetalert';
import Login from '../pages/login/Login';

const login = new Login();

export const handleError = (error, action) => {
  let data = error && error.data ? error.data : '';
  let message = data && data.message ? data.message : '';
  let status = '';

  if (data || error) {
    status = data.statusCode ? data.statusCode : error.status;
  }

  switch (status) {
    case 400:
      message = message ? message : 'Verifique os dados enviados';
      break;
    case 401:
      login.logout();
      break;
    case 404:
      console.log('Não encontrado');
      break;
    case 500:
      message = 'Erro no servidor';
      break;
    default:
      message = 'Erro desconhecido!';
  }

  if (message) swal('Algo de errado aconteceu!', message, 'error');

  if (action) action();
};

export const formatDate = data => {
  let date = data ? new Date(data) : new Date();
  let day = date
    .getDate()
    .toString()
    .padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatDateFull = data => {
  let date = data ? new Date(data) : new Date();
  let day = date
    .getDate()
    .toString()
    .padStart(2, '0');
  let hour = date.getHours();
  let minute = date.getMinutes();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();

  return `${day}/${month}/${year} ${hour}:${minute}`;
};
