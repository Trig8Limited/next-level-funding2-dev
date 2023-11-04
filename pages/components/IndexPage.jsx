import Head from 'next/head';

function IndexPage({ children }) {
  return (
    <div>
      <Head>
        <title>{children}</title>
        <meta
          name="NextLevelFunding"
          content="With our program, you can get funded up to £1,000,000 with up to a 90% profit split. Unlock Your Trading Potential with Our Leading Proprietary Trading Firm."
        />
        <meta property="og:title" content={children} />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    </div>
  );
}

export default IndexPage;