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

const HighlightList = () => {

    return (
        <div>
            <HighlightItem>
                <HighlightItemImgCont>
                    <HighlightItemImg src='https://image.flaticon.com/icons/png/512/69/69524.png' />
                </HighlightItemImgCont>
                <HighlightItemRight>
                    <HighlightItemTitle>Titulo</HighlightItemTitle>
                    <HighlightItemText>description</HighlightItemText>
                </HighlightItemRight>
            </HighlightItem>
            <HighlightItem>
                <HighlightItemImgCont>
                    <HighlightItemImg src='https://image.flaticon.com/icons/png/512/69/69524.png' />
                </HighlightItemImgCont>
                <HighlightItemRight>
                    <HighlightItemTitle>Titulo</HighlightItemTitle>
                    <HighlightItemText>description</HighlightItemText>
                </HighlightItemRight>
            </HighlightItem>
        </div>
    )
}



export default HighlightList;
