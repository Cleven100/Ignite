import { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'



export function Header() {

  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

 function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
 }

 function handleCloseNewTransactionModal() {
  setNewTransactionModalOpen(false);
 }

    return(
        <Container>
            <Content>
                 <img src={logoImg} alt="dt money"></img>
                <button type="button" onClick={handleOpenNewTransactionModal}>
                Nova transação
               </button>


               <Modal isOpen={newTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
                 <h2>Cadastrar transação</h2>
               </Modal>
            </Content>
           
        </Container>
    )
}