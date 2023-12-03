import styled from "styled-components"


type CardItemPropsType = {
    img: string
    background: string
    alt?: string
    text: string
    right?: number
}

type CardBlockPropsType = {
    background: string
}

export const CardItem = ({right, img, background, alt, text }: CardItemPropsType) => {
    return (
        <StyledCardItem right = {right}>
                <WrapperIcon  background={background}><Icon src={img} alt={alt ?? 'технология'} /></WrapperIcon>
                <CardTitle>{text}</CardTitle>
        </StyledCardItem>
    )
}


type StyledCardItemPropsType = {
    right?: number
}

const StyledCardItem = styled.li<StyledCardItemPropsType>`
display: flex;
align-items: center;
position: relative;
margin-right: ${({right})=> right ?? 0}px;
counter-increment: num;
&:nth-child(-n+9):after {
content: "0" counter(num);
}
&::after{
color: #494949;
position: absolute;
font-size: 20px;
top: 12px;
left: 150px;
}
@media ${({ theme }) => theme.media.desctop}{
    margin-right: 0;
    width: 380px;
}
@media ${({ theme }) => theme.media.tablet}{
    margin-right: 0;
}
@media ${({ theme }) => theme.media.mobile}{
    width: 300px;
}

`

const WrapperIcon = styled.div<CardBlockPropsType>`
width: 120px;
height: 120px;
margin-right: 30px;
border-radius: 20px;
background-color: ${({ background }) => background};
display: flex;
align-items: center;
justify-content: center;
`

const CardTitle = styled.h3`
font-size: 20px;
font-weight: 500;
@media ${({ theme }) => theme.media.mobile}{
    font-size: 15px;
}
`

const Icon = styled.img`
width: 70px;
height: 70px;
`