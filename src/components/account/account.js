import React, { Component } from 'react';

class Account extends Component {

    renderContent() {
        return <h1> content </h1>
    }
    
    render() {
        return (
            <div>
                {this.remderContent() }
            </div>
        )
    }
}
export default Account;