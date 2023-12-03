import { Button } from "../../components/Button"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Menu } from "./menu/Menu"
import { S } from "./Menu_Styles"
import { useState } from "react"


type ObjPropsType = {
    id: number
    text: string
    href: string
}

type MenuPropsType = {
    items: Array<ObjPropsType>
    bottom?: string
}


export const MobileMenu: React.FC<MenuPropsType> = ({ items }: MenuPropsType) => {

    const [isOpen, setIsOpen] = useState(false);
     
     function mix(){
        setIsOpen(false)
     }
    return (
        <S.StyledMobyleMenu>
            <Button left = '25' name = 'Resume'/>
            <S.BurgerButton onClick={()=> {setIsOpen(!isOpen)}} isOpen={isOpen}>
                <span></span>
            </S.BurgerButton>
            <S.MobyleMenuWrapper onClick={()=> {mix()}} isOpen={isOpen}>
                <FlexWrapper direction="column" justify="center">
                <Menu items = {items} />
                </FlexWrapper>
            </S.MobyleMenuWrapper>
        </S.StyledMobyleMenu>
    )
}








