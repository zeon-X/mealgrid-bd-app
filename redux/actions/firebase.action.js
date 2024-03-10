import axiosInstance from "../helpers/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authConstant } from "../constant/constants";

export const googleLogin = (user) => {
  // console.log("res redux data ", user);
  const { displayName, email, photoURL, uid } = user;
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.LOGIN_REQUEST });
      const res = await axiosInstance.post(`/user/auth/signin/social`, {
        email,
        password: uid,
        details: {
          fullName: displayName,
          img: photoURL,
        },
        signInMethod: "google",
        verification: {
          isVerified: true,
        },
      });

      if (res?.status === 200) {
        // console.log("res from mongodb : ", res?.data);
        const { token, user } = res?.data;
        let userData = user?._doc ? user?._doc : user;
        await AsyncStorage.setItem("token", JSON.stringify(token));
        await AsyncStorage.setItem("user", JSON.stringify(userData));
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            token,
            user: userData,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstant.LOGIN_FAILURE,
        payload: { msg: "", status: "" },
      });
    }
  };
};
export const instagramLogin = (user_id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.LOGIN_REQUEST });
      const res = await axiosInstance.post(`/user/auth/signin/social`, {
        email: user_id,
        password: user_id,

        signInMethod: "instagram",
        verification: {
          isVerified: true,
        },
      });

      if (res?.status === 200) {
        // console.log("res from mongodb : ", res?.data);
        const { token, user } = res?.data;
        let userData = user?._doc ? user?._doc : user;
        await AsyncStorage.setItem("token", JSON.stringify(token));
        await AsyncStorage.setItem("user", JSON.stringify(userData));
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            token,
            user: userData,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstant.LOGIN_FAILURE,
        payload: { msg: "", status: "" },
      });
    }
  };
};

export const emailSignup = (user, password) => {
  // console.log("res redux signup data ", user);
  const { displayName, email, photoURL, uid } = user;
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.SIGNUP_REQUEST });
      const res = await axiosInstance.post(`/user/auth/signup`, {
        email,
        password,
        details: {
          fullName: displayName,
          img: photoURL,
        },
        verification: {
          isVerified: false,
        },
      });

      // console.log("registartion res from mongodb:");
      // console.log(res);
      if (res?.status === 201) {
        const {
          // token,
          user,
        } = res?.data;
        let userData = user?._doc ? user?._doc : user;

        dispatch({
          type: authConstant.SIGNUP_SUCCESS,
          payload: {
            // token,
            user: userData,
          },
        });

        let msg = "User created!";

        const sendEmailRes = await axiosInstance.post(
          `/user/auth/email/sendmail`,
          {
            email,
          }
        );
        if (sendEmailRes?.status === 202) {
          msg = "User created and Verification email sent!";
        }

        return { status: 201, user: userData, msg: msg };
      }
    } catch (error) {
      dispatch({
        type: authConstant.SIGNUP_FAILURE,
        payload: { msg: "", status: "" },
      });
      throw error;
    }
  };
};
export const emailSignin = (user, password) => {
  // console.log("res redux signup data ", user);
  const { email } = user;
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.LOGIN_REQUEST });
      const res = await axiosInstance.post(`/user/auth/signin`, {
        email,
        password,
      });

      if (res?.status === 200) {
        // console.log("res from mongodb email login : ", res?.data);
        const { token, user } = res?.data;
        let userData = user?._doc ? user?._doc : user;
        await AsyncStorage.setItem("token", JSON.stringify(token));
        await AsyncStorage.setItem("user", JSON.stringify(userData));
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            token,
            user: userData,
          },
        });
        return { status: 200, data: userData };
      }
      // else if (res?.status === 403) {
      //   return { status: 403, data: res?.data?.msg };
      // }
    } catch (error) {
      // console.error("error ata redux side: ", error.response.data.msg);
      dispatch({
        type: authConstant.LOGIN_FAILURE,
        payload: {
          msg: "Please Verify Your Email To Continue!",
          status: "403",
        },
      });
      throw error;
    }
  };
};

export const updateProfile = (data) => {
  // console.log("updateProfile data: ", data);
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.PROFILE_UPDATE_REQUEST });
      const res = await axiosInstance.post(`/user/auth/update/profile`, data);

      if (res.status === 200) {
        // console.log("after updated res: ", res?.data);

        const { user, msg } = res.data;
        let userData = user?._doc ? user?._doc : user;
        await AsyncStorage.setItem("user", JSON.stringify(userData));
        dispatch({
          type: authConstant.PROFILE_UPDATE_SUCCESS,
          payload: userData,
        });
        return userData;
      }
    } catch (err) {
      const { data } = err.response;
      dispatch({
        type: authConstant.PROFILE_UPDATE_FAILURE,
        payload: { msg: data.msg, status: err.response.status },
      });
      throw err;
    }
  };
};

export const signout = (authState) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.LOGOUT_REQUEST });
    // const res = await axiosInstance.get(`/user/auth/signout`);

    if (authState?.user !== null || authState?.user !== undefined) {
      await AsyncStorage.multiRemove(["token", "user"]);
      dispatch({ type: authConstant.LOGOUT_SUCCESS });
    } else {
      dispatch({
        type: authConstant.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
