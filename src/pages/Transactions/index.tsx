import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  ArrowButton,
  PageButton,
  Pagination,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'
import { CaretLeft, CaretRight } from 'phosphor-react'

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (ctx) => {
    return ctx.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>

        <Pagination>
          <ArrowButton>
            <CaretLeft size={16} weight="bold" />
          </ArrowButton>
          <PageButton isSelect={true}>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <ArrowButton isTherePage={true}>
            <CaretRight size={16} weight="bold" />
          </ArrowButton>
        </Pagination>
      </TransactionsContainer>
    </div>
  )
}
