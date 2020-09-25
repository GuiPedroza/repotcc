import React from 'react';
import { Modal, Spinner} from 'reactstrap';

const ModalLoading = (props) => {
  const {
    status
  } = props;

  return (
    <Modal isOpen={status} style={{display: 'flex', flexDirection:'row', alignSelf:'center', alignItems: 'center', justifyContent: 'center'}}>
      <Spinner style={{ width: '3rem', height: '3rem' }} color="info"/>
      <spam color="info">Carregando...</spam>
    </Modal>
);
}

export default ModalLoading;