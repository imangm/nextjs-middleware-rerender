import "../scripts/wdyr";
function MyApp({ Component, pageProps }) {
  console.log("render _app");
  return <Component {...pageProps} />;
}

export default MyApp;
