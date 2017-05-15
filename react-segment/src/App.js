import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: null,
    // };
    this.state = {
      change : 'false',
      clockFace : 'default',
      ajaxTest: 'this is from original state'
    };
  }
  loadDoc(url, cFunction) {
    var self = this;
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        // cFunction(this);
        cFunction(this,self);
        // self.setState({
        //   ajaxTest: 'this is from xhttp changed state'
        // });
        // console.log(self.state.ajaxTest);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  myFunction(xhttp,self) {
      self.setState({
        ajaxTest: 'this is from xhttp changed state - myFunction'
      });
      console.log(self.state.ajaxTest);
      // document.getElementById("ajaxData").innerHTML = xhttp.responseText;
      // var resultTxt = 
      switch(xhttp.responseText) {
          case 'thing from file':
              console.log('chosen thing from file');
              return React.createElement("label", {className: "label"},
                React.createElement("span", {className: "label"}, this.props.label),
                self.props.children
              );
              break;
          default:
          console.log('chosen default');
              // code block
      }
  }
  ajaxController(state){
    console.log('ajaxController()');
    this.setState({
      ajaxTest: 'this is from changed state'
    }, function(){
      console.log(this.state.ajaxTest);
    });
    console.log('from outside callback: '+this.state.ajaxTest);

    this.loadDoc('ajax_info.txt', this.myFunction);

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <script>
        // <button type="button" onClick={this.ajaxController.bind(this)}>Change to True</button>
        // componentState={ this.state.change }
        </script>
        
        <button type="button" onClick={this.ajaxController.bind(this)}>Test AJAX</button>
        <div id="ajaxData"></div>
      </div>
    );
  }
}

export default App;






// updateCurrentThread: function(thread) {
//   this.setState({
//   currentThread: thread
//  }).bind(this);
// },


// render: function () {
//   var threads = this.state.data.map(function (thread) {
//     var boundClick = this.updateCurrentThread.bind(this, i);
//     let time = getThreadDate(thread.timestamp);
//     return (
//       <div className="row thread" key={thread.threadID}>
//         <ThreadParticipants onClick={boundClick} key={i} className="small-2 small-centered columns" ids={thread.participantIDs}/>
//       </div>
//   );
// })


// this is referring to the function scope of the function that is the first parameter to map. Use thread => { } instead of function(){}









// var MyLabel = React.createClass({
//   render: function() {
//     return React.createElement("label", {className: "label"},
//       React.createElement("span", {className: "label"}, this.props.label),
//       this.props.children
//     );
//   }
// });
