import { useState, useCallback } from 'react';

const ComponentWithCallbackRefRead = () => {
  const [text, setText] = useState('');
  const [w, setW] = useState(0);

  const ref = useCallback(
    (node) => {
      console.log('component with callback ref read');
      if (!node) return;

      const { width } = node.getBoundingClientRect();
      setW(width);
    },
    [text] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="card">
      <p>span's width is {w}</p>
      <input type="text" value={text} onChange={handleChange} />
      <span ref={ref}>text is {text}</span>
    </div>
  );
};

export default ComponentWithCallbackRefRead;
