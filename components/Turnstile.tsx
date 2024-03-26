import React from 'react'
import Script from 'next/script'

const TurnstileScript = () => {
  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer />
      <div className="cf-turnstile" data-sitekey="yourSitekey" data-callback="javascriptCallback"></div>
    </>
  )
}

export default TurnstileScript
