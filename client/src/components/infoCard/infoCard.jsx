import './InfoCard.css'
import { UilPen } from "@iconscout/react-unicons";
const infoCard = () => {
  return (
    <div className='InfoCard'>
        <div className="infoHead">
          <h4>Your Info</h4>
          <div>

          <UilPen />
          </div>
        </div>
        <div className="info">
          <span><b>Status </b></span>
          <span>in Relation Ship</span>
        </div>
        <div className="info">
          <span><b>Lives in </b></span>
          <span>India</span>
        </div>
        <div className="info">
          <span><b>Works </b></span>
          <span>Office</span>
        </div>
        <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default infoCard