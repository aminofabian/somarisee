import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
    
    <Image
    src="/logo.png"
    alt="Logo"
    width={100}
    height={50}
    />
    
    </div>
  )
}

export default Logo;