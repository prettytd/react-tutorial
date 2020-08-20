import Counter from '../components/Counter';
import { CounterContextProvider } from '../contexts/Counter';

const CounterContextPage = () => {
  return (
    <>
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </>
  );
};

export default CounterContextPage;
