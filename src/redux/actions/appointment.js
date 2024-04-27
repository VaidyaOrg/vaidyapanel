import axios from "axios";
import { server } from "../../server";

export const loadAppointment = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadAppointmentRequest",
    });
    const { data } = await axios.get(`${server}/appointment`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadAppointmentSuccess",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "LoadAppointmentFail",
      payload: error.response.data.message,
    });
  }
};
