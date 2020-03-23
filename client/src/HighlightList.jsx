import React from 'react';
import HighlightEntry from './HighlightEntry.jsx'

import styled from 'styled-components';


const HighlightList = ({ highlights }) => {
    // console.log(highlights)

    let high = [{
        title: 'Entire Home',
        desc: 'You will have the entire house to yourself',
        img: 'https://image.flaticon.com/icons/png/512/69/69524.png'
    },
    {
        title: "Sparkling Clean",
        desc: 'Recent guests said this place was sparkling clean',
        img: 'https://www.pngfind.com/pngs/m/91-918544_vector-clean-home-cleaning-icon-png-transparent-png.png'
    },
    {
        title: 'SuperHost',
        desc: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
        img: 'https://cdn0.iconfinder.com/data/icons/rewards-and-badges/64/level-medal-badge-competition-512.png'
    },
    {
        title: 'Great Location',
        desc: 'Recent guests said this place was in a great location',
        img: 'https://cdn4.iconfinder.com/data/icons/maps-and-navigation-solid-icons-vol-1/72/19-512.png'
    },
    {
        title: 'Self Check-In',
        desc: 'Check yourself in with the keypad',
        img: 'https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/104-512.png'
    }]

    var renderHighlights = []
    if (highlights) {
        // var renderHighlights = []
        for (var i = 0; i < highlights.length; i++) {
            var boolean = highlights[i]
            if (boolean === 1) {
                renderHighlights.push(high[i])
            }
        }
    }

    return (
        <div>{renderHighlights.map((highlight, key) => (
            <HighlightEntry highlight={highlight} key={key} />
        ))}
        </div>
    )
}



export default HighlightList;
