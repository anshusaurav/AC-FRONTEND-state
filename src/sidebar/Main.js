import React from 'react'

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {tabSelected: 'Home', sideBarHidden: true}
  }
  selectHome = () => {
    this.setState(state => ({tabSelected: 'Home'}))
  }
  selectContact = () => {
    this.setState(state => ({tabSelected: 'Contact'}))
  }
  selectAbout = () => {
    this.setState(state => ({tabSelected: 'About'}))
  }
  toggleButtons = () => {
    this.setState(state => ({
      sideBarHidden: !this.state.sideBarHidden,
    }))
  }

  render () {
    return (
      <>
        <div className={'sidebarCont'}>
          <div
            className={this.state.sideBarHidden? 'sideFrame visible-buttons':'sideFrameMerged hidden-buttons'}
          >
            <button onClick={this.selectHome}>Home</button>
            <button onClick={this.selectContact}>
              Contact
            </button>
            <button onClick={this.selectAbout}>About</button>
          </div>
          <div className={'mainFrame'}>
            <p className='mainText textCenter'>
              {this.state.tabSelected === 'Home'
                ? 'This is Home'
                : this.state.tabSelected === 'Contact'
                ? 'This is Contact'
                : 'This is About'}
            </p>
          </div>
          <button className='switchBtn' onClick={this.toggleButtons}>
            {this.state.sideBarHidden ? 'Hide' : 'Show'}
          </button>
        </div>
      </>
    )
  }
}
export default SideBar
