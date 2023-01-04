import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className='footer-center'>
        <p className='footer-tag'>find me in :</p>
        <div className='fline'></div>
        <a
          href='https://www.instagram.com/the_knuckelhead/'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram className='instagram footer-icon' />
        </a>
        <div className='fline'></div>
        <a
          href='https://discord.gg/HeXk3NbgtB'
          target='_blank'
          rel='noreferrer'
        >
          <FaDiscord className='discord footer-icon' />
        </a>
        <div className='fline'></div>
        <div className='fline gitline'></div>
        <a
          href='https://github.com/amdpt323'
          target='_blank'
          rel='noreferrer'
          className='github-tag link'
        >
          @amdpt323
        </a>
        <FaGithub className='github footer-icon'></FaGithub>
      </div>
    </footer>
  )
}
