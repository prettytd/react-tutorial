import { CounterContextConsumer } from '../../contexts/Counter';
import CounterForm from './Form';

const Consumer = () => {
  return (
    <CounterContextConsumer>
      {({ count, increment, decrement, add, remove }) => (
        <CounterForm
          title="Consumer"
          count={count}
          onIncrement={increment}
          onDecrement={decrement}
          onAdd={add}
          onRemove={remove}
        />
      )}
    </CounterContextConsumer>
  );
};

export default Consumer;
