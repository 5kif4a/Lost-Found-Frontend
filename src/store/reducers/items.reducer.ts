import {IAction} from "../actions";
import {ADD_ITEM, GET_ITEMS} from "../actions/items.action";
import {IReference} from "./references.reducer";

export interface IItem {
    id: string
    name: string
    imageIndex: string
    description: string
    categories: IReference
    status: IReference
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