import 'babel-polyfill'
import { UpdateUi } from '../update'

describe('Client Test', () => {
    test('Testing to see whether UPdat function is defined or not', () => {
        expect(UpdateUi).toBeDefined()
    })
})