import styled from 'styled-components'
import logo from '../../assets/images/Logo.png'
import { S } from './Logo_Styles'
import {animateScroll as scroll} from 'react-scroll'

export const Logo = () => {
    return (
        <a onClick={()=> scroll.scrollToTop()} ><S.Img src={logo} alt="Логотип" /></a>
    )
}

