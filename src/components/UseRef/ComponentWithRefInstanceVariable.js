import { useState, useEffect, useRef } from 'react';

function ComponentWithRefInstanceVariable() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount((prev) => prev + 1);
  }

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      console.log('first render');
      isFirstRender.current = false;
    } else {
      console.log('re-render');
    }
  });

  return (
    <div className="card">
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>
    </div>
  );
}

export default ComponentWithRefInstanceVariable;
