import { useDebouncedSearch } from "../../hooks/useDebouncedSearch";

const searchStarwarsHeroAsync = async (text) => {
  console.log(text);
  return {};
};

const useSearchStarwarsHero = () =>
  useDebouncedSearch((text) => searchStarwarsHeroAsync(text));

export const UsingHook = () => {
  const { inputText, setInputText, searchResults } = useSearchStarwarsHero();
  return (
    <div>
      <h1>Using useDebouncedSearch Hook</h1>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <div>
        {searchResults.loading && <div>...</div>}
        {searchResults.error && (
          <div>Error: {searchResults.error?.message}</div>
        )}
        {searchResults.result && (
          <div>
            <div>Results: {searchResults.result?.length}</div>
            <ul>
              {searchResults.result?.map?.((hero) => (
                <li key={hero.name}>{hero.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
