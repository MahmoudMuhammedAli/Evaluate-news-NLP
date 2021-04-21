import 'babel-polyfill'
import { UpdateUi } from '../update'

describe('Client Test', () => {
    test('is update defined?', () => {
        expect(UpdateUi).toBeDefined()
    })
    test("is it actually updating (and in the right order)",()=>{
        const request = {
            "text":"Hello world!",
            "score_tag":"p",
            "agreement":"DISAGREE",
            "subjectivity":"SUBJECTIVE",
            "confidence":85,
            "irony":"NONIRONIC"
        }
        // should wait till the dom is fully loaded to access it's elements
        document.addEventListener('DOMContentLoaded', function () {
            const text  = document.getElementById("text").value;
            const score = document.getElementById("score").value
            const agreement = document.getElementById("agreement").value
            const subjectivity = document.getElementById("subjectivity").value
            const confidence = document.getElementById("confidence").value
            const irony = document.getElementById("irony").value
            UpdateUi(request);
            expect(text).toEqual("Hello world!");
            expect(score).toEqual("p");
            expect(agreement).toEqual("DISAGREE");
            expect(subjectivity).toEqual("SUBJECTIVE");
            expect(confidence).toEqual("85");
            expect(irony).toEqual("NONIRONIC"); 
        })
 
    })
})