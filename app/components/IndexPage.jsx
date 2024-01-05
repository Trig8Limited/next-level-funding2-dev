import Head from 'next/head';
import Script from 'next/script';

function IndexPage({ children }) {
  return (
    <div>
    <Head>
    {children}
     </Head>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-C9HBH2F8Z5"
      strategy="afterInteractive"
    />
    <Script
      id="ga-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C9HBH2F8Z5');
        `,
      }}
    />
    
  </div>
  );
}

export default IndexPage;
