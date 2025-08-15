import Head from "next/head";

export default function DefaultLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{`${title} | Nodewave`}</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
