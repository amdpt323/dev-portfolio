import CSidebar from "../components/layout/cSidebar"

export default function ContactMe (){
 return(
  <p>contact me</p>
 )
}

ContactMe.getLayout = function getLayout(page){
 return(
  <CSidebar>{page}</CSidebar>
 )
}