import styled from "styled-components"
import { CardItem } from "./CardItem"
import ux from '../../../assets/images/ux.png'
import front from '../../../assets/images/front.png'
import responsive from '../../../assets/images/responsive.png'


export const Cards = () => {
    return (
        <CardListItems>
            <CardItem right = {120} text={'UX/UI Design'} img = {ux} background = {'rgba(15, 191, 97, 0.20)'} alt = {'Картинка: UI'}/>
            <CardItem right = {30} text={'Front End Development '} img = {front} background = {'rgba(45, 76, 255, 0.13)'} alt = {'Картинка: UI'}/>
            <CardItem text={'Responsive Design'} img = {responsive} background = {'rgba(15, 191, 97, 0.05)'} alt = {'Картинка: UI'}/>
        </CardListItems>
    )
}

const CardListItems = styled.ol`
display: flex;
flex-wrap: wrap;
list-style: none;
counter-reset: num;
margin-bottom: 163px;
@media ${({theme})=> theme.media.desctop}{
    margin-bottom: 60px;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    }
`

