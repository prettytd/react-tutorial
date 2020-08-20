import { useEffect, useRef, useState } from 'react';

const ComponentWithRefRead = () => {
  const ref = useRef();
  const [initialWidth, setInitialWidth] = useState(0);
  const [w, setW] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    setInitialWidth(width);
  }, []);

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    setW(width);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="card">
      <p>Initial span's width is {initialWidth}</p>
      <p>Current span's width is {w}</p>
      <input type="text" value={text} onChange={handleChange} />
      <span ref={ref}>text is {text}</span>
    </div>
  );
};

export default ComponentWithRefRead;
