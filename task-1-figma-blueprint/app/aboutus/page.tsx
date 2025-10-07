import AboutUsCounter from '@/components/section/AboutUsCounter'
import AboutUsFeature from '@/components/section/AboutUsFeature'
import AboutUsInfoBlock from '@/components/section/AboutUsInfoBlock'
import HeroAboutContact from '@/components/section/HeroAbout&Contact'
import AboutUsDownloadSection from '@/components/section/AboutUsDownloadSection'
import React from 'react'
import AboutUsReview from '@/components/section/AboutUsReview'
import { AboutUsAccordin } from '@/components/section/AboutUsAccordin'
import AboutUsBanner from '@/components/section/AboutUsBanner'

export default function page() {
  return (
    <div className='space-y-20 '>
        <HeroAboutContact title='About Us'/>
        <AboutUsFeature/>
        <AboutUsCounter/>
        <AboutUsInfoBlock/>
        <AboutUsDownloadSection/>
        <AboutUsReview/>
        <AboutUsAccordin/>
        <AboutUsBanner/>
    </div>
  )
}
