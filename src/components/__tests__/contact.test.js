import ContactUs from "../ContactUs"
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"

describe("all test cases of contactUs component",()=>{
    test("should show the contact us component",()=>{
        render(<ContactUs/>)
        const heading = screen.getByRole("heading")
    
        //assertion
        expect(heading).toBeInTheDocument();
    
    })
    test("should load the button in contact us component",()=>{
        render(<ContactUs/>)
        const button = screen.getByText("Submit")
    
        //assertion
        expect(button).toBeInTheDocument();
    
    })
    it("should load the all input available in contactUs component",()=>{
        render(<ContactUs/>)
        const inputBoxes = screen.getAllByRole("textbox")
        
        expect(inputBoxes.length).toBe(4)
    
        
    })

})
