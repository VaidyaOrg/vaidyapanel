import axios from "axios";
import { server } from "../../server";

export const loadResources = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadResourcesRequest",
        });
        const { data } = await axios.get(`${server}/resources`);
        dispatch({
            type: "LoadResourcesSuccess",
            payload: data.data,
        });
    } catch (error) {
        dispatch({
            type: "LoadResourcesFail",
            payload: error.response.data.message,
        });
    }
}