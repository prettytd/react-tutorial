import { useState, useCallback, useEffect } from "react";
import _debounce from "lodash.debounce";

export const LodashDebounce = () => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const callApi = async () => {
    if (!term) {
      return;
    }

    console.log("calling api", term);
  };

  const debouncedCallApi = useCallback(_debounce(callApi, 500), [term]);

  useEffect(() => {
    debouncedCallApi();

    return debouncedCallApi.cancel;
  }, [term, debouncedCallApi]);

  return (
    <>
      <h1>Using Lodash.debounce</h1>
      <input type="text" value={term} onChange={handleChange} />
    </>
  );
};
