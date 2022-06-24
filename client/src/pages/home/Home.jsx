import PostSide from '../../components/postSide/PostSide'
import Profile from '../../components/profileSide/Profile'
import RightSide from '../../components/rightSide/RightSide'
import './home.css'

const Home = () => {
  return (
    <div className='Home'>
        <Profile />
        <PostSide/>
        <RightSide />

    </div>
  )
}

export default Home