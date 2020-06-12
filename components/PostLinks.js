import Link from 'next/Link';

const PostLink = (props) => {
    return (
        <li>
            <Link href={`/post/?id=${props.id}`}>
                <a>{props.id}</a>
            </Link>
        </li>
    )
}

export default PostLink;