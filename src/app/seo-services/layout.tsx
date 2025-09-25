import type { Metadata } from 'next'
import { metadata } from './metadata'

export { metadata }

export default function SeoServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
}
