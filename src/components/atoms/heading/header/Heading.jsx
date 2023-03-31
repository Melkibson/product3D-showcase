import React from 'react'

const Heading = ({ titleStart, titleEnd }) => {
    return (
        <h1 className="head-text uppercase">
            {titleStart} <br className="xl:block hidden"/> {titleEnd}
        </h1>
    );
}

export default Heading
