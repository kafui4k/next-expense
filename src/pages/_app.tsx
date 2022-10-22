import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { magic } from "../lib/magic-auth";
import { useRouter } from "next/router";

import LoaderComponent from "../components/loader/loader.componet";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLogIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function checkUserIsLoggedIn() {
      try {
        const isLoggedIn: any = await magic?.user.isLoggedIn();
        if (isLoggedIn) {
          setIsLoading(false);
          // route to dashboard
          router.push("/");
        } else {
          // route to log in page
          setIsLoading(false);
          router.push("/login");
        }
      } catch {
        // Handle errors if required!
      }
    }
    checkUserIsLoggedIn();
  }, []);

  return isLoading ? (
    <LoaderComponent />
  ) : (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
