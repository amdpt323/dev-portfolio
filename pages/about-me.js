import ASidebar from '../components/layout/amSidebar'
import { RxCross1 } from 'react-icons/rx'

export default function AboutMe() {
  return (
    <>
      <div className='about-me'>
        <div className='am-header'>
          <p>personal-info</p>
          <div
            style={{
              borderRight: '1px solid var(--clr-lines)',
              height: '5.5vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <RxCross1 style={{ height: '1.5vh',padding:'0px 30px 0px 20px'}} />
          </div>
        </div>
      </div>
      <div className='about-me'>lol</div>
    </>
  )
}

AboutMe.getLayout = function getLayout(page) {
  return <ASidebar>{page}</ASidebar>
}
