import {addItemAC, getItemsAC} from "../actions/items.action";
import {addItem, getItems} from "../../api/items.api";

export const getItemsThunk = () => {
    return async (dispatch: any) => {
        try {
            const response = await getItems();
            return dispatch(getItemsAC(response.data))
        } catch (error) {
            throw error
        }
    }
};

export const addItemThunk = (data: any) => {
    return async (dispatch: any) => {
        try {
            await addItem(data);
            return dispatch(addItemAC())
        } catch (error) {
            throw error
        }
    }
};