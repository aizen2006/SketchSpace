// Icons
import { PiCursorFill } from "react-icons/pi";
import { FaRegSquare , FaLongArrowAltRight } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { VscSymbolParameter } from "react-icons/vsc";

//Component imports
import { TooltipButton } from './TooltipButton'



export default function Toolbar() {
  return (
    <div className='mx-auto flex max-w-md max-h-18 items-center justify-center gap-x-4 rounded-2xl bg-blue-800 px-6 py-4'>
        <TooltipButton note='Select' ><PiCursorFill /></TooltipButton> 
        <TooltipButton note='Draw' ><FaPen /></TooltipButton> 
        <TooltipButton note='Draw' ><VscSymbolParameter /></TooltipButton> 
        <TooltipButton note='Arrow' ><FaLongArrowAltRight /></TooltipButton> 
        <TooltipButton note='Shape' ><FaRegSquare /></TooltipButton>  
        
    </div>
  )
}
