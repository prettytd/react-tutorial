import { useState } from 'react';

function ComponentWithRefReadWrite() {
  const [text, setText] = useState('Some text ...');

  function handleOnChange(event) {
    setText(event.target.value);
  }

  const ref = (node) => {
    console.log('componentwithref read write');
    if (!node) return;

    const { width } = node.getBoundingClientRect();

    if (width >= 150) {
      node.style.color = 'red';
    } else {
      node.style.color = 'blue';
    }
  };

  console.log(1);

  return (
    <div className="card">
      <p>Color change according to spans' length</p>
      <input type="text" value={text} onChange={handleOnChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}

export default ComponentWithRefReadWrite;
