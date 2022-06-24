import './ProfileCard.css'
import CoverImg from '../../img/cover.jpg'
import ProfileImg from '../../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className="ProfileImages">
            <img src={CoverImg} alt="" />
            <img src={ProfileImg} alt="" />
        </div>
        <div className="ProfileName">
            <span>Zendaya DJ</span>
            <span>Senio UI/UX Designer</span>
        </div>
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>6,890</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>1</span>
              <span>Followers</span>
            </div>
          </div>
          <hr />
        </div>
        <span>
          MY Profile
        </span>
        
    </div>
  )
}

export default ProfileCard