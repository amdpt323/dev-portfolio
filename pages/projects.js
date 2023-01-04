import Lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import PSidebar from '../components/layout/pSidebar'

export default function Projects() {
  const container = useRef(null)
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/data.json'),
    })
    return () => {Lottie.destroy()}
  }, [])
  return (
    <>
      <div ref={container} className='svg'>p</div>
    </>
  )
}

Projects.getLayout = function getLayout(page) {
  return <PSidebar>{page}</PSidebar>
}
