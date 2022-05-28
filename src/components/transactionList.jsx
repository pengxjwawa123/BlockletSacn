import React from 'react';
import dayjs from 'dayjs';

const TransactionList = ({ tx, price }) => {
  let OUTPUT = 0;
  const ether = (wei) => wei / 100000000;

  return (
    <>
      <div>
        <div className="md:flex justify-between items-center">
          <div className="font-bold text-sm py-2">Hash</div>
          <div className="text-sm opacity-80">{tx?.hash.slice(0, 16) + '...' + tx?.hash.slice(-16)}</div>
          <div className="text-sm opacity-80">{dayjs.unix(tx?.time).toString()}</div>
        </div>
        <div className="md:flex justify-between py-2">
          <div>
            <div className="font-bold text-sm tracking-wide py-2">From</div>
            {tx?.inputs?.map((input, idx) => (
              <div key={idx} className="text-sm opacity-80 md:flex justify-between">
                <div>
                  {input?.prev_out?.addr
                    ? input?.prev_out?.addr?.slice(0, 12) + '...' + input?.prev_out?.addr?.slice(-12)
                    : input?.prev_out?.n + ''}
                </div>
                <div>
                  {ether(input?.prev_out?.value) + ' ' + 'BTC'} ($
                  {(ether(input?.prev_out?.value) * price?.usd).toFixed(2) / 1})
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="font-bold text-sm tracking-wide py-2">To</div>
            {tx?.out?.map((output, idx) => (
              <div key={idx} className="text-sm opacity-80 md:flex justify-between">
                <div>
                  {output?.addr
                    ? output?.addr.slice(0, 12) + '...' + output?.addr.slice(0, 12).slice(-12)
                    : output?.n + ' '}
                </div>
                <div>
                  {ether(output?.value) + ' ' + 'BTC'} (${(ether(output?.value) * price?.usd).toFixed(2) / 1})
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-bold text-sm tracking-wide py-2">Fee</div>
          <div className="text-sm opacity-80 md:flex justify-between">
            {ether(tx?.fee) + ' ' + 'BTC'} ($
            {(ether(tx?.fee) * price?.usd).toFixed(2) / 1})
          </div>
        </div>
        <div>
          <div className="font-bold text-sm tracking-wide py-2">Total</div>
          <div className="text-sm opacity-80 md:flex justify-between">
            {tx?.out?.map((output, idx) => {
              OUTPUT = OUTPUT + output?.value;
            })}
            <div>
              {ether(OUTPUT) + ' ' + 'BTC'} (${(ether(OUTPUT) * price?.usd).toFixed(2) / 1})
            </div>
          </div>
        </div>
      </div>
      <hr className="border-none h-[1px] bg-secondary" />
    </>
  );
};
export default TransactionList;
