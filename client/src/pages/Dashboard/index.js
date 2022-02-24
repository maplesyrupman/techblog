import { useQuery } from "@apollo/client"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { ME } from "../../utils/queries"

export default function Dashboard() {
    const {data, loading} = useQuery(ME)
    const {posts} = data?.me || []
    console.log(posts)

    return (
        <div className="border-2 lg:px-10 py-10">
            <div className='grid grid-cols-12 gap-4'>
                <div className="col-span-7 flex flex-col py-2">
                    {posts && posts.map(post => (
                        <Link to={`/post/${post._id}`} key={post.title} className="w-full mx-auto">
                            <button type='button' className="px-10 py-1 my-1 border-2 rounded text-left py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full">
                                {post.title}
                            </button>
                        </Link>
                    ))}
                    <Link to='/dashboard/new' className="max-w-min mx-auto">
                        <button type='button' className="mx-auto bg-main-light hover:bg-flame text-white font-bold py-2 px-4 rounded wrap-nowrap min-w-max">+ New Post</button>
                    </Link>
                </div>
                <div className="col-span-5 border-2 rounded">
                    blah
                </div>

            </div>

        </div>
    )
}