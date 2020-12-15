import React, {Component} from 'react';
class Info extends Component {
    render() {
        let {info}=this.props
        return (
            <div>
                <h2>email-{info.email}<br/>phone-{info.phone}<br/>website-{info.website}</h2>
            </div>
        );
    }
}

export default Info;