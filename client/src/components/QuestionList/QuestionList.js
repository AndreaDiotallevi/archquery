import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <ul>
        {this.props.posts.map((post) => (
          <li key={post._id}>
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts),
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
