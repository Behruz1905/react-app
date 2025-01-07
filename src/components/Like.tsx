import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
    const [status, setStatus] = useState(true);
    const toggle = () => {
        setStatus(!status);
        onClick();
    }
    if(status) {
        return (
            <FaHeart color="#ff6b81" size={20}  onClick={toggle}/>
        )
    }

    return <IoIosHeartEmpty  size={20}  onClick={toggle}/>

    
}



export default Like;