import Theme from "@/styles/Theme";
import GlobalStyles from "@/styles/GlobalStyles";
import Nav from "@/components/Nav";
import { Inter } from "@next/font/google";
import GitBookButton from "@/components/GitBookButton";
const inter = Inter({ subsets: ["latin"] });
import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

export default function App({ Component, pageProps }) {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      "[data-loader]",
      {
        opacity: 0,
        duration: 5,
      },
      {
        opacity: 1,
        duration: 5,
      }
    );
    setTimeout(() => {
      // setIsLoad(false);
    }, 1000);
  }, []);

  return (
    <Theme>
      <GlobalStyles />
      <main className={inter.className}>
        {isLoad ? (
          <Loader data-loader>
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#93D400"
              ariaLabel="ball-triangle-loading"
              wrapperClass={"loader"}
              wrapperStyle=""
              visible={true}
            />
          </Loader>
        ) : (
          <>
            <Nav />
            <Component {...pageProps} />
            <GitBookButton />
          </>
        )}
      </main>
    </Theme>
  );
}

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
