import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

export default class App extends Component {
    state = {
        images: []
    }

    // Asyncronous function so that it waits for request the be complete 
    // Using an arrow so that 'this' is bound
    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm }
        })

        this.setState({
            images: response.data.results
        })
    }

    render() {
        // Passing in the above method into SearchBar we pass the callback using props
        // Also passing in the results from the axios get request to the Image list using props
        return (
            <div className='ui container' style={{ marginTop: '20px' }}>
                <SearchBar onSearch={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}