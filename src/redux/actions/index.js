import { STORE_ACCOUNT_ADDRESS } from "../constants";

export const storeAccountAddress = (payload) => {
  return { type: STORE_ACCOUNT_ADDRESS, payload };
};
