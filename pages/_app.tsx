import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { AppProps } from "next/app";
import MoralisLoginModal from "../components/Modal/MoralisLoginModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Component {...pageProps} />
      <MoralisLoginModal />
    </MoralisProvider>
  );
}

export default MyApp;
