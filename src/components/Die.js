export default function Die(props){
    return(
        <div className="main__die die" 
        style={props.isHeld ? {background: '#59E391'} : {background: '#FFFFFF'} }
        onClick={() => props.holdDice(props.id)}>
            <span>{props.value}</span>
        </div>
    )
}