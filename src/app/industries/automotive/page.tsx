import { Metadata } from 'next'
import IndustryPage from '../../../components/IndustryPage'

export const metadata: Metadata = {
  title: 'Automotive Digital Marketing Services | NSP Global Services',
  description: 'Comprehensive digital marketing solutions for the automotive industry. Specialized services for dealers, manufacturers, repair shops, and parts retailers.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/industries/automotive',
  },
}

export default function AutomotiveIndustryPage() {
  return <IndustryPage industry="automotive" />
}