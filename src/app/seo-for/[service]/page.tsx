import { Metadata } from 'next'
import SEOForService from '../../../components/SEOForService'

interface PageProps {
  params: Promise<{ service: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params
  const serviceName = service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  return {
    title: `${serviceName} SEO Services - Boost Your Industry Visibility`,
    description: `Drive organic growth in the ${serviceName.toLowerCase()} industry with our expert SEO services. Boost rankings, increase leads, and maximize ROI. Contact us today.`,
    alternates: {
      canonical: `https://www.nspglobalservices.com/seo-for/${service}`,
    },
  }
}

export default async function SEOForServicePage({ params }: PageProps) {
  const { service } = await params
  
  return <SEOForService service={service} />
}