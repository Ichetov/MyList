import { S } from "./Menu_styles"

type ObjPropsType = {
    id: number
    text: string
    href: string
}

type MenuPropsType = {
    items: Array<ObjPropsType>
}

export const Menu: React.FC<MenuPropsType> = ({items}: MenuPropsType) => {
    return (
            <ul onClick={()=> {}}>
                {items.map((item) => {
                    return <li key={item.id}><S.LinkItem spy = {true} activeClass="active" smooth={true} to={item.href}>{item.text}</S.LinkItem></li>
                })}
            </ul>
    )
}



