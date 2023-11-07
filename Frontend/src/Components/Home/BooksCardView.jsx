/* eslint-disable react/prop-types */
import BookCard from "./BookCard";

export default function BooksCard(props) {
  const books = props.books;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books?.map((book) => (
        <BookCard book={book} key={book?._id} />
      ))}
    </div>
  );
}
