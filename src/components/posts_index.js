import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts} from "../actions";

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {

        return _.map(this.props.posts, post => {
            return (
                <li key={post.id} className="list-group-item">Title: {post.title}</li>
            );
        });
    }

    render() {

        return (
            <div>
                <h3>Post</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapState(state) {
    return { posts: state.posts }
}

export default connect(mapState, {fetchPosts})(PostIndex);