
import { Navbar } from './components/Navbar';
import Users from './components/Users';
import axios from 'axios'
import { Component } from 'react';
import Search from './components/Search';
import AlertMessage from './components/AlertMessage';
class App extends Component {
  constructor(props) {
    super(props)
    this.searchUser=this.searchUser.bind(this)
    this.clearUsers=this.clearUsers.bind(this)
    this.setAlert=this.setAlert.bind(this)
    this.state = {
      loading: false,
      users: [],
      alert: null
    }
  }
  componentDidMount() {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      axios.get('https://api.github.com/users')
        .then(res => this.setState({ users: res.data, loading: false }))
    }, 1000)
  }
  searchUser(keyword) {
    this.setState({
      loading: true
    })
    setTimeout(() => {
     //api : https://api.github.com/search/users?q=begumm 
      axios.get(`https://api.github.com/search/users?q=${keyword}`)
        .then(res => this.setState({users:res.data.items , loading:false}))
    })
  }
  clearUsers() {
    this.setState({
      users: []
    })
  }

  setAlert(msg,type) {
    this.setState({
      alert: {msg,type}  //dışarıdan tanımlanan obje ismi direk property adına da denk geliyor.
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <AlertMessage alert={this.state.alert}/>
        <Search searchUser= {this.searchUser} clearUsers={this.clearUsers} 
          showClearButton={this.state.users.length > 0? true:false} 
          setAlert={this.setAlert} />
        <Users users={this.state.users} loading={this.state.loading} />
    
      </div>
    );
  }

}

export default App;
