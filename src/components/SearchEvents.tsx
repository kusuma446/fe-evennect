
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/events`,
        {
          params: { q: debouncedSearchTerm },
        }
      );
      console.log('API Response:', response.data); // Log API response
      setSearchResults(response.data);
      setNoResults(response.data.length === 0);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
      setNoResults(true);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch();
    } else {
      setSearchResults([]);
      setNoResults(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Cari event..."
        className="w-full py-2 pl-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-200"
        autoComplete="off"
      />
      {searchResults.length > 0 ? (
        <ul className="absolute top-full left-0 w-full mt-1 bg-white border rounded shadow z-50 max-h-60 overflow-y-auto">
          {searchResults.map((event: any, index: number) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
              onClick={() => {
                window.location.href = `/events/${event.id}`;
              }}
            >
              {event.title}
            </li>
          ))}
        </ul>
      ) : (
        noResults && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded shadow z-50 p-4 text-center text-gray-500">
            Tidak ada event yang ditemukan.
          </div>
        )
      )}
    </div>
  );
};

export default SearchInput;
