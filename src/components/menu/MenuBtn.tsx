
import { Menu } from "../../layout/section/works/Menu"
import { S } from "./MenuBtn_Styled"



type ObjPropsType = {
    id: number
    text: string
    status: string
}

type MenuPropsType = {
    items: Array<ObjPropsType>
    isFetch?: boolean
    bottom?: string
    a?: (text: string) => void
    typeNum?: string
}

export const MenuBtn = ({typeNum, a, items,isFetch, bottom}: MenuPropsType) => {
    return (
        <S.StyledMenu bottom = {bottom}>
            <Menu typeNum = {typeNum} a = {a} items = {items} isFetch={isFetch}/>
        </S.StyledMenu>
    )
}





