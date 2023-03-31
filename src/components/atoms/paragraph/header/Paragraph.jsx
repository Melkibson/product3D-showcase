import React from 'react'

const Paragraph = ({ contentStart, strong, contentEnd }) => {
    return (
        <p className="max-w-md font-normal text-gray-600 text-base">
            {contentStart} <strong>{strong}</strong> {contentEnd}
        </p>
    );
}

export default Paragraph
