const redux = require("redux");
const createStore = redux.createStore;

const buyCake = () => {
  type: "BUY_CAKE";
  info: "first action";
};

const initialState = {
  numOfCakes: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
