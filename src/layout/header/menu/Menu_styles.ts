import { Link } from "react-scroll";
import styled, { css } from "styled-components";



const LinkItem = styled(Link)`
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 18px;
cursor: pointer;
transition: .3s;
&:hover, &.active{
 color: #fa4c16ed;
}

`


export const S = {
    LinkItem,
}