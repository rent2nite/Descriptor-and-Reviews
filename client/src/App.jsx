import React from 'react';
import axios from 'axios';


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
            <div>HelloWorld</div> 
        );
    }
}

export default App;

