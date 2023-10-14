import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section id='history' className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Our History</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            Addis Ababa was the last imperial capital of Ethiopia and serves as
            the capital of the modern state of Ethiopia. Addis Ababa came into
            existence in 1886 as a mineral springs resort for Ethiopia’s royal
            family and nobility. In 1892, Emperor Menilek II (r. 1889-1913) made
            it the capital when he constructed his palace there. By 1896,
            members of the nobility began to build permanent homes in the new
            capital. Neighborhoods bearing the names of these nobles provided
            housing for their followers along with districts for the imperial
            employees. Foreigners, artisans, and merchants also flocked to the
            city. The city’s previously uncertain future was established in 1907
            with the granting of land charters and, in 1917 when the railroad
            arrived from Djibouti.
          </p>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            During the next twenty years, Addis Ababa continued to modernize and
            attract foreign investors, traders, and Ethiopians from the
            countryside, and it was a center of higher education. However, the
            slow government response to a famine in 1973 led to first a series
            of student demonstrations in 1974 in Addis Ababa, and then to a
            successful coup d’état which disposed Selassie. The military regime,
            known as the Derg, fell in 1991. Addis Ababa continues to this day
            as Ethiopia’s capital and first city, with a population of 3.3
            million in 2008.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Guide
