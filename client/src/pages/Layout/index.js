import { Outlet, Link } from 'react-router-dom'
import Auth from '../../utils/auth'
import { FaFileAlt } from 'react-icons/fa'

const Layout = () => {
    function logout() {
        Auth.logout()
        window.location.replace('/')
    }
    return (
        <>
            <div className='p-5'>
                <nav className=' p-6 flex flex-row justify-between bg-main-light rounded-full'>
                    <div className='flex flex-row items-end min-h-min'>
                        <div className='font-mono text-7xl whitespace-nowrap flex items-center'>
                            <FaFileAlt className='inline text-5xl mb-3' />
                            <h1 className='leading-none'>InfoShare</h1>
                        </div>
                    </div>
                    <ul className='flex flex-row items-end text-secondary'>
                        <li className='nav-link'>
                            <Link to='/'>All</Link>
                        </li>
                        {Auth.loggedIn() && (
                            <>
                                <li className='nav-link'>
                                    <Link to='/feed'>Feed</Link>
                                </li>
                                <li className='nav-link'>
                                    <Link to='/dashboard'>Dashboard</Link>
                                </li>
                            </>
                        )}
                        {(Auth.loggedIn() && (
                            <li
                                className='nav-link hover:cursor-pointer'
                                onClick={logout}
                            >
                                <h1>Logout</h1>
                            </li>
                        )) || (
                                <li className='nav-link'>
                                    <Link to='/logup'>Login</Link>
                                </li>
                            )}
                    </ul>
                </nav>
            </div>

            <div className='container mx-auto'>
                <Outlet />
            </div>

        </>
    )
}

export default Layout