import sprite from '../../../assets/images/icons-sprite.svg'

type ItemPropsType = {
    id: string
}


export const Item = ({ id }: ItemPropsType) => {
    return (
            <svg width="25" height="25">
                <use xlinkHref={`${sprite}#${id}`}></use>
            </svg>
    )
}





