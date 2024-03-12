type CardProps = {
    image: string;
    text: string;
}
export default function ImageCard(props:CardProps){
    return(
    <div className="grid grid-flow-row md:grid-flow-col rounded-md shadow-md bg-violet-300  max-w-6xl mx-auto my-5">
        <p className="p-5">{props.text}</p>
        <img className="rounded-r-md" src={props.image}/>
    </div>
    )
}