
import Sprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = ({ iconId, width, height,viewBox }: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width ?? '25'} height={height ?? '25'} viewBox={viewBox ?? "0 0 23 23"} fill="none">
            
            <use xlinkHref={`${Sprite}#${iconId}`}></use>
        </svg>
    )
}