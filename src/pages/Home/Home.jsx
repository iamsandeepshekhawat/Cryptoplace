import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
     <div className="hero">
       <h1>Largest <br/> Crypto marketplace</h1>
       <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
       <form>
        <input type="text" placeholder='Search crypto..' />
        <button type="submit"></button>

       </form>

      </div>
    </div>
  )
}

export default Home