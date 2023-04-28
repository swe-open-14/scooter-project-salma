const User = require('../src/User')

// User tests here
describe('create new user', () => {
    const user1 = new User('Mikes_account', 'thRee3', 20)
// test username
    test('has username', () => {
        expect(user1.username).toBe('Mikes_account')
    })
// test password
    test('has password', () => {
        expect(user1.getOriginalPassword()).toBe('thRee3')
    })
// test age
    test('has age', () => {
        expect(user1.age).toBe(20)
    })
// test getpassword
    test('returns an obscured password', () => {
        expect(user1.getPassword()).toBe('******')
    })
// test login
    test('logs in user', () => {
        expect(user1.logIn('thRee3')).toBe('Mikes_account is logged in')
        expect(() => {
            user1.logIn('tHtee3')
        }).toThrow('Incorrect password')
    })
// test logout
    test('logs out user', () => {
        expect(user1.logOut()).toBe('Mikes_account is logged out')
    })
})