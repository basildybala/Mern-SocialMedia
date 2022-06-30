import './Auth.css'
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className='Auth'>
        <div className="a-left">
            <img src={Logo} alt="" />
            <div classname="WebName">
                <h1>ABC Social Media</h1>
                <h6>ABC Social Media World Famous App</h6>
            </div>
        </div>
    </div>
  )
}

export default Auth