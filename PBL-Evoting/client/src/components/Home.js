import '../css/home.css'

const Home = () => {
  return (
    <div className='rdiv'>
      <section>
      <button className="rbutton"><a className="login" href="/login">Login</a></button> 
      </section>
       <section>
       <button className="rbutton" ><a className="signup" href="/signup">Signup</a></button> 
       </section>  
    </div>
  )
}

export default Home
