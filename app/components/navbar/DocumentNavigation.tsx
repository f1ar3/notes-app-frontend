import Link from "next/link";
import Image from "next/image";
import DocumentInput from "@/app/components/navbar/DocumentInput";
import DocumentMenu from "@/app/components/navbar/DocumentMenu";


const DocumentNavigation = () => {
    return (
        <nav className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <Link href='/'>
                    <Image src='/logo.svg' alt='Logo' width={36} height={36}/>
                </Link>
                <div className='flex flex-col'>
                    <DocumentInput />
                    <DocumentMenu />
                </div>
            </div>
        </nav>
    )
}

export default DocumentNavigation;