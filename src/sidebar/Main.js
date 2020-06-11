import React from 'react'

class SideBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {tabSelected: 'Home', sideBarHidden:false}
  }
  selectHome = () =>{
    this.setState(state =>({tabSelected: 'Home'}));
  }
  selectContact = () =>{
    this.setState(state =>({tabSelected: 'Contact'}));
  }
  selectAbout = () =>{
    this.setState(state =>({tabSelected: 'About'}));
  }
  toggleButtons = () =>{
    this.setState(state =>({sideBarHidden: !this.state.sideBarHidden}));
  }

  render(){
    return (
        <>
        <div className={this.state.sideBarHidden?'visible-buttons':'hidden-buttons'} >
          <button onClick={this.selectHome}>Home</button>
          <button onClick={this.selectContact}>Contact</button>
          <button onClick={this.selectAbout}>About</button>          
        </div>
          <p>{this.state.tabSelected==='Home'?'This is Home':this.state.tabSelected==='Contact'?'This is Contact':'This is About' }</p>
          <button onClick={this.toggleButtons}>{this.state.sideBarHidden?'Show':'Hide'}</button>
        </>

    );
  }
}
export default SideBar;