import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatters'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionContanier,
  TransationsTable,
} from './styles'

export function Transaction() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContanier>
        <SearchForm />
        <TransationsTable>
          <tbody>
            {transactions.map((transactions) => {
              return (
                <tr key={transactions.id}>
                  <td width="50%">{transactions.description}</td>
                  <PriceHighLight variant={transactions.type}>
                    {transactions.type === 'outcome' && '- '}
                    {priceFormatter.format(transactions.price)}
                  </PriceHighLight>
                  <td>{transactions.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transactions.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransationsTable>
      </TransactionContanier>
    </div>
  )
}
