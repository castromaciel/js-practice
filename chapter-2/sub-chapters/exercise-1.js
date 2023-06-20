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
   * @param {number} idNumber 
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
   * @param {number} idNumber 
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
}

const firstRoom = new Room('1', 2, '11-2345678')
const secondRoom = new Room('1', 4, '21-2345678')
const thirdRoom = new Room('2', 3, '31-2345678')

const manager = new Manager('Maciel Castro', '420022001', '011-2122003')

const hotel = new Hotel(
  'Bristolmania',
  'San Francisco',
  'Porto 12',
  '0123-1122322',
  'https://www.website.com/',
  manager,
  [firstRoom, secondRoom, thirdRoom]
)

const hotelName = hotel.name
const hotelCity = hotel.city
const hotelAddress = hotel.address
const hotelPhoneNumber = hotel.phoneNumber
const hotelWebsite = hotel.website
const hotelManagerFullName = hotel.manager.fullName
const hotelManagerIdNumber = hotel.manager.idNumber
const hotelManagerPhoneNumber = hotel.manager.phoneNumber
const hotelFirstRoomPhoneNumber = hotel.rooms[0].phoneNumber
const hotelSecondRoomPhoneNumber = hotel.rooms[1].phoneNumber
const hotelThirdRoomPhoneNumber = hotel.rooms[2].phoneNumber


QUnit.test('Test hotel properties', (assert) => {
  assert.equal(hotelName, 'Bristolmania', 'Correct hotel name')
  assert.equal(hotelCity, 'San Francisco', 'Correct hotel city')
  assert.equal(hotelAddress, 'Porto 12', 'Correct hotel address')
  assert.equal(hotelPhoneNumber, '0123-1122322', 'Correct hotel phone number')
  assert.equal(hotelWebsite, 'https://www.website.com/', 'Correct hotel website')
  assert.equal(hotelManagerFullName, 'Maciel Castro', 'Correct hotel manager full name')
  assert.equal(hotelManagerIdNumber, '420022001', 'Correct hotel manager id number')
  assert.equal(hotelManagerPhoneNumber, '011-2122003', 'Correct hotel manager phone number')
  assert.equal(hotelFirstRoomPhoneNumber, '11-2345678', 'Correct hotel first room phone number')
  assert.equal(hotelSecondRoomPhoneNumber, '21-2345678', 'Correct hotel second room phone number')
  assert.equal(hotelThirdRoomPhoneNumber, '31-2345678', 'Correct hotel third room phone number')
})
