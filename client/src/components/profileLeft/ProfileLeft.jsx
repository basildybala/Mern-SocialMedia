import FollowersCard from '../followersCard/FollowersCard'
import LogoSearch from '../logoSearch/LogoSearch'
import InfoCard from '../infoCard/infoCard'


const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft