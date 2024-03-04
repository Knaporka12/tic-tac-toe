import { TbLetterX } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";

const GameTableCell = ({value, id, playGame}) => {

    const handleClick = (id) => {
        playGame(id);
    }

    return (
    <td className = 'main__td' onClick={() => {handleClick(id)}}>
        {value === 'X' ? <TbLetterX></TbLetterX> :  value === 'O' ? <FaRegCircle></FaRegCircle> : value}
    </td>
    )
}

export default GameTableCell
