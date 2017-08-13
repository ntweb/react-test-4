import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts} from "../actions";

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {

        //console.log(this.prop.posts);

        return (
            <div>
                Post Index
            </div>
        );
    }
}

function mapState(state) {
    return { posts: state.posts }
}

export default connect(mapState, {fetchPosts})(PostIndex);