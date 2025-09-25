import ServicesMainseo from "@/components/services/ServicesMainseo";

export const metadata = {
    title: 'Digital Marketing Services & Expert Online Marketing Solutions',
    description: "Our digital marketing services and online marketing solutions are tailored to your needs. Unleash the power of the internet with our expertise.",
    alternates: {
        canonical: 'https://www.nspglobalservices.com/services',
    },
    openGraph: {
        title: 'Digital Marketing Services & Expert Online Marketing Solutions',
        description: "Our digital marketing services and online marketing solutions are tailored to your needs. Unleash the power of the internet with our expertise.",
        url: 'https://www.nspglobalservices.com/services',
    },
}

function ServiceMainPage(){
  return (
      <ServicesMainseo/>
  )
}

export default ServiceMainPage;