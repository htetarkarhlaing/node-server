import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";

// css
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
