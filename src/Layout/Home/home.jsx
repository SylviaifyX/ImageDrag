import List from "../List/list";
import Navbar from "../../Component/Navbar/nav"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from 'react';
function Home(){
    useEffect(() =>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
                const uid = user.id
                console.log("this is logged user", uid)
            }else{
                console.log("user is signed out")
            }
        },[])
    })
    
    return(
       <>
       <Navbar/>
       <List/> 
       </>
    )
}
export default Home;