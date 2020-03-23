import React from 'react';
import { ReactWrapper } from 'enzyme';
import HighlightList from './HighlightList.jsx';
import Header from './Header.jsx';

import styled from 'styled-components';

const Root = styled.div`
font-family: sans-serif
`

const HighlightItem = styled.div`
display: flex
`

const HighlightItemRight = styled.div`

`

const HighlightItemTitle = styled.h3`
`

const HighlightItemText = styled.p`
color: rgb(113, 113, 113)
`

const HighlightItemImgCont = styled.div`
width: 50px;
text-align: center;
padding-top: 15px
`

const HighlightItemImg = styled.img`
heigth: 25px;
width: 25px
`




const Overview = ({house}) => {
    // console.log(house)
    return (
        <Root>
            <div>
                <Header house={house}/>
            </div>
            <div>
                <HighlightList highlights={house.highlights}/>
            </div>
            <p>{house.overview}</p>
            <div>Amenities</div>
        </Root>
    )
}

export default Overview;

