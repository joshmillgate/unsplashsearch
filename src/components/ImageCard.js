import React, { Component } from 'react'

export default class ImageCard extends Component {
    // We define constructor and super because we are creating an Ref.
    constructor(props) {
        super(props)

        this.state = {
            spans: 0
        }

        // Create an imageRef so we can access all the images in our render method.
        this.imageRef = React.createRef()
    }

    // When the component mounts, check to see when all our imageRef's load and then run setSpans
    // We use an event listener because the imageRef data is only accessible one images have loaded
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    // Will run once images have loaded. It's an arrow function so that 'this' is bound.
    setSpans = () => {
        // Define the CSS grid spacing and element height
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)

        this.setState({
            spans
        })
    }

    render() {
        // destructure the data from image to make our calls shorter.
        const { description, urls } = this.props.image

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        )
    }
}
