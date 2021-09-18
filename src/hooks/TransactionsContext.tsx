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

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionProps[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}