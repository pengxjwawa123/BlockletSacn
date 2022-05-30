import React from 'react';
import propTypes from 'prop-types';
import Divider from './divider';

const BlockDetailList = (props) => {
  const { className, title, content, suffix } = props;
  return (
    <>
      <div className={`flex justify-between ${className} text-center`}>
        <span className="text-sm text-bold opacity-70 text-center">{title}</span>
        <span className="text-sm tracking-wide text-center">
          {content === undefined ? ' ' : content}
          {suffix}
        </span>
      </div>
      <Divider bg="#e894b1" height={1} />
    </>
  );
};

BlockDetailList.defaultProps = {
  className: '',
  title: '',
  content: '',
  suffix: '',
};

BlockDetailList.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  title: propTypes.string,
  content: propTypes.string,
  suffix: propTypes.string,
};

export default BlockDetailList;
