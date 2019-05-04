import React, {Component} from 'react';

class PostBox extends Component {
    render() {
        return (
            <div
                style={{
                borderLeft: '5px solid #d9534f',
                paddingLeft: '15px'
            }}>
                <div class="container">

                    <div class="col-md-12">
                        <h1
                            style={{
                            color: '#d9534f',
                            fontFamily: 'monospace'
                        }}>Welcome!</h1>
                        <p
                            style={{
                            color: '#000000',
                            fontFamily: 'monospace'
                        }}>Hello the blog page is currently a work in progress. Please hold tight 🔜</p>
                        <div>
                            <span
                                style={{
                                    backgroundColor:'#d9534f',
                                fontFamily: 'monospace',
                                borderRadius:'0px',
                                padding:'5px',
                            }}>Posted 2012-08-02 20:47:04</span>
                            <div class="pull-right" style={{
                            paddingTop:'10px'
                        }}>
                                <span
                                    style={{
                                    fontFamily: 'monospace',
                                    color:'white',
                                    padding:'5px',
                                    backgroundColor:'#000000'
                                }}>nothing</span>
                                <span>    </span>
                                <span
                                    style={{
                                    fontFamily: 'monospace',
                                    color:'white',
                                    padding:'5px',
                                    backgroundColor:'#000000'

                                }}>much</span>
                                <span>    </span>
                                <span
                                    style={{
                                    fontFamily: 'monospace',
                                    color:'white',
                                    padding:'5px',
                                    backgroundColor:'#000000'

                                }}>here</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PostBox;