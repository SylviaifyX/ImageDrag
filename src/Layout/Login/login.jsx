
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error during sign in:",errorCode, errorMessage);
      });
  };

  return (
    <section className=" w-full min-h-screen flex items-center justify-center p-[10px] ">
      <form onSubmit={onLogin} className=" w-full max-w-[600px] min-h-[50vh] py-[20px] px-[20px] bg-blue-300 flex flex-col gap-[7px] rounded-md ">
        <label className="font-bold">UserName.</label>
        <input
        //   ref={emailRef}
          type="email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
          className="ring-1 outline-none rounded p-[10px]"
          placeholder="email"
          required
        ></input>
        {/* <span>logged as: {currentUser?.email}</span> */}

        <p></p>
        <label className="font-bold">Password.</label>
        <input
        //   ref={passwordRef}
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          className="ring-1 outline-none rounded p-[10px]"
          placeholder="password"
          required
        ></input>
        <div className="flex  m-auto w-full gap-[30px] align-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 p-[10px] pl-[25px] pr-[25px] text-white text-[18px] font-bold cursor-pointer rounded"
          >
            Login
          </button>
        </div>

        <p>
          Don't have an account?{" "}
          <Link to="/signin" className="text-red-800 font-bold">
            SignUp
          </Link>
        </p>
      </form>
    </section>
  );
}
export default Login;
