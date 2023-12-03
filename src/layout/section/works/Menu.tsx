import styled, { css } from "styled-components"
import { S } from "./Menu_styles"

type ObjPropsType = {
    id: number
    text?: string
    status: string 
}

type MenuPropsType = {
    items: Array<ObjPropsType>
    isFetch?: boolean
    a?: (text: string) => void
    typeNum?: string
}

export const Menu: React.FC<MenuPropsType> = ({typeNum, a = function(){}, items,isFetch}: MenuPropsType) => {
    return (
            <ul>
            
                {items.map((item) => {
                    return <li key={item.id}><S.LinkItem active = {typeNum === item.status}  onClick={(e)=> {
                        a(item.status); 
                        e.preventDefault()
                    }
                    } isFetch={isFetch} href="">{item.text}</S.LinkItem></li>
                })}
            </ul>
    )
}






