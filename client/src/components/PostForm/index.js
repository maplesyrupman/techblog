import { useParams } from "react-router-dom"

export default function PostForm() {
    const {postId} = useParams()
    const isEdit = postId ? true : false

    return (
        <div className="border-2 bg-main-light">
            <form className="text-secondary">
                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input type='text' name='title' className="bg-secondary rounded max-w-sm" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="preamble">Preamble</label>
                    <input type='text' name='preamble' className="bg-secondary rounded max-w-sm" />
                </div>
                <div className="flex flex-col">
                    <h3>Body</h3>
                    <textarea className="bg-secondary rounded max-w-lg" />
                </div>

                <button>{isEdit ? 'Save' : 'Post'}</button>
            </form>
        </div>
    )
}