import React, {Component} from 'react'

export class Home extends Component{
  componentWillMount(){
    document.body.style.backgroundImage = 'url("./assets/backgrounds/ScreenShot0113.jpg")'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
  }
  componentWillUnmount(){
    document.body.style.backgroundImage = ''
    document.body.style.backgroundRepeat = ''
    document.body.style.backgroundSize = ''
    document.body.style.backgroundPosition = ''
  }
  render(){
      return(
        <div className="d-flex" style={{
          height: '100vh'
        }}>
          <div className="align-self-center" style={{width: '100vw'}}>
                  <div className="text-center" style={{ fontFamily: 'Orbitron', color: 'white'}}>
                    Armitage Mobile Militia Offensive
                  </div>
                  <div className="text-center display-1" style={{ fontSize: '5rem', fontFamily: 'Orbitron', marginBottom: '0%', color: '#F59B45'}}>
                    <b> A . M . M . O . </b>
                  </div>
                  <div className="text-center text-muted" style={{ fontFamily: 'Offside', color: 'white'}}>
                    <small>ex oblivione, unitas</small>
                  </div>
          </div>
          <br/>
          <div className="fixed-bottom text-center" style={{color: 'white', fontFamily: 'Orbitron', width: '100vw'}}>Join our discord
            <a style={{color: '#F59B45', paddingLeft: '5px', paddingRight: '5px'}} className="nav-text" href="https://discord.gg/pgJs3u6">
              here
            </a>
            or our RSI page at
            <a style={{color: '#F59B45', paddingLeft: '5px'}} className="nav-text" href="https://robertsspaceindustries.com/orgs/AMMO">
             {'https://robertsspaceindustries.com/orgs/AMMO'}
            </a>
            <div className="text-muted" style={{fontSize: '0.75rem'}}>This site is not endorsed by or affiliated with the Cloud Imperium or Roberts Space Industries group of companies. All game content and materials are copyright Cloud Imperium Rights LLC and Cloud Imperium Rights Ltd.. Star Citizen®, Squadron 42®, Roberts Space Industries®, and Cloud Imperium® are registered trademarks of Cloud Imperium Rights LLC. All rights reserved.</div>
          </div>
        </div>
      )
  }
}

export default Home