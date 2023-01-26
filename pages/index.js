import Letters from "@/components/Letters";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GSAP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Letters />
      </>
    </>
  );
}
