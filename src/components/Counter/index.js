import { useCounterContext } from '../../contexts/Counter';
import Consumer from './Consumer';
import HOC from './HOC';
import Hook from './Hook';

const Counter = () => {
  const { count } = useCounterContext();

  return (
    <>
      <h2>Current Value: {count}</h2>
      <Consumer />
      <HOC />
      <Hook />
    </>
  );
};

export default Counter;
