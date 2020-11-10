import {getItemsAC} from "../actions/items.action";
import {getItems} from "../../api/items.api";

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