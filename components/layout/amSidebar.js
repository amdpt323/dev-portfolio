import { BsTerminalFill } from 'react-icons/bs'
import{AiFillBulb, AiFillProject} from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function ASidebar({ children }) {
  return (
    <div className='main'>
      <div className='asb'>
        <BsTerminalFill className='asb-icons' />
        <AiFillBulb className='asb-icons bulb' />
        <AiFillProject className='asb-icons' />
      </div>
      <div className='amsb'>
        <div className='flexhsb'>
          <MdKeyboardArrowDown className='amsb-icons'/>
          <p>personal-info</p>
        </div>
      </div>
      {children}
    </div>
  )
}
