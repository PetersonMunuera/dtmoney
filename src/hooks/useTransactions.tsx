import { createContext, ReactNode, useState, useEffect, useContext } from "react";
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
  createTransaction: (transaction: TransactionInputProps) => Promise<void>
}

type TransactionsProviderProps = {
  children: ReactNode
}

const TransactionsContext = createContext<TransactionContextProps>({} as TransactionContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    
    const { transaction } = response.data
    
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionsContext)
}