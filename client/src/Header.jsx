import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
`
const Title = styled.h2`
`

const Specs = styled.span`
margin-right: 15px
`

const Location = styled.span`
`

const HeadContainer = styled.div`
margin-bottom: 10px
`

const HostContainer = styled.div`
color: rgb(113, 113, 113)
`


const Header = ({house}) => {
    // console.log(house)
    return (
        <Head>
            <HeadContainer>
            <Title>House Name</Title>
            <Location>{house.location}</Location>
            <div>
                <img/>
                <span>{house.host}</span>
            </div>
            </HeadContainer>
            <div>
                <Specs>Guests</Specs>
                <Specs>bedrooms</Specs>
                <Specs>beds</Specs>
                <Specs>baths</Specs>
            </div>
        </Head>
    )
}

export default Header;;