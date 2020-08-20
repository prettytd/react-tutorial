import { createContext, useContext, useState } from 'react';

const CounterContext = createContext({
  count: 0,
  increment() {},
  decrement() {},
  add(v) {},
  remove(v) {},
});

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const add = (v) => {
    setCount((prev) => prev + v);
  };

  const remove = (v) => {
    setCount((prev) => prev - v);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement, add, remove }}>
      {children}
    </CounterContext.Provider>
  );
};

export const CounterContextConsumer = ({ children }) => {
  return <CounterContext.Consumer>{children}</CounterContext.Consumer>;
};

export const useCounterContext = () => {
  return useContext(CounterContext);
};

export const withCounterContext =
  (WrappedComponent) =>
  ({ ...props }) => {
    const counter = useCounterContext();
    return <WrappedComponent {...props} counter={counter} />;
  };

export default CounterContext;
