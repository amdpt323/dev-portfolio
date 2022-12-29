import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'

export default function footer() {
  return (
    <footer>
      <div className='footer-center'>
        <p className='footer-tag'>find me in :</p>
        <div className="fline"></div>
        <FaInstagram className='instagram footer-icon' />
        <div className="fline"></div>
        <FaDiscord className='discord footer-icon' />
        <div className="fline"></div>
        <div className="fline gitline"></div>
        <p className='github-tag'>@amdpt323</p>
        <FaGithub className='github footer-icon'></FaGithub>
      </div>
    </footer>
  )
}
