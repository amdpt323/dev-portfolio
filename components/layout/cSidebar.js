import { RiArrowDownSFill } from 'react-icons/ri'
import { MdMail, MdLocalPhone } from 'react-icons/md'

export default function CSidebar({ children }) {
  return (
    <div className='main'>
      <div className='cm-sidebar'>
        <div className='flexhscb' style={{ width: '15vw' }}>
          <RiArrowDownSFill className='amsb-icons' />
          <p>contacts</p>
        </div>
        <div className='flexhsbal'>
          <MdMail style={{ padding: '0px 6px 0 20px' }} />
          <div>
            <p>xdamandeep3</p>
            <p>@gmail.com</p>
          </div>
        </div>
        <div className='flexhsbal'>
          <MdLocalPhone style={{ padding: '0px 6px 0 20px' }} />
          <p>7075563909</p>
        </div>
      </div>
      {children}
    </div>
  )
}
