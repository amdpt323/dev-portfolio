import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'

export default function footer() {
  return (
    <footer>
      <div className='footer-center'>
        <p className='footer-tag'>find me in :</p>
        <div className='fline'></div>
        <a href='https://www.instagram.com/the_knuckelhead/' target='_blank'>
          <FaInstagram className='instagram footer-icon' />
        </a>
        <div className='fline'></div>
        <a href='https://discord.gg/HeXk3NbgtB' target='_blank'>
          <FaDiscord className='discord footer-icon' />
        </a>
        <div className='fline'></div>
        <div className='fline gitline'></div>
        <a
          href='https://github.com/amdpt323'
          target='_blank'
          className='github-tag link'
        >
          @amdpt323
        </a>
        <FaGithub className='github footer-icon'></FaGithub>
      </div>
    </footer>
  )
}
