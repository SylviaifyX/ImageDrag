import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Layout/Home/home"
import Login from "./Layout/Login/login"
import SignIn from "./Layout/SignIn/signIn"
// import Login from "./Layout/Login/login";
// import {useState , useEffect} from "react"
// import { onAuthStateChanged } from "firebase/auth";
// import {auth} from "./firebase"

function App() {
  // const [showUser, setShowUser] = useState(null)

  // useEffect(() =>{
  //    function checkAuthState(){
  //      onAuthStateChanged(auth, (user) => {
  //        if(user){setShowUser(user)
  //       }else{
  //         setShowUser(null)
  //       }
  //      })
  //    }
  //    checkAuthState();
  // },[])
 
  // console.log(showUser)
  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/signin" element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
    // <div>

    //    {showUser ? (
    //        <Home />
    //   ):(
    //     <Login />
    //   )} 
    // </div>
  )

}
export default App
