function booksWithN(names) {
  const filteredBooks = names.filter((name) => {
    const lowercaseBook = name.toLowerCase();
    return lowercaseBook.includes("н");
  });
  return filteredBooks;
}
const bookNames = [
  "Жестокий принц",
  "Аспид",
  "Панк 57",
  "Безжалостая империя",
  "До встречи с тобой",
  "Убийства по алфавиту",
  "Исскуство обмана",
  "Новые чувства",
];
const filteredBooks = booksWithN(bookNames);

console.log(filteredBooks);
