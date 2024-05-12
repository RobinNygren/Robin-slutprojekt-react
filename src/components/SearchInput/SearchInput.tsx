import { Listbox } from "@headlessui/react";
import { SearchInputProps } from "../../types/types";
import React from "react";

const SearchInput: React.FC<SearchInputProps> = ({
  searchType,
  setSearchType,
  searchTerm,
  setSearchTerm,
  searchOptions,
}) => {
  return (
    <>
      <Listbox value={searchType} onChange={setSearchType}>
        <Listbox.Button className="btn btn-block">
          {searchOptions.find((option) => option.value === searchType)?.name}
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg max-h-60">
          {searchOptions.map((option, index) => (
            <Listbox.Option
              key={index}
              value={option.value}
              as={React.Fragment}
            >
              {({ active }) => (
                <li
                  className={`cursor-pointer select-none relative p-2 ${
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  }`}
                >
                  {option.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <input
        type="text"
        placeholder={
          searchOptions.find((option) => option.value === searchType)?.name
        }
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
    </>
  );
};

export default SearchInput;
