import UpdatedCounter from "./WithCounter";
function ClickCounter(props){
    const {count, handleCounter} = props;
    return(
        <div>
            <button onClick={handleCounter}>Click {count} times</button>
        </div>
    )
}

export default UpdatedCounter(ClickCounter, 1);