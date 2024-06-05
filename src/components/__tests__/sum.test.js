import { sum } from "../sum";
test("sum function calculate sum of two numbers",()=>{
    const result = sum(2,6);

    //Assertion
    expect(result).toBe(8);

})