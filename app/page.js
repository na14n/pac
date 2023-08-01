import { HeaderTrigger, Hero, AboutF, Strengths, Reach, BrandSliderF, BrandsF,} from "@/components"
import ProstigeF from "@/components/homepage/prostigeF"


export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className='w-full h-[100vh]'>
        <HeaderTrigger>
          <Hero heroType={'video'} title={'PHILIPPINE’S LEADING DENTAL DISTRIBUTOR'} title2={'AND PROVIDER OF CONTINUOUS EDUCATION'} subheading={'We are one of the leading distributors of quality dental materials, equipment, and accessories provided to dentists from Luzon, to Visayas, and Mindanao.'} buttonName={'Browse our Products'} />
        </HeaderTrigger>
      </div>
      <div className='w-full min-h-[50vh] max-h-fit bg-[#F1F1F1]'>
        <AboutF />
      </div>
      <div className='w-full min-h-4 max-h-fit bg-[#F1F1F1]'>
        <Strengths />
      </div>
      <div className='w-full h-[80vh] max-h-fit bg-[#F1F1F1]'>
        <Hero heroType={'centered'} title={'To know more about our Story'} buttonName={'Click Here'} />
      </div>
      <div className='w-full min-h-4 max-h-fit bg-[#F1F1F1]'>
        <Reach />
      </div>
      <div className='w-full h-[100vh] max-h-fit bg-[#F1F1F1]'>
        <BrandsF />
      </div>
      <div className='w-full h-[100vh] max-h-fit bg-[#F1F1F1]'>
        <ProstigeF />
    </div>
    </main>
  )
}

