import React from "react";

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

// This item component will display the details of one single item
// I used the React.memo in order to avoid the unwanted re-render and to optimize the performance
const Item = React.memo(({ book, index }) => { 
  return (
    <TableRow key={index}>
      <TableCell className="font-medium">
        {book.id}. {book.title}
      </TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.genre}</TableCell>
      <TableCell className="text-right">${book.price}</TableCell>
    </TableRow>
  );
});

export default Item;
