import { Container } from "./styles";

import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function Dasboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}