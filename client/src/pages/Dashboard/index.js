import { useQuery, useMutation } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { QUERY_USER } from "../../utils/queries"
import { UPDATE_BIO } from "../../utils/mutations"
import auth from "../../utils/auth"
import Post from "../../components/PostThumbnail"

import { FaPen, FaCheck } from 'react-icons/fa'
import ProfilePosts from "../../components/ProfilePosts"

export default function UserPage({ }) {
    const { userId } = useParams()
    const id = userId || auth.getProfile().data._id
    const { data, loading } = useQuery(QUERY_USER, { variables: { userId: id } })
    let { posts, username, bio, followers, following } = data?.user || []
    const isOwnProfile = !userId
    console.log(posts)


    const [isEdit, setIsEdit] = useState(false)
    const [bioDraft, setBioDraft] = useState(bio)
    const [updateBio] = useMutation(UPDATE_BIO)

    function handleEdit() {
        if (isEdit && bioDraft) {
            updateBio({ variables: { bio: bioDraft } })
        }
        setIsEdit(!isEdit)
        setBioDraft(null)
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
        <div className="border-2 w-7/12 mx-auto">
            <div className='flex flex-col'>
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
                            {isOwnProfile && (<button
                                className="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-6 h-6"
                                type='button'
                                onClick={handleEdit}
                            >
                                {!isEdit && (<FaPen className="mx-auto text-xs" />) || (<FaCheck className="mx-auto text-xs" />)}

                            </button>)}
                        </div>
                        {isEdit && (
                            <textarea
                                className="w-9/12"
                                onChange={handleBioChange}
                                defaultValue={bio}
                            />
                        ) || (
                                <p id='biotext' >{bio || 'nothing to see here...'}</p>
                            )}

                    </div>
                </div>
                <div className="flex flex-col px-2 py-4">
                    {isOwnProfile && (
                        <div className="flex">
                            <Link to='/dashboard/new' className="max-w-min mx-auto my-5">
                                <button type='button' className="mx-auto bg-main-light hover:bg-flame text-white font-bold py-2 px-4 rounded wrap-nowrap min-w-max">+ New Post</button>
                            </Link>
                        </div>
                    )}
                    <div className="overflow-y-auto flex flex-col gap-5 max-h-60-screen">
                        <ProfilePosts isOwnProfile={isOwnProfile} posts={posts} />
                    </div>
                </div>
            </div>

        </div>
    )
}