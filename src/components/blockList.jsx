import Divider from './divider';

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
      <Divider bg="#e894b1" height={1} />
    </>
  );
};
export default BlockDetailList;
