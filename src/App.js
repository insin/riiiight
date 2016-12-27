import {h, Component} from 'preact'

class Square extends Component {
  state = {
    hidden: true,
  }
  handleClick = () => {
    this.setState({
      hidden: false,
    })
  }
  render({index}, {hidden}) {
    return <div class={{cell: true, reveal: !hidden}} onClick={this.handleClick}/>
  }
}

class App extends Component {
  render() {
    let match = /image=(.+)/.exec(window.location.search)
    let style = {}
    if (match) {
      style.backgroundImage = `url(${match[1]})`
    }
    return <div class="container" style={style}>
      <div class="row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div class="row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div class="row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  }
}

export default App
