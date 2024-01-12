"use client"
import {
    FacebookShareButton,
    FacebookIcon,
  } from 'next-share'
  
  
const ShareComp = () => {
  return (
    <div>ShareComp


<FacebookShareButton
  url={'https://next-marlin.vercel.app/'}
  title={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#nextshare'}
  windowHeight={500}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>
    </div>
  )
}

export default ShareComp