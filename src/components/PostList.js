import Post from './Post'

const PostList = ({ posts, user }) => {
  return posts.map((post, index) => (<Post currentUser={user} key={index} {...post} />))
}

export default PostList