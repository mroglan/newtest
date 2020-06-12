
const Post = ({post}) => {
    
    return (
        <div>{post}</div>
    )
}

Post.getInitialProps = async (context) => {

    return {
        post: context.query.id
    }
}

export default Post;