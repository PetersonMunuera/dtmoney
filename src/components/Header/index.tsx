import { Container, Content } from "./styles";

import logoImg from '../../assets/logo.svg'

type HeaderProps = {
  onNewTransactionModalOpen: () => void
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={props.onNewTransactionModalOpen}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}