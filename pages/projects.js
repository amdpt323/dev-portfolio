import PSidebar from '../components/layout/pSidebar'


export default function Projects() {
  return (
    <p>projects</p>
  )
}

Projects.getLayout = function getLayout(page){
  return(
    <PSidebar>
      {page}
    </PSidebar>
  )
}


