
import { Menu } from "./Menu"
import { S } from "./MenuBtn_Styled"



type ObjPropsType = {
    id: number
    text: string
    href: string
}

type MenuPropsType = {
    items: Array<ObjPropsType>
    isFetch?: boolean
    bottom?: string
    a?: (b: string) => void
    typeNum?: string
}

export const MenuBtn = ({items, bottom}: MenuPropsType) => {
    return (
        <S.StyledMenu bottom = {bottom}>
            <Menu items = {items}/>
        </S.StyledMenu>
    )
}





