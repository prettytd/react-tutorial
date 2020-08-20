import { useCounterContext } from '../../contexts/Counter';
import CounterForm from './Form';

const Hook = () => {
  const { count, increment, decrement, add, remove } = useCounterContext();

  return (
    <CounterForm
      title="Hook"
      count={count}
      onIncrement={increment}
      onDecrement={decrement}
      onAdd={add}
      onRemove={remove}
    />
  );
};

export default Hook;
