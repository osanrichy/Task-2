import React from 'react'
import './feeds.css'
import AddIcon from '@mui/icons-material/Add';

function Feeds() {
  return (
    <div className='feeds'>
      <div className="feedsWrapper">
        <div className="feed">
          <div className="leftFeed">
            <h1>Make your party fun!</h1>
            <p>Create your own custom playlist today.</p>
            <button className='btn0'>Create playlist</button>
          </div>
          <div className="rightFeed">
            <h3>Trending songs</h3>
            <div className="collectionFeeds">
              <div className="collectionFeed">
                <h4>Unavailable by Davido</h4>
                <AddIcon className='icon'/>
              </div>
              <div className="collectionFeed">
                <h4>Unavailable by Davido</h4>
                <AddIcon className='icon'/>
              </div>
              <div className="collectionFeed">
                <h4>Unavailable by Davido</h4>
                <AddIcon className='icon'/>
              </div>
              <div className="collectionFeed">
                <h4>Unavailable by Davido</h4>
                <AddIcon className='icon'/>
              </div>
              <div className="collectionFeed">
                <h4>Unavailable by Davido</h4>
                <AddIcon className='icon'/>
              </div>
            </div>
            <button className='btn_1'>View more</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Feeds