const Footer = () => {
  return (
    <div>
      <footer className="max-w-screen-lg m-auto flex justify-center items-center text-sm opacity-60 py-5">
        &copy; {new Date().getFullYear()} BlockchainScan. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Footer;
