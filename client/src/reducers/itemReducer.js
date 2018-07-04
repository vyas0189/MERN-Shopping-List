import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/types";
import uuid from "uuid";

const initialState = {
  items: [
    {
      id: uuid(),
      name: "Apples"
    },
    {
      id: uuid(),
      name: "Eggs"
    },
    {
      id: uuid(),
      name: "Fruits"
    },
    {
      id: uuid(),
      name: "Berry"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
