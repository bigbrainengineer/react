import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    contacts() {
      return [
          {
              id : 1,
              name : 'dave',
              number : '094-094-384',
              image : 'https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg'
          },
          {
              id : 2,
              name : 'elya',
              number: '094-094-094',
              image: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=940&h=650&auto=compress&cs=tinysrgb'
          },
          {
              id : 3,
              name : 'anush',
              number : '094-868-020',
              image : 'https://static.pexels.com/photos/26750/pexels-photo-26750.jpg'
          }
      ];
    }
    search(event) {
        var searchQuery = event.target.value.toLowerCase();
        var  displayedContacts = this.contacts().filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({displayedContacts: displayedContacts});
    }
    getInitialState() {
        return {displayedContacts: this.contacts()};
    }
    render() {
        function Contact(props) {
            return (
                <li>
                    <div>{props.name}</div>
                    <div>{props.number}</div>
                    <img src={props.image} width="60px" height="60px"></img>
                </li>
            );
        }
        
        return (
            <div>
                <ul>
                    <input type="text" onChange ={this.search.bind(this)} />
                    {
                        this.state.displayedContacts.map(function(el, index) {
                            return <Contact 
                                key={el.id} 
                                name={el.name} 
                                number={el.number}
                                image={el.image}
                            />
                        })
                    }
                </ul>
            </div>
        );
    }
}


export default App;