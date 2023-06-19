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

export default Author;
