interface BarraProps {
    corFundo: string;
}

export default function Barra(props: BarraProps) {
    return (
        <span className={`
            ml-2 p-2 w-3 h-8 rounded-sm border-white border-2 ${props.corFundo}
            
        `}>

        </span>
    )
}