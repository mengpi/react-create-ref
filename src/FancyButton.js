import React from 'react';

export default React.forwardRef((props, ref) => {
  return (
    <button className="FancyButton" ref={ref}>
      {props.children}
    </button>
  );
});
