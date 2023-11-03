/* eslint-disable react/prop-types */
import { useState } from "react";

// Introduction: This component provides the functionality of a form for all the requirements of the book.

// Requirements:
// i. The function to be called upon submitting the form.
// ii. Name of the submit button.

// Deliverables:
// i. Passings a filled book object as a function argument, which was asked to calling upon submitting the form.

export default function BookInformationForm(props) {
  const [title, setTitle] = useState(""),
    [author, setAuthor] = useState(""),
    [publishYear, setPublishYear] = useState("");
  let handleSaveBook = props.handleSaveBook,
    buttonName = props.buttonName,
    bookData = { title, author, publishYear };
  return (
    <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Publish Year</label>
        <input
          type="number"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <button
        className="p-2 bg-sky-300 m-8"
        onClick={() => handleSaveBook(bookData)}
      >
        {buttonName}
      </button>
    </div>
  );
}
