import Transaction from '../models/Transaction';

export default{
  render(transaction: Transaction){
    return {
      id: transaction.id,
      description: transaction.description,
      valeu: transaction.value,
      date: transaction.date
    }
  }
}