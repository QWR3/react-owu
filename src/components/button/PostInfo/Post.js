import React, {Component} from 'react';
class Post extends Component {
    render() {
        let posts=this.props.posts
        return (
            <div>
                {/*{console.log(posts[0])}*/}
                <h2>id-{posts[0].id}<br/>title-{posts[0].title}<br/>body-{posts[0].body}</h2>
                <h2>id-{posts[1].id}<br/>title-{posts[1].title}<br/>body-{posts[1].body}</h2>
                <h2>id-{posts[2].id}<br/>title-{posts[2].title}<br/>body-{posts[2].body}</h2>
                <h2>id-{posts[3].id}<br/>title-{posts[3].title}<br/>body-{posts[3].body}</h2>
                <h2>id-{posts[4].id}<br/>title-{posts[4].title}<br/>body-{posts[4].body}</h2>
                <h2>id-{posts[5].id}<br/>title-{posts[5].title}<br/>body-{posts[5].body}</h2>
                <h2>id-{posts[6].id}<br/>title-{posts[6].title}<br/>body-{posts[6].body}</h2>
                <h2>id-{posts[7].id}<br/>title-{posts[7].title}<br/>body-{posts[7].body}</h2>
                <h2>id-{posts[8].id}<br/>title-{posts[8].title}<br/>body-{posts[8].body}</h2>
                <h2>id-{posts[9].id}<br/>title-{posts[9].title}<br/>body-{posts[9].body}</h2>
            </div>
        );
    }
}

export default Post;