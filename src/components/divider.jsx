import React from 'react';

export default Divider;

function Divider(props) {
  const { color, bg, height } = props;
  return (
    <hr
      style={{
        color,
        backgroundColor: bg,
        height,
      }}
    />
  );
}
