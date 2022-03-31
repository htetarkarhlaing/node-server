import { OPEN_MODEL, CLOSE_MODEL } from "../types";

const modelReducer = (
  state = { open: false, title: "", body: "" },
  { type, payloads }
) => {
  switch (type) {
    case OPEN_MODEL:
      return {
        open: (state.open = true),
        title: (state.title = payloads.title),
        body: (state.body = payloads.body),
      };
    case CLOSE_MODEL:
      return {
        open: (state.open = false),
        title: (state.title = ""),
        body: (state.body = ""),
      };
    default:
      return state;
  }
};

export default modelReducer;
