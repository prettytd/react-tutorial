import { useState, useMemo, useEffect } from "react";
import _debounce from "lodash.debounce";

export const Uncontrolled = () => {
  const [term, setTerm] = useState("");

  const changeHandler = (event) => {
    setTerm(event.target.value);
    console.log("uncontrolled calling api", event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => _debounce(changeHandler, 300),
    []
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  return (
    <div>
      <h1>Uncontrolled</h1>
      <input
        onChange={debouncedChangeHandler}
        type="text"
        placeholder="Uncontrolled..."
      />
    </div>
  );
};
