import "../styles/globals.css";
import wrapper from "../common/configureStore";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
