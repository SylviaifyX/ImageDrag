
// import { signup, useAuth, logout, login } from "./../../firebase"
import { useRef, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase"


function Login() {
    // const [load, setLoad] = useState(false)
    const [currenUser, setCurrentUser] = useState(null)
    // const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();

    // async function handleSignup() {
    //     // setLoad(true);
    //     try {
    //         await signup(emailRef.current.value, passwordRef.current.value)
    //     } catch {
    //         alert("error")
    //     }
    //     // setLoad(false)
    // }
    // async function handleLogOut() {
    //     // setLoad(true);
    //     try {
    //         await logout();

    //     } catch {
    //         alert("passerror")
    //     }
    //     // setLoad(false)
    // 

    async function signIn(e) {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(userCredential =>{
            setCurrentUser(userCredential.user)


            
        }).catch(err =>{const errcode = err.errcode 
            const errMessage = err.errMessage
        })
    }
    return (

        <section className=" w-full min-h-screen flex items-center justify-center p-[10px ]">
            <div className=" w-full max-w-[600px] min-h-[50vh] py-[20px] px-[20px] bg-blue-300 flex flex-col gap-[7px] ">
                <label className="font-bold">UserName.</label>
                <input ref={emailRef} type="text" className="ring-1 outline-none rounded p-[10px]" placeholder="email"></input>
                {/* <span>logged as: {currentUser?.email}</span> */}

                <p></p>
                <label className="font-bold">Password.</label>
                <input ref={passwordRef} type="password" className="ring-1 outline-none rounded p-[10px]" placeholder="password"></input>
                <div className="flex  m-auto w-full gap-[30px] align-center justify-center">
                    <button onClick={signIn} className="bg-blue-500 p-[10px] text-white text-[18px] font-bold cursor-pointer rounded">login</button>
                </div>

                <p>Already have an account? signin</p>

            </div>
        </section>
    )
}
    export default Login;