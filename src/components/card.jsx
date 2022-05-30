import React from 'react';
import propTypes from 'prop-types';

const Card = (props) => {
  const { children, className } = props;
  return (
    <div
      className={`${className} rounded-lg w-full min-h-[128px] border-2 border-secondary p-4 flex bg-white flex-col justify-center gap-y-2`}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  className: '',
  children: [],
};
Card.propTypes = {
  className: propTypes.string,
  children: propTypes.array,
};

export default Card;
