import './App.css';
import React from 'react';
import List from './List/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  handleAddItem = () => {
    const newValue = document.getElementById('textInput').value;
    if(newValue) {
      document.getElementById('textInput').value = '';
      this.handleSetState(newValue);
    }
   
  }

  handleSetState = (newValue) => {
    this.setState({
      list: [...this.state.list, newValue]
    });
  }

  onDelete(index) {
   this.state.list.splice(index, 1);
    this.setState({
      list: [...this.state.list]  
    })
  }

  render() {
    return <div className='wrapper'>
      <div className='card'> 
      <h3>Todo</h3>
        <input className='item-input' type="text" id="textInput" />
        <button onClick={()=> this.handleAddItem()}>Add Item</button>
      </div>
      <div className='content'>
        <List onDelete={(index)=> this.onDelete(index)} list={this.state.list} />
      </div>
    </div>
  }
}

export default App;
