import React from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            searchTerm: '',
            searchResults: null,
        }
    }

    searchFunction = (event) => {

        event.preventDefault()
        console.log('search function')

        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res=> res.json())
        .then(({data}) => {
            this.setState({ searchResults: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
        
    }

    changeSearch = (e) =>{

        this.setState({
            searchTerm: e.target.value
        })
    }

    render(){

        return (
            <div className='gif-list-container'>
            <GifSearch searchFunction={this.searchFunction} changeSearch={this.changeSearch}/>
            <br></br>
            {(this.state.searchResults)? <GifList imageList={this.state.searchResults} /> : null }
            </div>

            
        )
    }
}

export default GifListContainer;