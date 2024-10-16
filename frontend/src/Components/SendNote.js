import React from 'react'

function SendNote() {
  return (
    <div className='SendNote'>
      <div className='stretch'>
        <div className='left-stretch'>
          <img src='stretch-img.jpeg' className='stretch-image' alt='stretch-image'></img>
          <div className='quote'>
           <p className='verse'>"Whatever you do, work heartily, as for the Lord and not for men"</p>
          <p className='book'>- Colossians 3:34</p></div>
         
        </div>
        <div className='right-stretch'>
          <h1> Send Encouragement</h1>
          <p className='right-stretch-subtext'>words of encouragement go a long way</p>
          <form className='form'>
          <input className='name' placeholder='Enter your name'></input>
          <input className='textbox' placeholder='Enter your message'></input>
          <button className='send-button'>Send</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default SendNote