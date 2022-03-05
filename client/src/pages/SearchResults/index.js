import SearchBar from "../../components/SearchBar"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import UserTab from "../../components/UserTab"
import { useQuery } from "@apollo/client"
import { SEARCH_USER, SEARCH_ARTICLE } from "../../utils/queries"

export default function SearchResults() {
    let { queryString } = useParams()
    queryString = queryString.split('+').join(' ')
    const [searchBy, setSearchBy] = useState('Author')
    const query = searchBy === 'Author' ? SEARCH_USER : SEARCH_ARTICLE
    const queryVariables = 
    searchBy === 'Author' ?
    {username: queryString} :
    searchBy === 'Title' ?
    {title: queryString} :
    {tag: queryString}

    const {data, loading} = useQuery(query, {variables: queryVariables})

    function selectSearchBy(e) {
        setSearchBy(e.target.value)
    }

    return (
        <div className="lg:w-7/12 mx-auto">
            <div>
                <SearchBar />
                <div className="flex justify-center">
                    <ul className="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 w-1/2" 
                        id="tabs-tabJustify"
                        role="tablist"
                        onClick={selectSearchBy}
                    >
                        <li className="nav-item flex-grow text-center" role="presentation">
                            <button
                                className={`
        ${searchBy === 'Author' ? 'bg-flame' : 'bg-main-light'}
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-1
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      rounded-l-full
    `}
                                role="tab"
                                type="button"
                                value='Author'
                            >Author</button>
                        </li>
                        <li className="nav-item flex-grow text-center" role="presentation">
                            <button className={`
        ${searchBy === 'Title' ? 'bg-flame' : 'bg-main-light'}
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-1
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    `}
                                role="tab"
                                type='button'
                                value='Title'
                            >Title</button>
                        </li>
                        <li className="nav-item flex-grow text-center"
                            role="presentation">
                            <button
                                className={`nav-link w-full block font-medium text-xs leading-tight rounded-r-full border-x-0 border-t-0 border-b-2 border-transparent px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active ${searchBy === 'Tag' ? 'bg-flame' : 'bg-main-light'}`}
                                id="tabs-home-tabJustify"
                                role="tab"
                                type="button"
                                value="Tag"
                            >Tag</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-4 border">
                {loading && <div>Loading...</div>}
                {data && (
                    data.searchUser.map(user => <UserTab user={user} key={user._id}/>)
                )}

            </div>
        </div>
    )
}