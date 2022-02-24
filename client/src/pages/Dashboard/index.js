import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ME } from "../../utils/queries"

import { FaPen, FaCheck } from 'react-icons/fa'

export default function UserPage({ isOwnProfile }) {
    const { data, loading } = useQuery(ME)
    const { posts, username, bio, followers, following } = data?.me || []

    const [isEdit, setIsEdit] = useState(false)
    const [bioDraft, setBioDraft] = useState(bio)

    function handleEdit() {
        setIsEdit(!isEdit)
        console.log(bioDraft)
    }

    function handleBioChange(e) {
        setBioDraft(e.target.value)
    }

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="border-2 py-4 px-2">
            <div className='grid grid-cols-12 gap-4'>
                <div className="col-span-5 border-2 rounded p-2">
                    <div className="flex gap-2">
                        <h2 className="text-3xl">{username}</h2>
                        {!isOwnProfile && (
                            <button
                                className="inline-block px-4 border-2 border-flame text-flame font-medium text-xs uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                type="button"
                            >
                                follow
                            </button>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <p>
                            {followers.length} Followers
                        </p>
                        <p>
                            {following.length} Following
                        </p>
                        <p>
                            {posts.length} Articles
                        </p>
                    </div>
                    <div>
                        <div className="flex gap-1 mt-2 items-center">
                            <h3 className="text-2xl">Bio</h3>
                            <button
                                className="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-6 h-6"
                                type='button'
                                onClick={handleEdit}
                            >
                                {!isEdit && (<FaPen className="mx-auto text-xs" />) || (<FaCheck className="mx-auto text-xs" />)}
                            </button>
                        </div>
                        {isEdit && (
                            <textarea 
                            className="w-9/12"
                            onChange={handleBioChange}
                            defaultValue={bio}
                            />
                        ) || (
                                <p>{bio || 'nothing to see here...'}</p>
                            )}

                    </div>
                </div>
                <div className="col-span-7 flex flex-col py-2">
                    <div className="overflow-y-scroll pl-1 overflow-x-hidden h-80 mb-2 border-2">
                        {posts && posts.map(post => (
                            <Link to={`/post/${post._id}`} key={post._id} className="w-full mx-auto">
                                <button type='button' className="px-10 py-1 my-1 border-2 rounded text-left py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full">
                                    {post.title}
                                </button>
                            </Link>
                        ))}
                    </div>
                    {isOwnProfile && (
                        <div className="flex">
                            <Link to='/dashboard/new' className="max-w-min mx-auto">
                                <button type='button' className="mx-auto bg-main-light hover:bg-flame text-white font-bold py-2 px-4 rounded wrap-nowrap min-w-max">+ New Post</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}