/**
 * helper function to validate which letter of document is right.
 * @param {number} document 
 * @returns character
 */
export const documentLetter = (document) => {
  const validChar = 'TRWAGMYFPDXBNJZSQVHLCKE';
  return validChar.charAt(document % 23)
}

class Room {
  /** 
   * @param {string} floor
   * @param {string | number} bedNumber
   * @param {string | number} phoneNumber
  */
 constructor(floor, bedNumber, phoneNumber) {
     this._floor = floor;
     this._bedNumber = bedNumber;
     this._phoneNumber = phoneNumber;
   }

   /** 
    * @param {string} floor
    */
  set floor(floor) {
    this._floor = floor;
  }
  get floor() {
    return this._floor;
  }

  /** 
    * @param {string | number} bedNumber
   */
  set bedNumber(bedNumber) {
    this._bedNumber = bedNumber;
  }
  get bedNumber() {
    return this._bedNumber;
  }

  /** 
    * @param {string | number} phoneNumber
   */
  set phoneNumber(phoneNumber) {
    this._phoneNumber = phoneNumber;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
}

class Manager {
  /**
   * 
   * @param {string} fullName 
   * @param {string} idNumber 
   * @param {string | number} phoneNumber 
   */
  constructor(fullName, idNumber, phoneNumber) {
    this._fullName = fullName;
    this._idNumber = idNumber;
    this._phoneNumber = phoneNumber;
  }

  /** 
   * @param {string} fullName 
   */
  set fullName(fullName) {
    this._fullName = fullName;
  }
  get fullName() {
    return this._fullName;
  }

  /** 
   * @param {string} idNumber 
   */
  set idNumber(idNumber) {
    this._idNumber = idNumber;
  }
  get idNumber() {
    return this._idNumber;
  }

  /** 
   * @param {string | number} phoneNumber 
   */

  set phoneNumber(phoneNumber) {
    this._phoneNumber = phoneNumber;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
}

class Hotel {
  /** 
   * @param {string} name
   * @param {string} city
   * @param {string} address
   * @param {string | number} phoneNumber
   * @param {string} website
   * @param {Manager} manager
   * @param {Room[]} rooms
   */
  constructor(name, city, address, phoneNumber, website, manager, rooms) {
    this._name = name;
    this._city = city;
    this._address = address;
    this._phoneNumber = phoneNumber;
    this._website = website;
    this._manager = manager;
    this._rooms = rooms;
  }

  /** 
   * @param {string} name 
   */
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  /** 
   * @param {string} city 
   */
  set city(city) {
    this._city = city;
  }
  get city() {
    return this._city;
  }

  /** 
   * @param {string} address 
   */
  set address(address) {
    this._address = address;
  }
  get address() {
    return this._address;
  }

  /** 
   * @param {string | number} phoneNumber 
   */
  set phoneNumber(phoneNumber) {
    this._phoneNumber = phoneNumber;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  /** 
   * @param {string} website 
   */
  set website(website) {
    this._website = website;
  }
  get website() {
    return this._website;
  }

  /** 
   * @param {Manager} manager 
   */
  set manager(manager) {
    this._manager = manager;
  }
  get manager() {
    return this._manager;
  }

  /** 
   * @param {Room[]} rooms 
   */
  set rooms(rooms) {
    this._rooms = rooms;
  }
  get rooms() {
    return this._rooms;
  }

  check (field) {
    if ((!field) && field === '') return () => true;

    switch (field) {
      case 'phoneNumber':
        return () => {
          const phoneRegex = new RegExp('^' + '\[+][0-9]{2}[.]?[ ][(]?[0-9]{9}[)]?')
          const phoneNumber = this._phoneNumber
          if (!phoneRegex.test(phoneNumber)) return false

          return true
        }  

      case 'website':
        return () => {
          const websiteRegex = new RegExp('(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})')
          const website = this._website
          console.log(website)
          console.log(websiteRegex.test(website))
          if (!websiteRegex.test(website)) return false

          return true
        }

      case 'managerId':
        return () => {
          const idRegex = new RegExp('\[0-9]{8}-[A-Z]{1}')
          const managerId = this._manager.idNumber
          if (!idRegex.test(managerId)) return false
          
          const idSection = managerId.split('-')
          const numericPath = Number(idSection[0])
          const literalPath = idSection[1]
          const validChar = 'TRWAGMYFPDXBNJZSQVHLCKE';
          const char = validChar.charAt(numericPath % 23)

          return literalPath === char
        }
         
      default:
        return () => true
    }

  }
}

const firstRoom = new Room('1', 2, '11-2345678')
const secondRoom = new Room('1', 4, '21-2345678')
const thirdRoom = new Room('2', 3, '31-2345678')

const manager = new Manager('Maciel Castro', '4258253421-W', '011-2122003')

const hotel = new Hotel(
  'Bristolmania',
  'San Francisco',
  'Porto 12',
  // '0123-1122322',
  '+54. 987612345',
  'https://www.website.com/asd',
  manager,
  [firstRoom, secondRoom, thirdRoom]
)

const validateManagerId = hotel.check('managerId')
const validatePhoneNumber = hotel.check('phoneNumber')
const validateWebsite = hotel.check('website')

const isValidIdNumber = validateManagerId()
const isValidPhoneNumber = validatePhoneNumber()
const isValidWebsite = validateWebsite()

QUnit.test('Testing exercise 2', (assert) => {
  assert.ok(isValidIdNumber, 'idNumber is valid')

  assert.ok(isValidPhoneNumber, 'phoneNumber is valid')

  assert.ok(isValidWebsite, 'website is valid')
})
