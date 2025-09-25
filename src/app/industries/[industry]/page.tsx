import { Metadata } from 'next'
import IndustryPage from '../../../components/IndustryPage'

interface PageProps {
  params: Promise<{ industry: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params
  const industryName = industry.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  return {
    title: `${industryName} Digital Marketing Services | NSP Global Services`,
    description: `Specialized digital marketing solutions for the ${industryName.toLowerCase()} industry. Drive growth with our proven strategies and expertise.`,
    alternates: {
      canonical: `https://www.nspglobalservices.com/industries/${industry}`,
    },
  }
}

export default async function IndustryPageRoute({ params }: PageProps) {
  const { industry } = await params
  
  return <IndustryPage industry={industry} />
}