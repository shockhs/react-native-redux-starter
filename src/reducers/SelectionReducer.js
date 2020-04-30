import { SELECT_ELEMENT } from "./actions/actions";


const SelectionReducer = (state = null, action) => {
    switch (action.type) {
        case SELECT_ELEMENT: {
            return action.currentID
        }
        default: return state
    }
}


export default SelectionReducer;