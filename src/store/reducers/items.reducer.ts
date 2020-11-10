import {IAction} from "../actions";
import {ADD_ITEM, GET_ITEMS} from "../actions/items.action";

export interface IItem {
}

export interface IItemsState {
    items: IItem[]
}

const initialState: IItemsState = {
    items: []
}

export const itemsReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case GET_ITEMS: {
            return {
                ...state,
                items: action.data
            }
        }
        case ADD_ITEM: {
            return {
                ...state
            }
        }
        default: {
            return {
                ...state
            }
        }
    }

}