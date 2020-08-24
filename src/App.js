import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import { render } from '@testing-library/react';
import Scroll from './Scroll';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange =(event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots =this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f1 lh-title bg-red background-size: cover bb shadow-5 grow'>Stallone's Legacy</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }}
    export default App;