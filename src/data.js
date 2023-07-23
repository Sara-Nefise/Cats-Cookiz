const ROUTES = {
  COOK_PROFILE: '/api/cooker',
  COOK_ORDERS: '/api/cooker/orders',
  COOK_DISHES: '/api/cooker/dishes',
  COOK_PAYMENT: '/api/cooker/paymentType',
  COOK_LOGIN: '/api/auth/cooker/login',
  COOK_SIGNUP: '/api/auth/cooker/signup',
};

const user1 = {
  email: 'first@gmail.com',
  password: '123456',
};
const incorrectUser = {
  email: 'noexistent@gmail.com',
  password: '2346888',
};

const userSignup = {
  username: 'Tashkent restaurant',
  email: 'new@gmail.com',
  password: '123456',
  address: {
    country: 'Uzbekistan',
    city: 'Tashkent',
    state: 'UZ',
    zipcode: 12345,
    street: 'Main Street',
    buildingNumber: 123,
    buildingName: 'ABC Building',
    flatNumber: 4,
    floor: 2,
  },
  phoneNumber: '1254566522',
  aboutCooker: 'about cooker',
  openingHour: '08.00',
  closingHour: '24.00',
};

module.exports = { ROUTES, user1, incorrectUser, userSignup };