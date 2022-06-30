import './Auth.css'
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className='Auth '>
        <div className="a-left">
            <img src={Logo} alt="" />
            <div classname="WebName">
                <h1>ABC Social Media</h1>
                <h6>ABC Social Media World Famous App</h6>
            </div>
        </div>
        {/* <SignUp /> */}
        <LogIn />
    </div>
  )
}
function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

// function SignUp (){
//   return (
//     <div className="a-right">
//       <form action="" className='infoForm authForm'>
//         <h3>Sign Up</h3>
//         <div>
//           <input type="text" placeholder='First Name' className='infoInput' name='firstName' />
//           <input type="text" placeholder='Last Name' className='infoInput' name='lastName' />
//         </div>
//         <div>
//         <input type="text" placeholder='User Name' className='infoInput' name='userName' />
//         </div>
//         <div>
//         <input type="text" placeholder='Password' className='infoInput' name='password' />
//         <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmPass' />
//         </div>
//         <div>
//           <span>
//             Already Have an Account Please Login !
//           </span>
//         </div>
//         <button className='button infoButton' type='submit'>Sign Up</button>
//       </form>
//     </div>
//   )
// }
export default Auth