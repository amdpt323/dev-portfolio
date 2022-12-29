import ASidebar from "../components/layout/amSidebar"

export default function AboutMe() {
  return <p>About me</p>
}

AboutMe.getLayout = function getLayout(page){
  return(
    <ASidebar>
      {page}
    </ASidebar>
  )
}

