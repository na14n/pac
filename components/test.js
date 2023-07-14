
import { client } from '@/lib/apollo';
import { gql } from 'graphql-tag';

async function getPosts() {
    try {
        const result = await client.query({
            query: gql`
        query GetPosts {
          posts {
            nodes {
              date
              title
              content
            }
          }
        }
      `,
        });
        return result.data.posts.nodes;
    } catch (error) {
        console.error('Error occurred:', error);
        return [];
    }
}

let posts = await getPosts();
// console.log(posts);

export default function MyComponent() {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div>
                {posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>{post.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
