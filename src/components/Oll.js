import React, {Component} from 'react';
import Informations from "../service/Informations";
import Posts from "../service/Posts";
import Post from "./button/PostInfo/Post";
import Info from "./button/PostInfo/Info";
import UserPosts from "./button/UserPosts";
class Oll extends Component {
    users =new Informations()
    posts =new Posts()
    state ={users:[] ,posts:[],choosenI:null ,p1:null,p2:null,p3:null,p4:null,p5:null,p6:null,p7:null,p8:null,p9:null,p10:null}

    async componentDidMount() {
        let users = await this.users.users()
        let posts =await this.posts.posts()
        this.setState({users})
        this.setState({posts})
    }
    choosenInfo=(id)=>{
        let info =this.state.users
        let find =info.find(value => value.id ===id)
        this.setState({choosenI:find})
    }
    choosenPosts=(id)=>{
        let posts =this.state.posts;
        // console.log(posts)
        let find1=posts.find(value => value.id ===id+'0'-9)
        this.setState({p1:find1})
        let find2=posts.find(value => value.id ===id+'0'-8)
        this.setState({p2:find2})
        let find3=posts.find(value => value.id ===id+'0'-7)
        this.setState({p3:find3})
        let find4=posts.find(value => value.id ===id+'0'-6)
        this.setState({p4:find4})
        let find5=posts.find(value => value.id ===id+'0'-5)
        this.setState({p5:find5})
        let find6=posts.find(value => value.id ===id+'0'-4)
        this.setState({p6:find6})
        let find7=posts.find(value => value.id ===id+'0'-3)
        this.setState({p7:find7})
        let find8=posts.find(value => value.id ===id+'0'-2)
        this.setState({p8:find8})
        let find9=posts.find(value => value.id ===id+'0'-1)
        this.setState({p9:find9})
        let find10=posts.find(value => value.id ===id+'0'-0)
        this.setState({p10:find10})

    }

    render() {
        let {users,choosenI,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10} = this.state

        let posts=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10]

        return (
            <div>
                {
                    users.map((value,index)=>
                        <UserPosts user={value} choosenInfo={this.choosenInfo} choosenPost={this.choosenPosts} key={index}/>
                    )
                }
                {
                    p1&&console.log(posts)
                }
                {
                    choosenI&&<Info info={choosenI}/>
                }
                {
                    p1&&<Post posts={posts}/>
                }
                <h1>users</h1>
            </div>
        );
    }

}

export default Oll;