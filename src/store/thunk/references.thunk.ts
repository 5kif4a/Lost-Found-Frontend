import {getCategories, getStatuses} from "../../api/references.api";
import {getCategoriesAC, getStatusesAC} from "../actions/references.action";

export const getCategoriesThunk = () => {
    return async (dispatch: any) => {
        try {
            const response = await getCategories();
            return dispatch(getCategoriesAC(response.data))
        } catch (error) {
            throw error
        }
    }
};


export const getStatusesThunk = () => {
    return async (dispatch: any) => {
        try {
            const response = await getStatuses();
            return dispatch(getStatusesAC(response.data))
        } catch (error) {
            throw error
        }
    }
};