import UpdatedCounter from "./WithCounter";


function HoverCounter(props){
    const {count, handleCounter} = props;

    return(
        <div>
            <h2 onMouseOver={handleCounter}>Hovered {count} times</h2>
        </div>
    )
}

export default UpdatedCounter(HoverCounter);