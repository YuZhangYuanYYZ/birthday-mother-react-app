import React from 'react';

function Image(props) {
    return (
        <div className="newsImage">
            <img src={props.src} alt='property' sizes="(max-width: 300px) 100vw, 300px"></img>
        </div>
    );
}

export default Image;