import { useState } from 'react';
import Modal from 'react-modal'
import { TransactionsProvider } from './hooks/useTransactions';

import { Header } from "./components/Header";
import { Dasboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from "./styles/global";

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
    <TransactionsProvider>
      <Header onNewTransactionModalOpen={handleNewTransactionModalOpen} />
      <Dasboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
    </TransactionsProvider>
  );
}