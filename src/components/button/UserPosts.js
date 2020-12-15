import React, {Component} from 'react';


class UserPosts extends Component {
    render() {
        let {user ,choosenInfo,choosenPost}=this.props
        return (

            <div>
                <h2>{user.id}-{user.name}</h2>
                <button onClick={()=>choosenInfo(user.id)}>детально</button>
                <button onClick={()=>choosenPost(user.id)}>пости</button>

            </div>

        );
    }
}

export default UserPosts;