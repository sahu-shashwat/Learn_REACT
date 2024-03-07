
import {render} from "@testing-library/react"
import {act} from  "react-dom/test-utils"
import RestaurantMenu from '../RestaurantMenu'
import MOCKE_DATA_NAME from '../mocks/mockResmenu.json'
global.fetch =jest.fn(()=>
    Promise.resolve({
        json:()=>Promise.resolve(MOCKE_DATA_NAME)
    })
)

it('should load resturant menu component',async()=>{
    await act(async () => render(<RestaurantMenu/>));
})