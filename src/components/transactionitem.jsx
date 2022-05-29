import React from 'react';
import TransactionList from './transactionlist';

const TransactionItem = ({ tx, price }) => {
  return (
    <div>
      <TransactionList tx={tx[0]} price={price} />
    </div>
  );
};
export default TransactionItem;
