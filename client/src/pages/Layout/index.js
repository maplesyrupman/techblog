import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div>
                <nav className='m-5 p-6 flex flex-row justify-between bg-main-light rounded-full'>
                    <div className='flex flex-row items-end min-h-min'>
                        <div className='font-mono text-7xl'>TMAI</div>
                    </div>
                    <ul className='flex flex-row items-end text-secondary'>
                        <li className='nav-link'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/logup'>Login</Link>
                        </li>
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