import React from 'react';
import { func1 } from './dummy-module';
import { funcB } from './dummy-tsmodule';

const tmpStr = 'foo';

const Foo = () => {
  const bar = func1(tmpStr);
  const wawawa = funcB(tmpStr);

  return (
    <div>
      <div style={{ color: 'red' }}>
        <h3>
          From dummy-module.js
          <h4>{bar}</h4>
        </h3>
      </div>
      <div style={{ color: 'green' }}>
        <h3>
          From dummy-tsmodule.js
          <h4>{wawawa}</h4>
        </h3>
      </div>
    </div>
  );
};
export default Foo;
