import { useState, useCallback, useEffect } from "react";
import _debounce from "lodash.debounce";

export const Controlled = () => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const callApi = async () => {
    if (!term) {
      return;
    }

    console.log("controlled calling api", term);
  };

  const debouncedCallApi = useCallback(_debounce(callApi, 500), [term]);

  useEffect(() => {
    debouncedCallApi();

    return debouncedCallApi.cancel;
  }, [term, debouncedCallApi]);

  return (
    <>
      <h1>Controlled</h1>
      <input
        type="text"
        placeholder="Controlled..."
        value={term}
        onChange={handleChange}
      />
    </>
  );
};
