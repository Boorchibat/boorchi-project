import Image from 'next/legacy/image'
import React from 'react'

export const HeaderImage = () => {
  return (
    <div><Image src={"https://www.blockchaingamer.biz/wp-content/uploads/2018/04/rawg-logo_750x430.jpg"} alt='logo'  width={130} 
    height={75} className='rounded-md'/></div>
  )
}
