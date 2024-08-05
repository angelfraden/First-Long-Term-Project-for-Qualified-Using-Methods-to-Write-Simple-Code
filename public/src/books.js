function findAuthorById(authors, id) {
  //return early: guard principle to return  for no ID
  if (!id) {
    return 'No ID provided';}
//find method used to loop through author array for matching ID; account for no results output
  const author = authors.find((author) => author.id === id);
  if (!author) {
    return 'Author not found.';
  }
  //syntax specific to authors array
 return author;
}

function findBookById(books, id) {
  //guard clause
  if (!id) {
    return 'No ID provided.';
  }
  //find method for books array structure
  const book = books.find((book) => book.id === id);
  if (!book) {
    return 'No book found.';}
    return book;
  }



// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
