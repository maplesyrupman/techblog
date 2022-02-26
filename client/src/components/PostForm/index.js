import { useState } from "react"
import { useMutation } from "@apollo/client"
import { SUBMIT_POST } from "../../utils/mutations"

import Tag from "../Tag"

export default function PostForm() {
    const [postState, setPostState] = useState({ title: '', preamble: '', text: '', tags: new Set() })
    const [currentTag, setCurrentTag] = useState('')

    const [submitPost] = useMutation(SUBMIT_POST)

    function handleChange(e) {
        switch (e.target.name) {
            case 'title':
                setPostState({ ...postState, title: e.target.value.trim() })
                break
            case 'preamble':
                setPostState({ ...postState, preamble: e.target.value.trim() })
                break
            case 'text':
                setPostState({ ...postState, text: e.target.value.split('\n').filter(value => !!value) })
                break
            case 'tag':
                setCurrentTag(e.target.value)
            default:
                return postState
        }
    }

    function validatePost() {
        return postState.title && postState.preamble && postState.text
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (validatePost()) {
            console.log(postState)
            submitPost({ variables: { ...postState, tags: Array.from(postState.tags) } })
            window.location.replace('/dashboard')
        } else {
            alert(`Please fill all required fields`)
        }
    }

    function handleTag() {
        if (currentTag) {
            postState.tags.add(currentTag)
            setPostState({ ...postState, tags: postState.tags })
            setCurrentTag('')
        }
        document.getElementById('tag-input').value = ''
    }

    function handleKeyDown(e) {
        const key = e.charCode || e.keyCode || 0
        if (key == 13 && document.activeElement.id === 'tag-input') {
            e.preventDefault()
            handleTag()

        }
    }

    return (
        <div className="border-2 bg-main-light md:px-36 py-8">
            <form
                id='post-form'
                className="flex flex-col gap-3"
                onSubmit={handleSubmit}
                onKeyDown={handleKeyDown}
            >
                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input
                        type='text'
                        name='title'
                        className={`bg-secondary border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300 focus:border-flame`}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="preamble">Preamble</label>
                    <input
                        type='text'
                        name='preamble'
                        className="bg-secondary border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300 focus:border-flame"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="text">Body</label>
                    <textarea
                        name='text'
                        className="bg-secondary border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300 focus:border-flame resize-none"
                        onChange={handleChange}
                        rows={21}
                    />
                </div>
                <div className="grid grid-cols-5">
                    <div>
                        <label htmlFor="tags">Tags</label>
                        <input
                            name='tag'
                            className="bg-secondary border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300 focus:border-flame"
                            onChange={handleChange}
                            id='tag-input'
                        />
                        <button
                            type="button"
                            onClick={handleTag}
                        >
                            Add
                        </button>
                    </div>
                    <div className="flex gap-1 flex-wrap col-span-4">
                        {[...postState.tags].map(tag => <Tag key={tag} tagName={tag} setPostState={setPostState} postState={postState} />)}
                    </div>

                </div>

                <div className="flex flex-row-reverse pr-8">
                    <button
                        className="bg-secondary hover:bg-flame text-white font-bold py-2 px-4 rounded wrap-nowrap min-w-max"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    )
}