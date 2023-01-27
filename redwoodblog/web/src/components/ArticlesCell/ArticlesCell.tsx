import Article from 'src/components/Article'
import ArticlesCell from '.'
export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    articles: posts(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return articles.map((article) => (
        <Article key={article.id} article={article} />
  ))
}
