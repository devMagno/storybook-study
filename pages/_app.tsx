import type { AppProps } from "next/app";
import ThemeProvider from "../src/theme/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
