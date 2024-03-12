import { Interface } from "readline";

type ItemProps = {
    icon: JSX.Element;
    label: string;
}
export default function GridItem(props:ItemProps){
    return(
        <div className="content-center">
        {props.icon}
        <p className="">{props.label}</p>
        </div>
    )
}