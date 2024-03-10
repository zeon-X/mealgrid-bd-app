import axiosInstance from "../helpers/axios";
import { profileConstants } from "../constant/constants";

export const getProfileItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: profileConstants.PROFILE_GET_REQUEST });
      // console.log("req");
      const res = await axiosInstance.get(`/profile/get`);

      // console.log("res", res);

      if (res.status === 200) {
        dispatch({
          type: profileConstants.PROFILE_GET_SUCCESS,
          payload: res?.data?.profiles,
        });
      }
    } catch (error) {
      dispatch({
        type: profileConstants.PROFILE_GET_FAILURE,
        payload: error.response,
      });
    }
  };
};
