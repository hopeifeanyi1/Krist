import React from 'react'
import Image from "next/image";
const ImageProp = ({imgSrc, imgAlt}) => {
  return (
    <Image
        class=""
        src={imgSrc}
        alt={imgAlt}
        width={20}
        height={20}
        />
  )
}

export default ImageProp