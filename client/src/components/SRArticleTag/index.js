import PostThumnail from '../PostThumbnail'
import { SEARCH_ARTICLE_TAG} from '../../utils/queries'
import { useQuery } from '@apollo/client'
import Loading from '../Loading'

export default function SRArticleTag({queryString}) {
    const {data, loading} = useQuery(SEARCH_ARTICLE_TAG, {variables: {tag: queryString}})

    if (loading) {
        return <Loading />
    }
    return (
        <>
            {data.searchArticleTag.length && (
                data.searchArticleTag.map(post => <PostThumnail postData={post} key={post._id}/>)
            ) || (
                <div className='text-center'>
                    Sorry, we couldn't find any articles with a "{queryString}" tag
                </div>
            )}
        </>
    )
}