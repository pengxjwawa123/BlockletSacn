import TransactionList from './transactionList';

const TransactionItem = ({ block, price, page, pagSize }) => {
  return (
    <div>
      <TransactionList tx={tx[0]} price={price} />
    </div>
  );
};
export default TransactionItem;
