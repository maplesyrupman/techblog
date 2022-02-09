import { useParams } from "react-router-dom"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { SUBMIT_POST } from "../../utils/mutations"

export default function PostForm() {
    const { postId } = useParams()
    const isEdit = postId ? true : false
    const [postState, setPostState] = useState({ title: '', preamble: '', text: '' })

    const [submitPost] = useMutation(SUBMIT_POST)

    function handleChange(e) {
        switch (e.target.name) {
            case 'title':
                setPostState({ ...postState, title: e.target.value })
                break
            case 'preamble':
                setPostState({ ...postState, preamble: e.target.value })
                break
            case 'text':
                setPostState({ ...postState, text: e.target.value.split('\n') })
                break
            default:
                break
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (isEdit) {
            console.log(postState)
        } else {
            submitPost({ variables: { ...postState } })
            window.location.replace('/dashboard')
        }
    }

    return (
        <div className="border-2 bg-main-light">
            <form
                className="text-secondary"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input
                        type='text'
                        name='title'
                        className="bg-secondary rounded max-w-sm"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="preamble">Preamble</label>
                    <input
                        type='text'
                        name='preamble'
                        className="bg-secondary rounded max-w-sm"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <h3>Body</h3>
                    <textarea
                        name='text'
                        className="bg-secondary rounded max-w-lg"
                        onChange={handleChange}
                    />
                </div>

                <button>{isEdit ? 'Save' : 'Post'}</button>
            </form>
        </div>
    )
}