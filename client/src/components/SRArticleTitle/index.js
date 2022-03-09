import PostThumnail from '../PostThumbnail'
import { Search_ARTICLE_TAG, SEARCH_ARTICLE_TITLE } from '../../utils/queries'
import { useQuery } from '@apollo/client'

export default function SRArticleTitle({queryString}) {
    const {data, loading} = useQuery(SEARCH_ARTICLE_TITLE, {variables: {title: queryString}})

    return (
        <>
            {loading && <div>Loading...</div>}
            {data && (
                data.searchArticleTitle.map(post => <PostThumnail postData={post} />)
            )}
        </>
    )
}