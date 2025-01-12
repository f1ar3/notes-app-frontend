const Search = () => {
    return (
        <div className='flex items-center space-x-4'>
            <input
                type="text"
                placeholder='Search...'
                className='hidden sm:block px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
        </div>
    )
}

export default Search