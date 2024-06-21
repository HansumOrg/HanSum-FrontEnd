import React, { useState, createContext, useContext, useMemo } from 'react';
import { SearchResultProps } from '../../types';

export interface SearchContextType {
  searchState: SearchResultProps;
  setSearchState: React.Dispatch<React.SetStateAction<SearchResultProps>>;
}

const defaultSearchContext: SearchResultProps = {
  location: null,
  checkin_date: null,
  checkout_date: null,
  guesthouseName: null,
  mood: null,
  facility: null,
  min_price: null,
  max_price: null,
};

const SearchContext = createContext<SearchContextType>({
  searchState: defaultSearchContext,
  setSearchState: () => {},
});

const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchState, setSearchState] =
    useState<SearchResultProps>(defaultSearchContext);

  const searchContextState = useMemo(
    () => ({
      searchState,
      setSearchState,
    }),
    [searchState, setSearchState],
  );

  return (
    <SearchContext.Provider value={searchContextState}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      'useSearchContext must be used within a SearchContextProvider',
    );
  }
  return context;
};

export default SearchContextProvider;
