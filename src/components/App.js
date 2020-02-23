import React from 'react'

import NavBar from './NavBar'
import GifListcontainer from '../containers/GifListContainer.js'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListcontainer />
    </div>
  )
}

export default App
