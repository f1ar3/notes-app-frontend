'use client'

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SearchIcon, XIcon} from "lucide-react";
import {useRef, useState} from "react";
import {useSearchParam} from "@/app/components/hooks/useSearchParam";

const Search = () => {
    const [search, setSearch] = useSearchParam();
    const [value, setValue] = useState(search);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleClear = () => {
        setValue('');
        inputRef.current?.blur();
        setSearch('');
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearch(value);
        inputRef.current?.blur();
    }

    return (
        <div className='flex-1 flex items-center justify-center'>
            <form
                onSubmit={handleSubmit}
                className='relative max-w-[720px] w-full'
            >
                <Input
                    value={value}
                    onChange={handleChange}
                    ref={inputRef}
                    placeholder='Search...'
                    className='md:text-base placeholder:text-neutral-800 px-14 w-full border-none
                     focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px-1px_rgba(65,69,73,.15]
                     bg-[#F0F4F8] rounded-full focus-visible:ring-0 focus:bg-white'
                />
                <Button
                    type='submit'
                    variant='ghost'
                    size='icon'
                    className='absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full'
                >
                    <SearchIcon />
                </Button>
                {value && (
                    <Button
                        onClick={handleClear}
                        type='button'
                        variant='ghost'
                        size='icon'
                        className='absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full'
                    >
                        <XIcon />
                    </Button>
                )}
            </form>
        </div>
    )
}

export default Search


