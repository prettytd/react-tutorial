// (1), (2), (3) is the order of process

import { useRef, useState, useEffect } from 'react';

const ComponentWithDomApi = ({ label, defaultValue, isFocus }) => {
  const ref = useRef(); // (1) order
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (isFocus) {
      ref.current.focus(); // (3) order
    }
  }, [isFocus]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="card">
      <label>
        {/* (2) order */}
        {label}: <input type="text" value={value} onChange={handleChange} ref={ref} />
      </label>
    </div>
  );
};

export default ComponentWithDomApi;
