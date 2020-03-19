import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "/houses",
        })
        .then ((response) => {
            console.log(response);
            this.setState({houses: response})
        })
        .catch(e => console.log(e))
    }



    render() {
        return (
            <div>
            <div>
                <Overview />
            </div> 
            <div>
                <Reviews />
            </div>
            </div>
        );
    }
}

export default App;



//componenet for overview
//component for reviews 

//componente para rating (cuantas estrellas)

