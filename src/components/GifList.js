import React from 'react';

const GifList = (props) => {


    console.log(props)
    return (
        <div>
            {props.imageList.map(gif => <img key={gif.url} src={gif.url} alt='gif'></img>)} 
        </div>

    )
}

export default GifList;