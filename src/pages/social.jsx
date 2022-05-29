import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon } from '@heroicons/react/solid';
import { IoWalletOutline, IoHeartOutline, IoSearchOutline, IoShareSocialOutline } from 'react-icons/io5';
import { BiMessageRounded } from 'react-icons/bi';
import { VscHome, VscChevronLeft } from 'react-icons/vsc';
import { FaEthereum } from 'react-icons/fa';
import { Avatar } from 'antd';
import Divider from '../components/divider';
import SolanaIcon from '../components/solanaicon';

import logo from '../logo.svg';
import avatar1 from '../assets/avatars/avatar1.jpg';
import avatar2 from '../assets/avatars/avatar2.jpg';
import aurory1 from '../assets/nfts/aurory1.webp';
import aurory2 from '../assets/nfts/aurory2.webp';
import aurory3 from '../assets/nfts/aurory3.webp';
import aurory4 from '../assets/nfts/aurory4.webp';
import cat1 from '../assets/nfts/cat1.webp';
import cat2 from '../assets/nfts/cat2.webp';
import cat3 from '../assets/nfts/cat3.webp';
import man1 from '../assets/nfts/man1.webp';
import man2 from '../assets/nfts/man2.webp';
import man3 from '../assets/nfts/man3.webp';
import man4 from '../assets/nfts/man4.webp';
import man5 from '../assets/nfts/man5.webp';
import monkey1 from '../assets/nfts/monkey1.webp';
import monkey2 from '../assets/nfts/monkey2.webp';
import monkey3 from '../assets/nfts/monkey3.webp';
import monkey4 from '../assets/nfts/monkey4.webp';
import monkey5 from '../assets/nfts/monkey5.webp';
import monkey6 from '../assets/nfts/monkey6.webp';
import shoe1 from '../assets/nfts/shoe1.jpg';
import woman1 from '../assets/nfts/woman1.png';
import woman2 from '../assets/nfts/woman2.png';
import woman3 from '../assets/nfts/woman3.png';
import woman4 from '../assets/nfts/woman4.png';
import woman5 from '../assets/nfts/woman5.png';

