import ReactPlayer from 'react-player/youtube'
type CardProps = {
    url: string;
    text: string;
}
export default function VideoCard(props: CardProps) {
    return (
        <div className="flex md:flex-row flex-col rounded-md max-w-6xl mx-auto my-5">
            <p className="p-5">
                {props.text}
            </p>
            <div className="rounded-md bg-violet-300">
                <ReactPlayer url={props.url} className="m-10"/>
            </div>
        </div>
    )
}