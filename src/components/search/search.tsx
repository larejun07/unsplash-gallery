import { useCallback, SyntheticEvent, useState, FormEvent, useEffect, useRef } from 'react';
import styles from './search.module.css'

interface SearchProps {
  query?: string;
  onSearch: (query: string) => void;
}

export default function Search({ query, onSearch }: SearchProps) {
  const [keyword, setKeyword] = useState(query ?? '')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback((event: SyntheticEvent) => {
    event.preventDefault()
    onSearch(keyword)
  }, [onSearch, keyword])

  const handleChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value)
  }, [setKeyword])

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <div className={`flex ${styles.search}`}>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          name="q"
          type="search"
          value={keyword}
          placeholder="Keyword"
          onChange={handleChange}
        />
        <button type="submit" className="rounded">Search</button>
      </form>
    </div>
  );
}