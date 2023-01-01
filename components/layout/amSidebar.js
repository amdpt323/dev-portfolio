import { BsTerminalFill } from 'react-icons/bs'
import { AiFillBulb, AiFillProject, AiFillFileMarkdown } from 'react-icons/ai'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdMail,
  MdLocalPhone,
} from 'react-icons/md'
  
import { RiFolder3Fill, RiArrowDownSFill } from 'react-icons/ri'

export default function ASidebar({ children }) {
  return (
    <div className='main'>
      <div className='asb'>
        <BsTerminalFill className='asb-icons' />
        <AiFillBulb className='asb-icons bulb' />
        <AiFillProject className='asb-icons' />
      </div>
      <div className='amsb'>
        <div className='flexhscb'>
          <RiArrowDownSFill className='amsb-icons' />
          <p>personal-info</p>
        </div>
        <div className='flexhsb'>
          <MdOutlineKeyboardArrowRight />
          <RiFolder3Fill style={{ color: '#FEA55F', padding: '0 8px 0 4px' }} />
          <p>bio</p>
        </div>
        <div className='flexhsb'>
          <MdOutlineKeyboardArrowRight />
          <RiFolder3Fill style={{ color: '#43D9AD', padding: '0 8px 0 4px' }} />
          <p>interests</p>
        </div>
        <div className='flexhsb'>
          <MdOutlineKeyboardArrowDown />
          <RiFolder3Fill style={{ color: '#4D5BCE', padding: '0 8px 0 4px' }} />
          <p>education</p>
        </div>
        <div className='flexhsb'>
          <AiFillFileMarkdown style={{ padding: '0px 6px 0 20px' }} />
          <p>high-school</p>
        </div>
        <div
          className='flexhsb'
          style={{ borderBottom: '1px solid var(--clr-lines' }}
        >
          <AiFillFileMarkdown style={{ padding: '0px 6px 0 20px' }} />
          <p>university</p>
        </div>
        <div className='flexhscb'>
          <RiArrowDownSFill className='amsb-icons' />
          <p>contacts</p>
        </div>
        <div className='flexhsb'>
          <MdMail style={{ padding: '0px 6px 0 20px' }} />
          <div>
            <p>xdamandeep3</p>
            <p>@gmail.com</p>
          </div>
        </div>
        <div className='flexhsb'>
          <MdLocalPhone style={{ padding: '0px 6px 0 20px' }} />
          <p>7075563909</p>
        </div>
      </div>
      {children}
    </div>
  )
}
