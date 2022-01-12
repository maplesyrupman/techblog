import React from "react"

export default function Post({postData}) {
    const {title, post_text, user, date} = postData
    return (
        <div className="flex justify-center my-10">
            <div className="block rounded-lg bg-white lg:w-7/12 text-center">
                <div className="py-3 px-6 rounded-t-lg bg-emerald-100 flex items-end justify-between">
                    <h5 className="text-gray-900 text-3xl font-medium font-mono">{title}</h5>
                    <p className="align-baseline">
                        Posted by
                        <span> {user} </span> 
                        on {date}
                    </p>
                </div>
                <div className="p-6 border-2 border-x-emerald-100 border-b-emerald-100 rounded-b-lg">
                    <p className="text-gray-700 text-base mb-4">
                        {post_text}
                    </p>
                </div>
            </div>
        </div>
    )
}