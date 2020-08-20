import { withCounterContext } from '../../contexts/Counter';
import CounterForm from './Form';

const HOC = ({ counter: { count, increment, decrement, add, remove } }) => {
  return (
    <CounterForm
      title="HOC"
      count={count}
      onIncrement={increment}
      onDecrement={decrement}
      onAdd={add}
      onRemove={remove}
    />
  );
};

export default withCounterContext(HOC);
