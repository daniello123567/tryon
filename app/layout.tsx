import React, { Suspense } from 'react'
import './globals.css'
import Loading from './components/loader'
function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html>
      <body >
        <Suspense fallback={<Loading/>}>
      {children}
      </Suspense>
      </body>
      </html>
  )
}

export default RootLayout
