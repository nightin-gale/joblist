"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Link as UiLink, Button as UiButton } from "@nextui-org/react";


const JoblistButton = ({ className, Url }: any) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <UiButton
      className="ml-auto relative top-2"
      size="sm"
      href={Url || "#"}
      target="_blank"
      as={UiLink}
      showAnchorIcon
      variant="light"
    >
      Link
    </UiButton>
  )

  return (
    <Button
      className={className}
      size="sm"
      variant="ghost"
      asChild
    >
      <Link
        href={Url || "#"}
        target="_blank"
      >
        Link
      </Link>
    </Button>
  )
}

export default JoblistButton
