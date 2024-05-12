import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import igniteLogo from '../../assets/ignite-logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={igniteLogo} />
          <h1>DT Money</h1>
        </div>

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
