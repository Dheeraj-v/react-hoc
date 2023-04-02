import UpdatedCounter from "./WithCounter";
function ClickCounter(props){
    const {count, handleCounter, name} = props;
    return(
        <div>
            <button onClick={handleCounter}>Click {count} times</button>
            {name}
        </div>
    )
}

export default UpdatedCounter(ClickCounter, 1);