const BlockDetailList = ({ className, title, content, suffix }) => {
  return (
    <>
      <div className={`flex justify-between ${className} text-center`}>
        <span className={`text-sm text-bold opacity-70 text-center`}>{title}</span>
        <span className="text-sm tracking-wide text-center">
          {content === undefined ? ' ' : content + ' '}
          {suffix}
        </span>
      </div>
      <hr className="border-none h-[1px] bg-secondary" />
    </>
  );
};
export default BlockDetailList;
