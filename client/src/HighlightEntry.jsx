import React from 'react';
import styled from 'styled-components';

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
heigth: 15px;
width: 15px
`


const HighlightEntry = ({highlight}) => {
    
    // console.log(highlight)
    return (
        <HighlightItem>
            <HighlightItemImgCont>
                <HighlightItemImg src={highlight.img || ''} />
            </HighlightItemImgCont>
            <HighlightItemRight>
                <HighlightItemTitle>{highlight.title || ''}</HighlightItemTitle>
                <HighlightItemText>{highlight.desc || ''}</HighlightItemText>
            </HighlightItemRight>
        </HighlightItem>
    )
}


export default HighlightEntry;