import React from 'react'

const Image = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className="w-8 h-8 object-contain"/>
    );
}

export default Image
