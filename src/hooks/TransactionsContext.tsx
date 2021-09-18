import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../services/api";

type TransactionProps = {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>

type TransactionContextProps = {
  transactions: TransactionProps[]
  createTransaction: (transaction: TransactionInputProps) => void
}

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionContextProps>({} as TransactionContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInputProps) {
    api.post('transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}