import { useMemo, useState } from "react";
import { useGetAllBooksQuery } from "../features/books/books.service";
import Section from "../components/Layout/Section";
import Pagination from "../components/Pagination/Pagination";

function BooksPage() {
  const [currPage, setCurrPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const {
    data: booksData,
    isLoading: booksAreLoading,
    isFetching: booksAreFetching,
  } = useGetAllBooksQuery({
    keyword,
    page: currPage,
  });

  const booksArePresent = useMemo(
    () => Array.isArray(booksData) && booksData.length > 0,
    [booksData]
  );

  console.log(booksAreFetching, "fetching");

  if (booksAreLoading) return <h1>Books are loading...</h1>;

  return (
    <Section ver>
      <h1>Books in store:</h1>
      {booksArePresent ? (
        <>
          <div className="books_box">
            {booksData &&
              Array.isArray(booksData) &&
              !booksAreFetching &&
              booksData?.map((book) => {
                return <div key={book._id}>{book.title}</div>;
              })}
            {booksAreFetching ? <>Books are fetching</> : null}
          </div>
        </>
      ) : (
        <>No more books</>
      )}
      <input
        type="text"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search..."
      />
      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        booksOnPageNumber={Array.isArray(booksData) ? booksData?.length : 0}
      />
    </Section>
  );
}

export default BooksPage;
