import React from 'react'
import ImageCard from './ImageCard'

import './ImageList.css'

const ImageList = (props) => {
    // For image of the images passed through props, map an ImageCard
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    // Return the results of our map into this Div.
    return <div className='image-list'>{images}</div>
}

export default ImageList