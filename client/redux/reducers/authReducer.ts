import { AUTH_SUCCESS, AUTH_FAIL } from "../types";

const authReducer = (
  state = { success: false, token: "", data: {} },
  { type, payloads }: any
) => {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        open: (state.success = true),
        title: (state.token = payloads.title),
        body: (state.data = payloads.body),
      };
    case AUTH_FAIL:
      return {
        open: (state.success = false),
        title: (state.token = ""),
        body: (state.data = {}),
      };
    default:
      return state;
  }
};

export default authReducer;
