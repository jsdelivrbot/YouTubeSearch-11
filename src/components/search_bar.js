import React from 'react';

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = {term: ''}
    }
    render(){
        return (
            <div className="search-bar">
                <input value={this.state.term} placeholder="search something" type="text" onChange = {event => this.onVideoSearch(event.target.value)}/>
            </div>
        );
    }
    onVideoSearch(term){
        this.setState({term: this.term})
        this.props.onSearchTerm(term);
    }
}

export default SearchBar;
