import 'babel-polyfill'
import { handleSubmit } from '../formHandler'
const {regURL} = require("../formHandler")
const {postData} = require("../formHandler")

//testing handelSubmit
describe('Client Test', () => {
    test('handleSubmit is properly defined', () => {
        expect(handleSubmit).toBeDefined()
    })
})

//testing postData
describe('Client Test', () => {
    test('postData is properly defined', () => {
        expect(postData).toBeDefined()
    })
})

//testing regURL
describe('Client Test', () => {
    test('regURL is properly defined', () => {
        expect(regURL).toBeDefined()
        
    }) 

    test('Does it work with actual URL', () => {
        expect(regURL('https://www.google.com')).toBeTruthy()
    })

    test('invalid URL should always return false', () => {
        expect(regURL('Any thing but an actual URL')).toBeFalsy()
    })
 
}) 
