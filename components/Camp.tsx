import Image from 'next/image'

interface CampProps {
  backgroundImage: string
  title: string
  subtitle: string
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[500px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4'>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-20 text-black'>{title}</h4>
            <p className='bold-10 text-black'>{subtitle}</p>
          </div>
        </div>

        {/* <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image
                className='inline-block h-10 w-10 rounded-full'
                src={url}
                key={url}
                alt='person'
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
        </div> */}
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section
      id='place'
      className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'
    >
      <h1 className='bold-40 lg:bold-64 pb-10 px-20'>Places To Visit</h1>
      <div className='hide-scrollbar flex h-[600px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] pb-20'>
        <CampSite
          backgroundImage='bg-bg-img-1'
          title='National Museum of Ethiopia'
          subtitle='This museum houses the treasures and curios of Ethiopia’s rich history'
        />
        <CampSite
          backgroundImage='bg-bg-img-2'
          title='Merkato Market'
          subtitle='Addis Ababa’s largest outdoor market'
        />
        <CampSite
          backgroundImage='bg-bg-img-3'
          title='Entoto Hill'
          subtitle='To escape the bustle of the city, Entoto Hill is a must on every itinerary'
        />
        <CampSite
          backgroundImage='bg-bg-img-4'
          title='Ethnological Museum'
          subtitle='The Ethnological Museum is the perfect destination to learn'
        />
        <CampSite
          backgroundImage='bg-bg-img-5'
          title='The Mausoleum of Menelik II'
          subtitle='Menelik II is one of Ethiopia’s most revered leaders in Ethiopia’s history'
        />
        <CampSite
          backgroundImage='bg-bg-img-6'
          title='Hot Air Balloons'
          subtitle='Want to see the whole city but strapped for time?'
        />
        <CampSite
          backgroundImage='bg-bg-img-7'
          title='Menelik II Square'
          subtitle='The most prominent square in the city, this area pays tribute to Ethiopia’s resistance to colonization'
        />
        <CampSite
          backgroundImage='bg-bg-img-8'
          title='City Walking Tour'
          subtitle='There are so many landmarks and places of interest in the city'
        />
      </div>

      {/* <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src='/quote.svg'
            alt='camp-2'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div> */}
    </section>
  )
}

export default Camp
