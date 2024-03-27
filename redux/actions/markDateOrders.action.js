import axiosInstance from "../helpers/axios";
import { markedDatesOrderConstant } from "../constant/constants";

// export const getMDItems = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: markedDatesOrderConstant.MD_GET_REQUEST });

//       if (res.status === 200) {
//         dispatch({
//           type: markedDatesOrderConstant.MD_GET_SUCCESS,
//           payload: res?.data?.profiles,
//         });
//       }
//     } catch (error) {
//       dispatch({
//         type: markedDatesOrderConstant.MD_GET_FAILURE,
//         payload: error.response,
//       });
//     }
//   };
// };
export const resetMDItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: markedDatesOrderConstant.MD_SET_REQUEST });

      dispatch({
        type: markedDatesOrderConstant.MD_SET_SUCCESS,
        payload: { md: {}, md_order: [], bill: {} },
      });
    } catch (error) {
      dispatch({
        type: markedDatesOrderConstant.MD_SET_FAILURE,
        payload: error.response,
      });
    }
  };
};

export const setNewMDItems = (
  newDate,
  markedDates,
  markedDatesOrderData,
  menu
) => {
  // console.log(markedDatesOrderData);
  return async (dispatch) => {
    try {
      dispatch({ type: markedDatesOrderConstant.MD_SET_REQUEST });

      let res = sortAndStoreDate(
        newDate,
        markedDates,
        markedDatesOrderData,
        menu
      );
      dispatch({
        type: markedDatesOrderConstant.MD_SET_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: markedDatesOrderConstant.MD_SET_FAILURE,
        payload: error.response,
      });
    }
  };
};
export const updateMDOrderItems = (markedDatesOrderData, menu) => {
  return async (dispatch) => {
    try {
      dispatch({ type: markedDatesOrderConstant.MD_ORDER_UPDATE_REQUEST });

      dispatch({
        type: markedDatesOrderConstant.MD_ORDER_UPDATE_SUCCESS,
        payload: {
          md_order: markedDatesOrderData,
          bill: calcBill(markedDatesOrderData, menu),
        },
      });
    } catch (error) {
      dispatch({
        type: markedDatesOrderConstant.MD_ORDER_UPDATE_FAILURE,
        payload: error.response,
      });
    }
  };
};

const deleteTaskByDate = (dateToDelete, tasks) => {
  const indexToDelete = tasks.findIndex((task) => task.date === dateToDelete);
  if (indexToDelete !== -1) {
    tasks.splice(indexToDelete, 1);
    return tasks;
  } else {
    console.log("Task with the given date not found.");
    return tasks;
  }
};

const addTaskByDate = (task, tasks) => {
  let temp = tasks;
  temp.push(task);
  temp.sort((a, b) => new Date(a.date) - new Date(b.date));
  return temp;
};

const sortAndStoreDate = (newDate, markedDates, markedDatesOrderData, menu) => {
  let md = [];
  let md_order = [];
  // Check if the new date already exists in the state
  if (markedDates[newDate]) {
    // Remove the date from the state
    const { [newDate]: removedDate, ...remainingDates } = markedDates;

    md = remainingDates;
    md_order = deleteTaskByDate(newDate, markedDatesOrderData);
  } else {
    // Combine the new date with existing markedDates
    const combinedDates = {
      ...markedDates,
      [newDate]: {
        color: "#FB6D3B",
        textColor: "white",
        endingDay: true,
        startingDay: true,
      },
    };

    // Sort the dates in ascending order
    const sortedDates = Object.keys(combinedDates).sort((a, b) => {
      return new Date(a) - new Date(b);
    });

    // Create a new object with sorted dates and their corresponding colors/textColors
    const formattedDates = sortedDates.reduce((acc, date) => {
      acc[date] = combinedDates[date];
      return acc;
    }, {});

    // Update the state with sorted and formatted dates
    md = formattedDates;

    md_order = addTaskByDate(
      {
        date: newDate,
        order: { launch: true, dinner: true },
      },
      markedDatesOrderData
    );
  }

  let bill = calcBill(md_order, menu);

  return {
    md,
    md_order,
    bill,
  };
};

const calcBill = (markedDatesOrderData, menu) => {
  let subtotal = 0;
  let how_many_meals = 0;

  markedDatesOrderData?.map((x) => {
    const dayName = new Date(x?.date).toLocaleDateString("en-US", {
      weekday: "long",
    });

    // Find the menu object corresponding to the dayName
    const menuObject = menu.find((item) => item.day_name === dayName);

    // console.log(menuObject);
    subtotal +=
      (x?.order?.dinner ? menuObject?.dinner?.price : 0) +
      (x?.order?.launch ? menuObject?.launch?.price : 0);

    how_many_meals += (x?.order?.dinner ? 1 : 0) + (x?.order?.launch ? 1 : 0);
  });

  return {
    subtotal: subtotal.toFixed(2),
    platformCharge: (how_many_meals * 2).toFixed(2),
    deliveryCharge: (how_many_meals * 10).toFixed(2),
    tax: (subtotal * 0.025).toFixed(2),
    discount: 0,
    total: (
      subtotal +
      how_many_meals * 2 +
      how_many_meals * 10 +
      subtotal * 0.25 -
      0
    ).toFixed(2),
  };
};
