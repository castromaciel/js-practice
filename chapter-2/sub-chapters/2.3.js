class Author {
  /**
   * @param {string} fullName 
   * @param {string | Date} birthDate 
   * @param {string} nationality 
   */
  constructor(fullName, birthDate, nationality) {
    this._fullName = fullName;
    this._birthDate = birthDate;
    this._nationality = nationality;
  }
  /**
   * @param {string} fullName
   */
  set fullName(value) {
    this._fullName = value
  }

  get fullName() {
    return this._fullName;
  }

  /**
   * @param {string | Date} birthDate
   */
  set birthDate(birthDate) {
    this._birthDate = birthDate;
  }

  get birthDate() {
    return this._birthDate;
  }

  /**
   * @param {string} nationality
   */
  set nationality(nationality) {
    this._nationality = nationality;
  }
  get nationality() {
    return this._nationality;
  }
}

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
   * @param {string} isbn
   */
  set isbn(isbn) {
    this._isbn = isbn;
  }
  get isbn() {
    return this._isbn
  }

  /**
   * @param {string} field
   */
  check (field) {
    if ((!field) && field === '') return () => true;

    if (field !== 'isbn') return () => true;

    return () => {
      const isbn = this._isbn
      const ibsnSections = isbn.split('-')
      const nSections = ibsnSections.length
      if (nSections !== 5) return false;

      let isValid = true;

      for (let i = 0; i < nSections; i++) {
        const specificSection = ibsnSections[i]
        if (!/^([0-9])*$/.test(specificSection)) {
          isValid = false;
          break;
        }
      }
      return isValid
    }
  }
}

const author = new Author('Ismael López Quintero', '04/07/1983', 'spanish')
const book = new Book('Server Side Js', 'Publicaciones Universitarias', author, '01/01/2012', '123456789')

const bookTitle = book.title
const bookEditorial = book.editorial
const bookAuthor = book.author
const authorFullName = bookAuthor.fullName
const authorBirthDate = bookAuthor.birthDate
const authorNationality = bookAuthor.nationality
const bookFirstPublishDate = book.firstPublishDate
const bookIsbn = book.isbn

const validateIsbn = book.check('isbn')
const isValidIsbn = validateIsbn()

QUnit.test("Testing Book and Author", (assert) => {
  assert.equal(bookTitle, 'Server Side Js', 'Correct book title')
  assert.equal(bookEditorial, 'Publicaciones Universitarias', 'Correct book editorial')
  assert.equal(bookAuthor, author, 'Correct book author')
  assert.equal(authorFullName, 'Ismael López Quintero', 'Correct author full name')
  assert.equal(authorBirthDate, '04/07/1983', 'Correct author birth date')
  assert.equal(authorNationality,'spanish', 'Correct author nationality')
  assert.equal(bookFirstPublishDate, '01/01/2012', 'Correct book first publish date')
  assert.equal(bookIsbn, '123456789', 'Correct book isbn')

  // must fail because isbn '123456789' is not valid
  // assert.ok(isValidIsbn, 'ISBN is valid')
  
  // change isbn to a valid format
  book.isbn = '978-15-678213-9-0'
  const isValidNewIsbn = validateIsbn()
  assert.ok(isValidNewIsbn, 'ISBN is valid')

  // validate other field
  const validateFirstPublishDate = book.check('firstPublishDate')
  const isValidFirstPublishDate = validateFirstPublishDate()

  // must be ok because it's not implemented yet
  assert.ok(isValidFirstPublishDate, 'First publish date is valid')

})