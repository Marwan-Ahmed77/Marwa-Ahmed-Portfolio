import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marwan Ahmed — ERP Consultant & Oracle Fusion HCM Specialist',
  description: 'ERP Consultant and Project Manager specializing in Oracle Fusion HCM implementations. Bridging business needs with technical execution across the MENA region.',
  keywords: ['ERP Consultant', 'Oracle Fusion HCM', 'Project Manager', 'ERP Implementation', 'Cairo', 'Egypt'],
  authors: [{ name: 'Marwan Ahmed' }],
  openGraph: {
    title: 'Marwan Ahmed — ERP Consultant',
    description: 'Driving business transformation through Oracle Fusion HCM implementations.',
    type: 'website',
  },
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
