// at the time of writing the stable version of next.js has bug with google analytics
// when the bug is fixed, google analytics is available in next/third-parties directory
import Script from "next/script";

const GoogleAnalytics = ({token}: {token: string}) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${token}`}
      />

      <Script strategy="lazyOnload" id="GoogleAnalytic">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${token}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
