import 'babel-polyfill'
import { handleSubmit } from '../formHandler'

describe('Client Test', () => {
    test('handleSubmit is properly defined', () => {
        expect(handleSubmit).toBeDefined()
    })
})