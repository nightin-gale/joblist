"use client"
import React from 'react'
import { Turnstile } from "@marsidev/react-turnstile";

var siteKey = '1x00000000000000000000AA'


if (!process.env.NEXT_PUBLIC_DEV_ENV && process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY) {
  siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY
}

const TurnstileClient = () => {
  async function onloadTurnstileCallback(token: string) {
    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        body: JSON.stringify({ token }),
        headers: {
          'content-type': 'application/json'
        }
      })
      const data = await res.json()
      if (data.success) {
        console.log("Cloudflare Verification Success")
      }
    } catch (error) {
      console.error("Error in TurnstileClient")
      console.error(error)
    }
  }

  return <Turnstile siteKey={siteKey} onSuccess={onloadTurnstileCallback} />
}

export default TurnstileClient
