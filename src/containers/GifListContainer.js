import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GiftListContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    submitSearchFunc = (event) => {
        // console.log("I'm a search bar input")
        // console.log(event.target.children[0].value)
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.children[0].value}&api_key=dc6zaTOxFJmzC&rating=g`).then(r => r.json())
        // .then(console.log)
        .then(data => this.getGifs(data))
    }

    getGifs = (data) => {
        let fiveGifObjects = data.data.slice(0,5)
        let gifsUrl = []
        fiveGifObjects.forEach(gif => gifsUrl.push(gif.images.original.url))
        this.setState({ gifs: gifsUrl})
        console.log(this.state.gifs)
    }

    render(){
        return (
            <div>
                < GifSearch submitHandler={this.submitSearchFunc}/>
                < GifList gifs={this.state.gifs}/>
                
            </div>
        )
    }
}

export default GiftListContainer