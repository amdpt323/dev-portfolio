import ASidebar from '../components/layout/amSidebar'
import { RxCross1 } from 'react-icons/rx'
import { CgLoadbarAlt } from 'react-icons/cg'

const aboutme = [
  {
    data: '/**',
  },
  {
    data: '* About me',
  },
  {
    data: '* I have 5 years of experience in web',
  },
  {
    data: '* development lorem ipsum dolor sit amet,',
  },
  {
    data: '* consectetur adipiscing elit, sed do eiusmod',
  },
  {
    data: '* tempor incididunt ut labore et dolore',
  },
  {
    data: '* magna aliqua. Ut enim ad minim veniam,',
  },
  {
    data: '* quis nostrud exercitation ullamco laboris',
  },
  {
    data: '* nisi ut aliquip ex ea commodo consequat.',
  },
  {
    data: '* Duis aute irure dolor in reprehenderit in',
  },
  {
    data: '*',
  },
  {
    data: '* Duis aute irure dolor in reprehenderit in',
  },
  {
    data: '* voluptate velit esse cillum dolore eu fugiat',
  },
  {
    data: '* nulla pariatur. Excepteur sint occaecat',
  },
  {
    data: '* nulla pariatur. Excepteur sint occaecat',
  },
  {
    data: '*/',
  },
]

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
            <RxCross1
              style={{ height: '1.5vh', padding: '0px 30px 0px 20px' }}
            />
          </div>
        </div>
        <div className='text-container'>
          <div className='sl-no'>
            {aboutme.map((item, index) => {
              return <p key={index}>{index + 1}</p>
            })}
          </div>
          <div className='text'>
            {aboutme.map((item, index) => {
              return <p key={index}>{item.data}</p>
            })}
          </div>
          <div className='am-scroll'>
            <CgLoadbarAlt style={{ width: '22px', height: '30px' }} />
          </div>
        </div>
      </div>
      <div className='about-me'>
        <div className="am-header" style={{paddingLeft:'2px'}}></div>
      </div>
    </>
  )
}

AboutMe.getLayout = function getLayout(page) {
  return <ASidebar>{page}</ASidebar>
}
