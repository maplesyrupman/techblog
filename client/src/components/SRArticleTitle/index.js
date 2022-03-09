import PostThumnail from '../PostThumbnail'
import { Search_ARTICLE_TAG, SEARCH_ARTICLE_TITLE } from '../../utils/queries'
import { useQuery } from '@apollo/client'

export default function SRArticleTitle({queryString}) {
    const {data, loading} = useQuery(SEARCH_ARTICLE_TITLE, {variables: {title: queryString}})

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <>
            {data.searchArticleTitle.length && (
                data.searchArticleTitle.map(post => <PostThumnail postData={post} key={post._id} />)
            ) || (
                <div className='text-center'>
                    Sorry, we couldn't find any articles with "{queryString}" in their title
                </div>
            )}
        </>
    )
}