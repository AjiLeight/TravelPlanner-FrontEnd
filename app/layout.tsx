import './globals.css'
import type { Metadata } from 'next'
import React from "react";
export const metadata: Metadata = {
  title: 'Travel Planner',
  description: 'We guide you throughout!',
  icons: "/logo-up.svg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
