import { Metadata } from 'next'
import UniversalSubcategoryPage from '@/components/UniversalSubcategoryPage'

interface PageProps {
  params: Promise<{ industry: string; subcategory: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry, subcategory } = await params
  const industryName = industry.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const subcategoryName = subcategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  return {
    title: `${subcategoryName} Digital Marketing Services | ${industryName} | NSP Global Services`,
    description: `Specialized digital marketing solutions for ${subcategoryName.toLowerCase()} in the ${industryName.toLowerCase()} industry. Drive growth with our proven strategies and expertise.`,
    alternates: {
      canonical: `https://www.nspglobalservices.com/industries/${industry}/${subcategory}`,
    },
  }
}

export default async function UniversalSubcategoryRoute({ params }: PageProps) {
  const { industry, subcategory } = await params
  
  return <UniversalSubcategoryPage industry={industry} subcategory={subcategory} />
}