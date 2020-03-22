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

// class Overview extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         }
//         console.log(props)
//     }

//     render() {
//         return (
//             <Root>
//                 <div>
//                     <Header />
//                     <div>
//                         <img />
//                         <p>Name</p>
//                     </div>
//                 </div>
//                 <div>
//                     <HighlightList />
//                 </div>
//                 <p>Text description</p>
//                 <div>Amenities</div>
//             </Root>
//         )
//     }
// }




const Overview = ({house}) => {
    console.log(house)
    return (
        <Root>
            <div>
                <Header house={house}/>
            </div>
            <div>
                <HighlightList />
            </div>
            <p>{house.overview}</p>
            <div>Amenities</div>
        </Root>
    )
}

export default Overview;


// <HighlightItem>
// <HighlightItemImgCont>
//     <HighlightItemImg src='https://image.flaticon.com/icons/png/512/69/69524.png'/>
// </HighlightItemImgCont>
// <HighlightItemRight>
//     <HighlightItemTitle>Titulo</HighlightItemTitle>
//     <HighlightItemText>description</HighlightItemText>
// </HighlightItemRight>
// </HighlightItem>