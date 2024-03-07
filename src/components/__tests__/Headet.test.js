import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from '../../utils/appStore'
import Header from "../Headet"
import '@testing-library/jest-dom'

it('should render header component with a login button',()=>{
    render(<BrowserRouter>
           <Provider store={appStore}>
                <Header/>
           </Provider>
          </BrowserRouter>
          )

    const loginButton = screen.getByRole('button',{name:'Login'})

    expect(loginButton).toBeInTheDocument();
})

it('should render header component with  cart item 0',()=>{
    render(<BrowserRouter>
           <Provider store={appStore}>
                <Header/>
           </Provider>
          </BrowserRouter>
          )

    const CartItems = screen.getByText(/Cart/)

    expect(CartItems).toBeInTheDocument();
})

it('should change login button to logout button on click',()=>{
    render(<BrowserRouter>
           <Provider store={appStore}>
                <Header/>
           </Provider>
          </BrowserRouter>
          )

    const loginButton = screen.getByRole('button',{name:'Login'})
    
    fireEvent.click(loginButton)
    const logoutButton=screen.getByRole('button',{name:'Logout'})

    expect(logoutButton).toBeInTheDocument();
})