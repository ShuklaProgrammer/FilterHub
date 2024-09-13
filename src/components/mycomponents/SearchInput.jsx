import React, { useCallback, useState } from "react";
import { Input } from "../ui/input"; // imported input from shadcn
import { Button } from "../ui/button"; // imported button from shadcn
import { useDispatch } from "react-redux"; //imported Redux hook
import { setSearchItem } from "@/redux/features/searchItemSlice"; //imported the action to set the search term into the redux store

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState(""); // using useState in order to manage current search term

  const dispatch = useDispatch(); // dispatch actions to the Redux store

  // Using useCallback to memoize the handleSearchChange function
  const handleSearchChange = useCallback((e) => {
    dispatch(setSearchItem(e.target.value)); // update the search term in the Redux store when the new search term is added
    setSearchTerm(e.target.value); // update the search term state when new search term is added
  });


  // Using useCallback to memoize the handleSearchItem function
  const handleSearchItem = useCallback((e) => {
    if (e.key === "Enter" || e.type === "click") { // condition is checking whether the Enter key is pressed or mouse is clicked
      dispatch(setSearchItem(searchTerm));  // update the search term in the Redux store
    }
  });

  return (
    <div className="flex items-center gap-2 sm:w-[50%]">
      <Input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="outline outline-1 outline-gray-300 rounded-md px-4 py-2 w-full"
      />
      <Button
        onClick={handleSearchItem}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