const Social = () => {
  return (
    <div className="flex flex-col justify-between items-center m-auto p-2 bg-base-100 max-h-full">
      <div className="mockup-phone m-40">
        <div className="camera" />
        <div className="display">
          <div className="artboard artboard-demo phone-1 md:phone-2 flex items-start justify-start">
            <div className="w-full">
              <div className="w-full flex items-start justify-start">
                <div className="w-full flex justify-between">
                  <Link
                    to="/"
                    className="flex justify-center items-center mx-2 mt-7 mb-2 text-base text-neutral hover:text-secondary">
                    <VscChevronLeft className="h-5 w-5" />
                    <h1 className="mt-[6px] hover:text-secondary">Back</h1>
                  </Link>
                  <div className="flex justify-end items-center mx-2 mt-7 mb-2 text-lg font-bold text-neutral hover:text-secondary ">
                    <img src={logo} alt="logo" className="w-7 h-7" />
                  </div>
                  <div className="flex justify-end items-center mx-4 mt-7 mb-2 text-lg font-bold text-neutral hover:text-secondary ">
                    <button type="button" className="p-1 rounded-full bg-secondary text-base-100">
                      <MailIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
              <Divider bg="#E8EEF2" height={1} />
              {/* <div className="h-96 bg-white"></div> */}
            </div>{' '}
            <div className="w-full">
              <div className="h-[430px] md:h-[525px] w-full overflow-y-auto">
                <div className="text-center">
                  <h1 className="py-3 bg-secondary text-base">Start Chatting With Your NFTs</h1>
                </div>

                <div className="mt-2 flex items-start mx-2">
                  <Divider bg="#E8EEF2" height={2} />
                  <div>
                    <Avatar src={avatar1} alt="avatar1" size="large" />
                  </div>
                  <div className="ml-2">
                    <div className="flex">
                      <span className="font-bold mr-1">qiutianbuhuilai</span>
                      <span className="flex items-center">
                        <FaEthereum className="w-3 h-3" />
                      </span>{' '}
                      <span className="opacity-60 mr-1">@qiuqiu.eth</span>
                      <span className="opacity-60 mr-1"> · 1 min</span>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm">
                        今天超开心, 分享一下我最近刚刚入手的NFT, 听说是后续还有新的, 期待！！！😄 😍 💗
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <img src={aurory1} alt="aurory1" />
                      </div>
                      <div>
                        <img src={aurory2} alt="aurory2" />
                      </div>
                      <div>
                        <img src={aurory3} alt="aurory3" />
                      </div>
                      <div>
                        <img src={aurory4} size={5} alt="aurory4" />
                      </div>
                    </div>
                    <div className="my-2 mx-3 flex justify-between items-center">
                      <div>
                        <IoHeartOutline className="h-5 w-5" />
                      </div>
                      <div>
                        <BiMessageRounded className="h-5 w-5" />
                      </div>
                      <div>
                        <IoShareSocialOutline className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <Divider bg="#E8EEF2" height={2} />
                <div className="mt-2 flex items-start mx-2">
                  <div>
                    <Avatar src={man1} alt="man1" size="large" />
                  </div>
                  <div className="ml-2">
                    <div className="flex whitespace-nowrap">
                      <span className="font-bold mr-1 text-center">Jingle</span>
                      <span className="flex items-center mt-[2px] mr-[2px]">
                        <SolanaIcon className="w-3 h-3" />
                      </span>
                      <span className="opacity-60 mr-1">@shoe1.sol</span>
                      <span className="opacity-60 mr-1"> · 25 min</span>
                    </div>
                    <div className="">
                      <p className="text-sm">穿上我的小跑鞋</p>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <img src={shoe1} alt="shoe1" />
                      </div>
                    </div>
                    <div className="my-2 mx-3 flex justify-between items-center">
                      <div>
                        <IoHeartOutline className="h-5 w-5" />
                      </div>
                      <div>
                        <BiMessageRounded className="h-5 w-5" />
                      </div>
                      <div>
                        <IoShareSocialOutline className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <Divider bg="#E8EEF2" height={2} />
                <div className="mt-2 flex items-start mx-2">
                  <div>
                    <Avatar src={man1} alt="man1" size="large" />
                  </div>
                  <div className="ml-2">
                    <div className="flex whitespace-nowrap">
                      <span className="font-bold mr-1 text-center">Jingle</span>
                      <span className="flex items-center mt-[2px] mr-[2px]">
                        <SolanaIcon className="w-3 h-3" />
                      </span>
                      <span className="opacity-60 mr-1">@pengxjwawa.sol</span>
                      <span className="opacity-60 mr-1"> · 25 min</span>
                    </div>
                    <div className="">
                      <p className="text-sm">看看我的头像，你确定你不需要一个吗</p>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <img src={man1} alt="man1" />
                      </div>
                      <div>
                        <img src={man2} alt="man2" />
                      </div>
                      <div>
                        <img src={man3} alt="man3" />
                      </div>
                      <div>
                        <img src={man4} alt="man4" />
                      </div>
                      <div>
                        <img src={man5} alt="man5" />
                      </div>
                    </div>
                    <div className="my-2 mx-3 flex justify-between items-center">
                      <div>
                        <IoHeartOutline className="h-5 w-5" />
                      </div>
                      <div>
                        <BiMessageRounded className="h-5 w-5" />
                      </div>
                      <div>
                        <IoShareSocialOutline className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <Divider bg="#E8EEF2" height={2} />
                <div className="mt-2 flex items-start mx-2">
                  <div>
                    <Avatar src={avatar2} alt="avatar2" size="large" />
                  </div>
                  <div className="ml-2">
                    <div className="flex">
                      <span className="font-bold mr-1">pengxjwawa</span>
                      <span className="flex items-center p-1">
                        <FaEthereum className="w-3 h-3" />
                      </span>{' '}
                      <span className="opacity-60 mr-1">@pengxjwawa.eth</span>
                      <span className="opacity-60 mr-1"> · 25 min</span>
                    </div>
                    <div className="">
                      <p className="text-sm">猫猫谁又不爱呢</p>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <img src={cat1} alt="cat1" />
                      </div>
                      <div>
                        <img src={cat2} alt="cat1" />
                      </div>
                      <div>
                        <img src={cat3} alt="cat2" />
                      </div>
                    </div>
                    <div className="my-2 mx-3 flex justify-between items-center">
                      <div>
                        <IoHeartOutline className="h-5 w-5" />
                      </div>
                      <div>
                        <BiMessageRounded className="h-5 w-5" />
                      </div>
                      <div>
                        <IoShareSocialOutline className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <Divider bg="#E8EEF2" height={2} />
                <div className="mt-2 flex items-start mx-2">
                  <div>
                    <Avatar src={monkey4} alt="avatar2" size="monkey4" />
                  </div>
                  <div className="ml-2">
                    <div className="flex whitespace-nowrap">
                      <span className="font-bold mr-1">monkey</span>
                      <span className="flex items-center p-1">
                        <FaEthereum className="w-3 h-3" />
                      </span>{' '}
                      <span className="opacity-60 mr-1">@monkey4.eth</span>
                      <span className="opacity-60 mr-1"> · 25 min</span>
                    </div>
                    <div className="">
                      <p className="text-sm">MonkeyDAO</p>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <img src={monkey1} alt="monkey1" />
                      </div>
                      <div>
                        <img src={monkey2} alt="monkey2" />
                      </div>
                      <div>
                        <img src={monkey3} alt="monkey3" />
                      </div>
                      <div>
                        <img src={monkey4} alt="monkey4" />
                      </div>
                      <div>
                        <img src={monkey5} alt="monkey5" />
                      </div>
                      <div>
                        <img src={monkey6} alt="monkey6" />
                      </div>
                    </div>
                    <div className="my-2 mx-3 flex justify-between items-center">
                      <div>
                        <IoHeartOutline className="h-5 w-5" />
                      </div>
                      <div>
                        <BiMessageRounded className="h-5 w-5" />
                      </div>
                      <div>
                        <IoShareSocialOutline className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <Divider bg="#E8EEF2" height={2} />
                <div className="mt-2 flex items-start mx-2">
                  <div>
                    <Avatar src={woman3} alt="woman3" size="large" />
                  </div>
                  <div className="ml-2">
                    <div className="flex whitespace-nowrap">
                      <span className="font-bold mr-1 text-center">woman3</span>
                      <span className="flex items-center mt-[2px] mr-[2px]">
                        <SolanaIcon className="w-3 h-3" />
                      </span>
                      <span className="opacity-60 mr-1">@woman3.sol</span>
                      <span className="opacity-60 mr-1"> · 25 min</span>
                    </div>
                    <div className="">
                      <p className="text-sm">可可爱爱没有脑袋</p>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <img src={woman1} alt="woman1" />
                      </div>
                      <div>
                        <img src={woman2} alt="woman2" />
                      </div>
                      <div>
                        <img src={woman3} alt="woman3" />
                      </div>
                      <div>
                        <img src={woman4} alt="woman4" />
                      </div>
                      <div>
                        <img src={woman5} alt="woman5" />
                      </div>
                    </div>
                    <div className="my-2 mx-3 flex justify-between items-center">
                      <div>
                        <IoHeartOutline className="h-5 w-5" />
                      </div>
                      <div>
                        <BiMessageRounded className="h-5 w-5" />
                      </div>
                      <div>
                        <IoShareSocialOutline className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full abso">
              <Divider bg="#E8EEF2" height={1} />
              <div className="w-full flex items-start justify-start">
                <div className="w-full flex justify-between text-secondary">
                  <Link
                    to="/"
                    className="flex justify-center items-center mx-7 mt-4 mb-2 text-lg text-neutral hover:text-secondary">
                    <VscHome className="h-6 w-6" />
                  </Link>
                  <div className="flex justify-end items-center mx-4 mt-4 mb-2 text-lg font-bold text-neutral hover:text-secondary ">
                    <IoSearchOutline className="h-6 w-6" />
                  </div>
                  <div className="flex justify-end items-center mx-4 mt-4 mb-2 text-lg font-bold text-neutral hover:text-secondary ">
                    <IoHeartOutline className="h-6 w-6" />
                  </div>
                  <div className="flex justify-end items-center mx-7 mt-4 mb-2 text-lg font-bold text-neutral hover:text-secondary ">
                    <button type="button" className="p-1 rounded-full">
                      <IoWalletOutline className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
