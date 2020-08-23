import { Controlled } from "../components/debounced/Controlled";
import { UsingHook } from "../components/debounced/UsingHook";
import { Uncontrolled } from "../components/debounced/Uncontrolled";

export const DebouncedSearch = () => {
  return (
    <>
      <Controlled />
      <Uncontrolled />
      <UsingHook />
    </>
  );
};
