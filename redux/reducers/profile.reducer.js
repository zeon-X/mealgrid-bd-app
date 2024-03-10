import { profileConstants } from "../constant/constants";

const initState = {
  data: null,
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case profileConstants.PROFILE_GET_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case profileConstants.PROFILE_GET_SUCCESS:
      state = {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
      break;
    case profileConstants.PROFILE_GET_FAILURE:
      state = {
        ...state,
        error: action.payload,
        loading: false,
      };
      break;
  }
  return state;
};
