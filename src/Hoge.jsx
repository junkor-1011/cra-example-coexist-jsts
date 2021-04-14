import React, { useMemo } from 'react';

const hogeString = 'hoge';

const hogeFunction = (str, num) => {
  let _ = '';
  for (let i = 0; i < num + 1; i++) {
    _ += str;
  }

  return _;
};

const Hoge = ({ color }) => {
  const tmp = useMemo(() => 5, []);

  return (
    <div style={{ color }}>
      {[...Array(tmp).keys()].map((val) => (
        <p key={val}>{hogeFunction(hogeString, val)}</p>
      ))}
    </div>
  );
};
export default Hoge;
