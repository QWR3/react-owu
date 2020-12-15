import React, {Component} from 'react';
class Post extends Component {
    render() {
        let posts=this.props.posts
        return (
            <div>
                {/*{console.log(posts[0])}*/}
                <h2>{posts[0].id}. {posts[0].title}<br/>{posts[0].body}</h2>
                <h2>{posts[1].id}. {posts[1].title}<br/>{posts[1].body}</h2>
                <h2>{posts[2].id}. {posts[2].title}<br/>{posts[2].body}</h2>
                <h2>{posts[3].id}. {posts[3].title}<br/>{posts[3].body}</h2>
                <h2>{posts[4].id}. {posts[4].title}<br/>{posts[4].body}</h2>
                <h2>{posts[5].id}. {posts[5].title}<br/>{posts[5].body}</h2>
                <h2>{posts[6].id}. {posts[6].title}<br/>{posts[6].body}</h2>
                <h2>{posts[7].id}. {posts[7].title}<br/>{posts[7].body}</h2>
                <h2>{posts[8].id}. {posts[8].title}<br/>{posts[8].body}</h2>
                <h2>{posts[9].id}. {posts[9].title}<br/>{posts[9].body}</h2>
            </div>
        );
    }
}

export default Post;