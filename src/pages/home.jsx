import React, { useState, useEffect, useCallback } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import dayjs from 'dayjs';
import { Pagination } from 'antd';
import BlockDetailList from '../components/blockList';
import Card from '../components/card';
import TransactionList from '../components/transactionList';
// import TransactionItem from '../components/transactionItem';

const Home = () => {
  const ether = (wei) => wei / 100000000;
  const abbr = (str) => str?.slice(0, 12).toString() + '...' + str?.slice(-12).toString();

  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [blockHash, setBlockHash] = useState('0000000000000000000667b13b344cf667551f5ccbb9c32bdb183bc1060181a0');
  const [block, setBlock] = useState([]);
  const [price, setPrice] = useState();
  const [value, setValue] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [currentReward, setCurrentReward] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const getBlockHashdetails = async () => {
    const response = await fetch(`https://blockchain.info/rawblock/${blockHash.toString()}`);
    const data = await response.json();
    setBlock([data]);
    // console.log(data);
  };

  const TransactionItem = () => {
    const transactionItem = [];
    const current = (page - 1) * pageSize;
    const target = page * pageSize;
    for (let i = current; i < target; i++) {
      transactionItem.push(<TransactionList key={i} tx={block[0]?.tx[i]} price={price} />);
    }
    return transactionItem;
  };

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <button type="button">Previous</button>;
    }

    if (type === 'next') {
      return <button type="button">Next</button>;
    }
    return originalElement;
  };

  const getBTCPrices = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    setPrice(data.bitcoin);
  };

  useEffect(() => {
    const blockheight = Math.round(block[0]?.height / 210000);
    const currentOut = 100 / 2 ** blockheight;
    setCurrentReward(currentOut);
  }, [block]);

  useEffect(() => {
    getBlockHashdetails();
    getBTCPrices();
  }, [blockHash]);

  useEffect(() => {
    setValue('');
  }, [block]);

  useEffect(() => {
    let outputs = 0;
    block[0]?.tx?.forEach((t) => {
      t?.out.forEach((o) => {
        outputs += o?.value;
      });
    });
    setTotalCount(outputs);
  }, [block]);

  useEffect(() => {
    let totalFee = 0;
    block[0]?.tx?.map((t, _) => {
      totalFee += t?.fee;
    });
    setTotalFee(totalFee);
  }, [block]);

  const handleResize = useCallback(() => {
    setWidth(document.documentElement.clientWidth);
  });

  useEffect(() => {
    const onResize = window.addEventListener('resize', handleResize);
    return onResize;
  }, [document.documentElement.clientWidth]);

  return (
    <div className="bg-base-100">
      <section className="flex flex-col justify-between items-center m-auto p-2 max-w-screen-lg">
        <div className="text-3xl tracking-wider font-black  my-10">Explore Blockchain</div>
        <div className="relative w-full max-w-xl p-3 rounded-lg shadow-md shadow-secondary bg-[#ebe0e4]">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setBlockHash(value);
              // getBlockHashdetails();
              // getBTCPrices();
            }}
            className="absolute px-3 py-2 right-4 top-[16px] rounded-lg bg-secondary text-base-100">
            <SearchIcon className="h-6" />
          </button>
          <input
            type="text"
            pattern="^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$"
            placeholder="Input explore blockchain"
            value={value}
            className="p-3 w-full rounded-md text-md outline-none"
            onInput={(e) => {
              e.preventDefault();
              setValue(e.target.value);
            }}
          />
        </div>
      </section>
      {/* <section className="flex flex-col justify-between items-center m-auto p-2 max-w-screen-md">{block}</section> */}
      {/* <section className="flex flex-col justify-between items-center m-auto p-2 max-w-screen-md">{txhash}</section> */}
      <section className="flex flex-col justify-between items-center m-auto p-2 max-w-screen-lg gap-y-4 mt-5">
        {blockHash !== undefined ? (
          <Card className="text-md opacity-90">
            <h1 className="text-lg font-bold">Block {block[0]?.height?.toString()}</h1>
            <p>
              This block was mined on {dayjs.unix(block[0]?.time).toString()} by {block[0]?.miner}. It currently has{' '}
              {block[0]?.n_tx}
              confirmations on the Bitcoin blockchain.
            </p>
            <p>
              The miner(s) of this block earned a total reward of {currentReward?.toString()} BTC ($
              {(currentReward * price?.usd) / 1.0}). The reward consisted of a base reward of {ether(block[0]?.fee)} BTC
              ($
              {(price?.usd / 1).toString()}) with an additional {ether(block[0]?.fee)} BTC ($
              {(ether(block[0]?.fee) * (price?.usd / 1)).toFixed(2).toString()}) reward paid as fees of the{' '}
              {block[0]?.n_tx}
              transactions which were included in the block. The Block rewards, also known as the Coinbase reward, were
              sent to this address.
            </p>
            <p>
              A total of {ether(totalCount)} BTC ($
              {(ether(totalCount) * price?.usd) / 1}) were sent in the block with the average transaction being{' '}
              {ether(totalCount) / block[0]?.n_tx / 1} BTC ( $
              {(ether(totalCount) / block[0]?.n_tx / 1) * (price?.usd / 1).toFixed(2).toString()}). Learn more about how
              blocks work.
            </p>
          </Card>
        ) : (
          <Card>
            <p className="text-lg opacity-60 text-secondary text-center">Please input Blockchain</p>
          </Card>
        )}
        {blockHash !== undefined ? (
          <Card>
            {width >= 800 ? (
              <BlockDetailList title="Hash" content={block[0]?.hash.toString()} />
            ) : (
              <BlockDetailList title="Hash" content={abbr(block[0]?.hash)} />
            )}
            <BlockDetailList title="Confirmations" content={block[0]?.n_tx} />
            <BlockDetailList title="Timestamp" content={dayjs(block[0]?.time).toString()} />
            <BlockDetailList title="Height" content={block[0]?.height?.toString()} />
            <BlockDetailList title="Miner" content={block[0]?.miner} />
            <BlockDetailList title="Number of Transactions" content={block[0]?.n_tx} />
            <BlockDetailList title="Difficulty" content="" />
            {width >= 800 ? (
              <BlockDetailList title="Merkle root" content={block[0]?.mrkl_root} />
            ) : (
              <BlockDetailList title="Merkle root" content={abbr(block[0]?.mrkl_root)} />
            )}
            <BlockDetailList title="Version" content={block[0]?.ver} />
            <BlockDetailList title="Bits" content={block[0]?.bits} />
            <BlockDetailList title="Weight" content={block[0]?.weight} suffix="WU" />
            <BlockDetailList title="Size" content={block[0]?.size} suffix="bytes" />
            <BlockDetailList title="Nonce" content={block[0]?.nonce} />
            <BlockDetailList title="Transaction Volume" content={totalCount} suffix="BTC" />
            <BlockDetailList title="Block Reward" content={currentReward} suffix="BTC" />
            <BlockDetailList title="Fee Reward" content={ether(block[0]?.fee).toString()} suffix="BTC" />
          </Card>
        ) : (
          <Card>
            <p className="text-lg opacity-60 text-secondary text-center">Please input Blockchain</p>
          </Card>
        )}
        {blockHash !== undefined ? (
          <Card>
            <h1 className="text-lg font-bold">Block Transactions</h1>
            <TransactionItem />

            <div className="text-center">
              <Pagination
                total={block[0]?.n_tx}
                itemRender={itemRender}
                pageSizeOptions={[5, 10, 20, 50]}
                onChange={(p, ps) => {
                  setPage(p);
                  setPageSize(ps);
                }}
                onShowSizeChange={(_, size) => {
                  setPageSize(size);
                }}
              />
            </div>
          </Card>
        ) : (
          <Card>
            <p className="text-lg opacity-60 text-secondary text-center">Please input Blockchain</p>
          </Card>
        )}
      </section>
    </div>
  );
};

export default Home;
// export { getBlockHashdetails, getBTCPrices };
