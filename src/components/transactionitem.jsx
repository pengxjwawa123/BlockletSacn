import React from 'react';
import TransactionList from './transactionList';

const TransactionItem = ({ tx, price }) => {
  return (
    <div>
      <TransactionList tx={tx[0]} price={price} />
    </div>
  );
};
export default TransactionItem;
