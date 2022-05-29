// import React from 'react';

// const Divider = (props) => {
//   const { color, bg, heightValue } = props;
//   return (
//     <hr
//       style={{
//         color: color,
//         backgroundColor: bg,
//         height: heightValue,
//       }}
//     />
//   );
// };
export default Divider;

function Divider(props) {
  const { color, bg, height } = props;
  return (
    <hr
      style={{
        color: color,
        backgroundColor: bg,
        height: height,
      }}
    />
  );
}
