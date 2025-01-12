import Search from "@/app/components/header/Search";
import UserNavigation from "@/app/components/header/UserNavigation";


const Header = () => {
    return (
        <header className='flex justify-between items-center px-6 py-3 bg-gray-100 border-b shadow-md'>
            <div className='text-xl sm:text-2xl font-bold'>Collaborative Notes</div>
            <Search />

            <UserNavigation />
        </header>
    )
}

export default Header;