import Foooter from './footer'
import Navbar from './navbar'

export default function Layout({children}){
 return (
   <>
     <Navbar />
     {children}
     <Foooter />
   </>
 )
}