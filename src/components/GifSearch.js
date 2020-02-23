import React from 'react'

export default class GifSearch extends React.Component{
    constructor(){
        super()
        this.state = {
            searchTerms: ""
        }
    }

    handleUserInput = (event) => {
        this.setState({
            searchTerms: event.target.value
        })
        console.log(this.state.searchTerms)
    }
    
    render(){
        return(
            <div>
                <form onSubmit={(event) => {this.props.submitHandler(event)}}>
                    <input type="text" onChange={(event) => {this.handleUserInput(event)}} value={this.state.searchTerms}></input>
                    <button>Find 5 More Gifs!</button>
                </form>
            </div>
        )
    }
}