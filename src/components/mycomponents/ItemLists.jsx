import React, { useCallback, useEffect, useMemo, useState } from "react";

// imported table component from shadcn
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// imported pagination component from shadcn
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import books from "@/data/data.js"; // imported the list of books from local module
import { useDispatch, useSelector } from "react-redux"; // imported the redux hooks
import { setItems } from "@/redux/features/itemsSlice"; // imported the action to set the items in the redux store
import Item from "./Item"; // imported the item component from mycomponents

const ItemLists = () => {
  const { items } = useSelector((state) => state.items); // getting the item from the Redux store
  const { searchItem } = useSelector((state) => state.searchItem); // getting the item from the redux store

  const [page, setPage] = useState(1); //using the useState to manage the current page

  const limit = 10; // limit of items is 10 on a single page

  const dispatch = useDispatch(); // dispatch actions in the Redux store

  useEffect(() => {
    dispatch(setItems(books)); // dispatch action to set the book items in the Redux store
  }, [items, dispatch]);

  // i used the useMemo to memoize the filtered items when i search the items 
  const filteredItems = useMemo(() => {
    const searchItems = searchItem.toLowerCase(); // Converting the search terms to the lowercase
    return items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchItems) || // Filter by title
        item.author.toLowerCase().includes(searchItems) || // Filter by author
        item.genre.toLowerCase().includes(searchItems) || // Filter by genre
        item.price.toString().includes(searchItems) // Filter by price
      );
    });
  }, [items, searchItem]);

  const totalPages = Math.ceil(books.length / limit); // Calculating the total page:- (Dividing the length of book) by (limit of items on a single page)

  // Slice the filtered items to show the only items on the current page
  const currentBooks = filteredItems.slice((page - 1) * limit, page * limit);

  // useCallback help to ensure to avoid the re-render and to avoid the recreation 
  // Using useCallback to memoize the handleSearchChange function
  const handlePageChange = useCallback((newPage) => {
    if (newPage > 0 && newPage <= totalPages) { // condition help to ensure that the new page is valid 
      setPage(newPage); // update page number
    }
  });

  return (
    <div>
      <Table className="border-1 border border-solid border-gray-300">
        <TableHeader>
          <TableRow className="bg-blue-400 pointer-events-none">
            <TableHead className="w-[500px] text-black text-lg">
              Title
            </TableHead>
            <TableHead className="text-black text-lg">Author</TableHead>
            <TableHead className="text-black text-lg">Genre</TableHead>
            <TableHead className="text-right text-black text-lg">
              Price
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentBooks.map((book, index) => (
            <Item book={book} key={index} />
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-5"> 
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(page - 1)} // handle the previous page click 
              className={page === 1 ? "opacity-50 pointer-events-none" : ""} // disable the previous page if the page is first page
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)} // handle the number of page click
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(page + 1)} // handle the next page click
              className={
                page === totalPages ? "opacity-50 pointer-events-none" : "" // disable the next button if the page is last page
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ItemLists;
