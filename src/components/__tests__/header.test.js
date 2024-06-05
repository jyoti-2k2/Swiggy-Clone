import { fireEvent,render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should load the header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button")

    expect(loginButton).toBeInTheDocument();

})
it("should load the header component cart-items(0)", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText("cart-(0 items)")

    expect(cartItems).toBeInTheDocument();

}) 
it("should change the login button to logout button on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"login"})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"logout"})

    expect(loginButton).toBeInTheDocument();

})