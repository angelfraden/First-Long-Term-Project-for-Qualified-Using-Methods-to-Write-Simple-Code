function findAccountById(accounts, id) {
  const accountMatched = accounts.find(account => account.id === id);
  return accountMatched;
}

function sortAccountsByLastName(accounts) {
  //calling a function to sort 
  const accountSorted = accounts.sort((a, b) => {
    //reference lastname object to sort the two comparison constants
    const lastNameA = a.name.last;
  const lastNameB = b.name.last;
  //describe the comparison logic for alphabetical arrangement
    if (lastNameA < lastNameB) {
      return -1;
    }
    if (lastNameA > lastNameB) {
      return 1;
    }
    return 0;
  });
  //outputs sorted accounts array
  return accounts;
  }

function getAccountFullNames(accounts) {
  const result = accounts.map((account) => `${account.name.first} ${account.name.last}`);
  return result;}
  // Hint:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.


// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
