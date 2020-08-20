import { useRef } from 'react';

const ButtonClicked = () => {
  const hasClickedButton = useRef(false);

  const handleClick = () => {
    hasClickedButton.current = true;
    console.log('hasClickedButton', hasClickedButton.current);
  };

  return (
    <div className="card">
      <button onClick={handleClick}>
        Button {hasClickedButton.current ? 'Clicked' : 'Not Clicked'}
      </button>
      <p>The update of useRef value doesn't re-render component</p>
    </div>
  );
};

export default ButtonClicked;
