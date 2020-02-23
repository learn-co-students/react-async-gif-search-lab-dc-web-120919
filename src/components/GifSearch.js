import React from 'react'


export default class GifSearch extends React.Component {

    constructor(){
        super()
        this.state = {
            searchText: null
        }
    }


    render() {

        return (
            <div>
                <form onSubmit={(e)=>this.props.searchFunction(e)}>
                    <input type='text' onChange={(e)=>this.props.changeSearch(e)} placeholder='search'></input>
                    <input type='submit' value='Find gifs'></input>
                </form>
            </div>
            
        )
    }
}