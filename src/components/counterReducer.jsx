import React from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increse_counter": {
      return state + action.payload;
    }
    case "decrese_countr": {
      return state > 20 ? state - action.payload : state;
    }
  }
};
export default counterReducer;
