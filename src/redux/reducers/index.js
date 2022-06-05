import { STORE_ACCOUNT_ADDRESS } from "../constants";
const reducer = (initialState = { account: "" }, action) => {
  switch (action.type) {
    case STORE_ACCOUNT_ADDRESS:
      return { ...initialState, account: action.payload };

    default:
      return initialState;
  }
};

export default reducer;
