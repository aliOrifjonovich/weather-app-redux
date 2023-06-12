const SEARCH = "Search";


const intialState = {
  rain: "0"
};

export const searchReducer = (state = intialState, action) => {
  switch (action.type) {
    case SEARCH:
      return action.data;
    default:
      return state;
  }
};
export const SearchAction = (data) => {
  return {
    type: SEARCH,
    data,
  };
};