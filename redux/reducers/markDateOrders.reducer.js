import { markedDatesOrderConstant } from "../constant/constants";

const initState = {
  markedDates: {},
  markedDatesOrder: [],
  bill: {},
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case markedDatesOrderConstant.MD_GET_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case markedDatesOrderConstant.MD_GET_SUCCESS:
      state = {
        ...state,
        markedDates: action.payload.md,
        markedDatesOrder: action.payload.md_order,
        bill: action.payload.bill,
        loading: false,
        error: null,
      };
      break;

    case markedDatesOrderConstant.MD_GET_FAILURE:
      state = {
        ...state,
        error: action.payload,
        loading: false,
      };
      break;

    case markedDatesOrderConstant.MD_SET_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case markedDatesOrderConstant.MD_SET_SUCCESS:
      state = {
        ...state,
        markedDates: action.payload?.md,
        markedDatesOrder: action.payload?.md_order,
        bill: action.payload?.bill,
        loading: false,
        error: null,
      };
      break;

    case markedDatesOrderConstant.MD_SET_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case markedDatesOrderConstant.MD_ORDER_UPDATE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case markedDatesOrderConstant.MD_ORDER_UPDATE_SUCCESS:
      state = {
        ...state,
        markedDatesOrder: action.payload.md_order,
        bill: action.payload.bill,
        loading: false,
        error: null,
      };
      break;

    case markedDatesOrderConstant.MD_ORDER_UPDATE_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
