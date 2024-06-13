import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <section className=" w-full min-h-screen flex items-center justify-center p-[10px]">
      <form onClick={onSubmit} className=" w-full max-w-[600px] min-h-[50vh] py-[20px] px-[20px] bg-blue-300 flex flex-col gap-[7px] ">
        <label className="font-bold">UserName.</label>
        <input
          //   ref={emailRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="ring-1 outline-none rounded p-[10px]"
          placeholder="email"
        ></input>

        <p></p>
        <label className="font-bold">Password.</label>
        <input
          //   ref={passwordRef}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="ring-1 outline-none rounded p-[10px]"
          placeholder="password"
        ></input>
        <div className="flex  m-auto w-full gap-[30px] align-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 p-[10px] text-white text-[18px] font-bold cursor-pointer rounded"
          >
            SignUp
          </button>
        </div>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-red-800 font-bold">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}

export default SignIn;
