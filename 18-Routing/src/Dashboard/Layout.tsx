
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'
import Card from './Card'
// import Books from './main'

function Layout() {
    return (
        <div className='flex max-h-fit min-h-full bg-neutral-100 bg-blue-200 text-base-200'>
            <div className='min-w-[10%] bg-green-200 hidden md:block'>
                <SideNav />
            </div>
            {/* <div>
                <Books />
            </div> */}
            <div className='flex flex-col min-w-[90%] '>

                {/* <Nav /> */}
                <div className="h-fit">
                    <Card>
                        <Outlet />

                    </Card>
                </div>

            </div>

        </div>
    )
}

export default Layout