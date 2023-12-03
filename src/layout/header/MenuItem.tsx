import styled from "styled-components"
import { FlexWrapper } from "../../components/FlexWrapper"

import { Button } from "../../components/Button"
import { MenuBtn } from "./menu/MenuBtn"



type ObjPropsType = {
    id: number
    text: string
    href: string
}

type MenuItemPropsType = {
    items: Array<ObjPropsType>
}


export const MenuItem: React.FC<MenuItemPropsType> = ({items}: MenuItemPropsType) => {
    return (
        <StyledMenuItem>
            <FlexWrapper>
              <MenuBtn  items = {items}/>
              <Button left = {'20'} name = 'Resume'/>
            </FlexWrapper>
        </StyledMenuItem>
    )
}


const StyledMenuItem = styled.div`
 ul{
    li > a{
        color: #1648faed;
 }
`