import { useState } from 'react';

const CounterForm = ({ title, count, onIncrement, onDecrement, onAdd, onRemove }) => {
  const [form, setForm] = useState({
    valueToAdd: 0,
    valueToRemove: 0,
  });

  const handleAddClick = () => {
    onAdd(Number(form.valueToAdd));
  };

  const handleRemoveClick = () => {
    onRemove(Number(form.valueToRemove));
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key !== 'Enter') return;

    if (e.target.k === 'valueToAdd') {
      handleAddClick();
    } else {
      handleRemoveClick();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>

      <p>Current Value: {count}</p>

      <button onClick={onIncrement}>+</button>

      <button onClick={onDecrement}>-</button>

      {[
        {
          key: 'valueToAdd',
          label: 'Value to Add',
          handleClick: handleAddClick,
          buttonLabel: 'Add',
        },
        {
          key: 'valueToRemove',
          label: 'Value to Remove',
          handleClick: handleRemoveClick,
          buttonLabel: 'Remove',
        },
      ].map(({ key, label, handleClick, buttonLabel }) => (
        <div key={key}>
          <label>{label}</label>
          <input
            type="number"
            name={key}
            value={form[key]}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleClick}>{buttonLabel}</button>
        </div>
      ))}
    </form>
  );
};

export default CounterForm;
