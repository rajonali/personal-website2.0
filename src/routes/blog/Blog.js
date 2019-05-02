import React, { Component } from 'react';
import PostBox from '../../components/blog/PostBox';

class Blog extends Component {
    render() {
        return (
            <div style={{textAlign:"left"}}>
            <br />
            <PostBox />
            </div>
        );
    }
}

export default Blog;