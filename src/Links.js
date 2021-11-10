import React from 'react'
import { Link } from 'react-router-dom';

class Links extends React.Component {
    render() {
        return(
            <nav>
              <Link to="/">Pokedex</Link>  
            </nav>
        )
    }
}

export default Links;