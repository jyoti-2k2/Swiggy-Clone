import { render, screen } from "@testing-library/react"
import ResturantCard from "../ResturantCard"
import MockData from "../Mocks/resCardMockData.json"
import "@testing-library/jest-dom"


it("should render restaurant componnet with the props",()=>{
    render(<ResturantCard resData={MockData.info}/>)
   

    const name = screen.getByText("McDonald's")
    expect(name).toBeInTheDocument();
})