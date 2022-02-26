import SearchBar from "../../components/SearchBar"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import UserTab from "../../components/UserTab"

export default function SearchResults() {
    const { search } = useParams
    const [searchBy, setSearchBy] = useState('Author')

    function selectSearchBy(e) {
        console.log(e.target.value)
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
                <UserTab username={'someguy'} followerCount={7} followingCount={3} articlesCount={10} />
            </div>
        </div>
    )
}