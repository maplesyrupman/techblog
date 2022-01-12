import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div>
                <nav className='m-5 p-6 flex flex-row justify-between bg-emerald-100 rounded-full'>
                    <h1 className='font-mono text-7xl'>TechBlog</h1>
                    <ul className='flex flex-row items-end'>
                        <li className='nav-link'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>


            <Outlet />
        </>
    )
}

export default Layout