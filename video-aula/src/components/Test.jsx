import React from "react"

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Opaa"
        }
    }
    render() {
        return <h1>{this.state.message}</h1>
    }
}