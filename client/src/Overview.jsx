import React from 'react';
import { ReactWrapper } from 'enzyme';



class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
            <div>
                <h1>Header Here</h1> 

                <div>Host</div>
            </div>
            <div>Guests, bedrooms, beds, baths</div>
            <div>featuring description</div>
            <div>Text description</div>
            <div>Amenities</div>
        </div>
        )
    }
}

export default Overview;