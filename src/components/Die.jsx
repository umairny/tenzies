export default function Die(props) {
    
    //console.log(props.value)
    // function diceDots() {
    //     const newDot = []
    //     for (let i = 0; i < props.value; i++) {
    //         newDot.push(<div className="dot"></div>)
    //     }
    //     return newDot
    // }
    // console.log(diceDots())

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }

    return (
        <div
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <div className={`dot dot-${props.value}`}></div>
            
            {/* <h2 className="die-num">{props.value}</h2> */}
        </div>
    )
}

//Put real dice get the number from dice
//count how many rolls to finish game
//track the time to finish the game
//save the best time to local storage