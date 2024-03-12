import { FaTree } from "react-icons/fa";
import GridItem from "./GridItem";
export default function IconsGrid(){
    return(
    <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto py-5">
        <GridItem icon={<FaTree size={70} />} label="strom"/>
        <GridItem icon={<FaTree size={70} />} label="strom"/>
        <GridItem icon={<FaTree size={70} />} label="strom"/>
        <GridItem icon={<FaTree size={70} />} label="strom"/>
        <GridItem icon={<FaTree size={70} />} label="strom"/>
        <GridItem icon={<FaTree size={70} />} label="strom"/>
        <GridItem icon={<FaTree size={70} />} label="strom"/>
        <GridItem icon={<FaTree size={70} />} label="strom"/>
    </div>
    )
}