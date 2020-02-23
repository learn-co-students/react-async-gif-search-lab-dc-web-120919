import React from 'react'

export default class GifList extends React.Component {
    render(){
        // {debugger}
        return (
            <div>
                <ul>
                    <li><img src="https://media2.giphy.com/media/vFKqnCdLPNOKc/giphy.gif?cid=e1bb72ff3f74191149bdb801a31f7b2c45fde57eeb48f03c&rid=giphy.gif"/></li>
                    {this.props.gifs.map(gif => <li><img alt="searched gif" src={gif}/></li>)}
                </ul>

            </div>
        )
    }
}