import {IAction} from "../actions";
import {GET_CATEGORIES, GET_STATUSES} from "../actions/references.action";

export interface IReference {
    id: string
    name: string
}

interface IReferencesState {
    categories: IReference[]
    statuses: IReference[]
}

const initialState: IReferencesState = {
    categories: [],
    statuses: []
}

export const referencesReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case GET_CATEGORIES: {
            return {
                ...state,
                categories: action.data
            }
        }
        case GET_STATUSES: {
            return {
                ...state,
                statuses: action.data
            }
        }
        default: {
            return {
                ...state
            }
        }
    }

}