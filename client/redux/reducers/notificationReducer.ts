import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from "../types";

const notificationReducer = (
  state = { open: false, title: "", body: "", icon: "" },
  { type, payloads }: any
) => {
  switch (type) {
    case OPEN_NOTIFICATION:
      return {
        open: (state.open = true),
        icon: (state.icon = payloads.icon),
        title: (state.title = payloads.title),
        body: (state.body = payloads.body),
      };
    case CLOSE_NOTIFICATION:
      return {
        open: (state.open = false),
        icon: (state.icon = ""),
        title: (state.title = ""),
        body: (state.body = ""),
      };
    default:
      return state;
  }
};

export default notificationReducer;
