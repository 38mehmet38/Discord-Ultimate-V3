import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setLanguage } from '../reducers/languageReducer.jsx'
import { setScene } from '../reducers/sceneReducer.jsx'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      language: 'tr',
      scene: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleLanguageChange = this.handleLanguageChange.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.setLanguage(this.state.language || 'tr')
    this.props.setScene(e.target.name)
  }

  handleLanguageChange(e) {
    this.setState({ language: e.target.value })
  }

  render() {
    return (
      <div className="home-container">
        <div className="above-fold">
          <h1 style={{color: 'white', fontWeight: 'bold'}}>ULTIMATE VR CHAT</h1>
          <h3>Sanal bir deneyime girmek üzeresiniz.<br />
          Konuşmalarınız anında tercüme edilecek ve evren size tepki verecek.</h3>
          
          <br /><br />

          <div className="form">
            <label className="control-label" style={{color: 'white'}}>Dil Seçiniz:</label>
            <select className="form-control" id="select" value={this.state.language} onChange={this.handleLanguageChange}>
              <option value='tr'>Türkçe</option>
              <option value='en'>English</option>
              <option value='es'>Spanish</option>
              <option value='de'>German</option>
              <option value='fr'>French</option>
              <option value='it'>Italian</option>
              <option value='ru'>Russian</option>
            </select>
          </div>

          <br /><br />

          <div id="enter-space">
            <div className="button-container">
              <div className="space-btn">
                <button className="btn btn-default" onClick={this.handleClick}><Link to="/room" name="bubbles">KÖPÜK DÜNYASI</Link></button>
                <button className="btn btn-default" onClick={this.handleClick}><Link to="/room" name="knots" >PLAZMA ODASI</Link></button>
              </div>
              <div className="space-btn">
                <button className="btn btn-default" onClick={this.handleClick}><Link to="/room" name="space">KOZMOS EVRENİ</Link></button>
                <button className="btn btn-default" onClick={this.handleClick} ><Link to="/room" name="cubes">UFO BÖLGESİ</Link></button>
              </div>
            </div>
          </div>
        </div>

        <div id="instructions" className="container" style={{marginTop: '50px'}}>
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <h3 className="instructions-header">Deneyimle</h3>
              <p className="instructions-p">Dört farklı sanal dünyadan birini seçin ve benzersiz bir atmosferde bulunun.</p>
            </div>
            <div className="col-md-4 col-xs-12">
              <h3 className="instructions-header">Konuş</h3>
              <p className="instructions-p">Söyledikleriniz 12 farklı dile anında çevrilsin.</p>
            </div>
            <div className="col-md-4 col-xs-12">
              <h3 className="instructions-header">Hisset</h3>
              <p className="instructions-p">Sanal alan, konuşmanızın tonuna ve duygusuna göre şekil değiştirsin.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { setLanguage, setScene })(Home)