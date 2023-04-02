import { useState } from "react";

const UpdatedCounter = (OriginalComponent, initialCount=0) => {
    function WithCounter(props){
        const [counter, setCounter] = useState(initialCount);
        const handleCounter = () =>{
            setCounter(counter+1);
        }
        return(
            <OriginalComponent count={counter} handleCounter={handleCounter} {...props}/>
        )
    }
    
    return WithCounter;
}
export default UpdatedCounter