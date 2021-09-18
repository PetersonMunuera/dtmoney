import { useState } from 'react';
import Modal from 'react-modal'

import { Header } from "./components/Header";
import { Dasboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true)
  }

  function handleNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onNewTransactionModalOpen={handleNewTransactionModalOpen} />
      <Dasboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
    </>
  );
}