import Layout from '../components/Layout';
import PostLink from '../components/PostLinks';

const Index = ({posts}) => {
   //console.log(posts);

    return (
    <Layout>
        Hello world. home page l;akj;lskj;fkaf
        <ul>
            {posts.map((item, i) => (
                <PostLink id={item} />
               ) )} 
        </ul>
    </Layout>
    )
}

Index.getInitialProps = async (context) => {
    //console.log(context);
    return {
        posts: ['John', 'Jim', 'Jerry', 'Joseph', 'Jimmy']
    }
}

export default Index;