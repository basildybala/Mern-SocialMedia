import PostSide from '../../components/postSide/PostSide'
import Profile from '../../components/profileSide/Profile'
import './home.css'

const Home = () => {
  return (
    <div className='Home'>
        <Profile />
        <PostSide/>
        <div className="RightSide">R</div>

    </div>
  )
}

export default Home