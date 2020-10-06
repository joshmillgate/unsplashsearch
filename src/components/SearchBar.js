import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        // When the form is submitted run the onSearch function passed in via props in parent element
        // In App.js we pass <SearcBar onSearch={this.onSearchSubmit}/>
        // onSearchSubmit is a function within App
        this.props.onSearch(this.state.searchTerm)
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Search for an Image</label>
                        <input
                            type='text'
                            value={this.state.searchTerm}
                            onChange={(e) => this.setState({ searchTerm: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}
