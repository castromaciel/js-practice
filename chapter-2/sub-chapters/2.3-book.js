import Author from "./2.3-author.js";

class Book {
  /**
   * @param {string} title
   * @param {string} editorial
   * @param {Author} author
   * @param {string | Date} firstPublishDate
   * @param {string | number} isbn
   */
  constructor(title, editorial, author, firstPublishDate, isbn){
    this._title = title;
    this._editorial = editorial;
    this._author = author;
    this._firstPublishDate = firstPublishDate;
    this._isbn = isbn;
  }

  /**
   * @param {string} title
   */
  set title(title) {
    this._title = title;
  }
  get title() {
    return this._title
  }

  /**
   * @param {string} editorial
   */
  set editorial(editorial) {
    this._editorial = editorial;
  }
  get editorial() {
    return this._editorial
  }

  /**
   * @param {Author} author
   */
  set author(author) {
    this._author = author;
  }
  get author() {
    return this._author
  }

  /**
   * @param {string | Date} firstPublishDate
   */
  set firstPublishDate(firstPublishDate) {
    this._firstPublishDate = firstPublishDate;
  }
  get firstPublishDate() {
    return this._firstPublishDate
  }

  /**
   * @param {string | number} isbn
   */
  set isbn(isbn) {
    this._isbn = isbn;
  }
  get isbn() {
    return this._isbn
  }
}

export default Book