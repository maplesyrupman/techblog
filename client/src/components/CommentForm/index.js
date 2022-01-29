import {FaCommentMedical} from 'react-icons/fa'

export default function CommentForm() {
    return (
        <form>
            <div>
                <textarea/>
            </div>

            <div>
                <button type='submit'><FaCommentMedical className='inline'/>comment</button>
            </div>
        </form>
    )
}