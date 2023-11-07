import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenText } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

export default function BookModal(props) {
  const book = props.book,
    onClose = props.onClose;
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose }
    >
      BookModal
    </div>
  );
}
