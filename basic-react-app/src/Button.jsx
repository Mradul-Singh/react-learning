function handleClick(){
    console.log("Hello!");
}
function handleMouseOver(){
    console.log("Bye!");
}
function handleDblClick(){
    console.log("you double clicked");
}
export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Hover over me!</p>
            <button onDoubleClick={handleDblClick}>Double click me!</button>
        </div>
    );
}