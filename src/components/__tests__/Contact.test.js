import {render,screen} from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'


describe('contact us page test case',()=>{


    it('should load contact us component',()=>{
        render(<Contact/>)
        
        const heading=screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
    
    it('Should load button inside contact component',()=>{
        render(<Contact/>)
        
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    })

    test('should load 2 input box in the contact component',()=>{
        render(<Contact/>)

        const inputBoxes =screen.getAllByRole('textbox')

        expect(inputBoxes.length).toBe(2)
    })
})
