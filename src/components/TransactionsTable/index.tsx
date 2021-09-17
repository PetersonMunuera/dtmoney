import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
          </tr>
          <tr>
            <th>Preço</th>
          </tr>
          <tr>
            <th>Categoria</th>
          </tr>
          <tr>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000</td>
            <td>Venda</td>
            <td>20/08/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 800</td>
            <td>Casa</td>
            <td>20/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}