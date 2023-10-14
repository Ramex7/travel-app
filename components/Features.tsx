import { FEATURES } from '@/constants'
import React from 'react'

const Features = () => {
  return (
    <section
      id='services'
      className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'
    >
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className='z-20 flex w-full flex-col'>
          <div className='relative'>
            <h2 className='bold-40 lg:bold-64'>Our Services</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-3 lg:mg-20 lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string
  description: string
}

const FeatureItem = ({ title, description }: FeatureItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}

export default Features
