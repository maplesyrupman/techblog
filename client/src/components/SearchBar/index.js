import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function SearchBar() {

    const navigate = useNavigate()
    const [searchState, updateSearchState] = useState('')

    function handleChange(e) {
        updateSearchState(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
        navigate(`/search/${searchState.split(' ').join('+')}`)
    }

    return (
        <div className="flex justify-center mb-5">
            <form className="w-full flex justify-center" onSubmit={handleSubmit}>
                <div className="w-full bg-main-light p-3 rounded-full 3xl">
                    <div className="input-group relative flex">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-tertiary bg-clip-padding border-2 border-solid border-secondary rounded-full transition ease-in-out m-0 focus:border-flame focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={handleChange} />
                        <button className="btn inline-block px-6 py-2.5 bg-main-light text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-flame hover:shadow-lg focus:bg-flame  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="submit" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}