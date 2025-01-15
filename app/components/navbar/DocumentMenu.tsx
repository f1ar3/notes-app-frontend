'use client'

import EditMenubar from "@/app/components/menubars/EditMenubar";
import InsertMenubar from "@/app/components/menubars/InsertMenubar";
import FormatMenubar from "@/app/components/menubars/FormatMenubar";
import FileMenubar from "@/app/components/menubars/FileMenubar";
import {Menubar} from "@/components/ui/menubar";

const DocumentMenu = () => {
    return (
        <div className='flex'>
            <Menubar className='border-none bg-transparent shadow-none h-auto p-0'>
                <FileMenubar />
                <EditMenubar />
                <InsertMenubar />
                <FormatMenubar />
            </Menubar>
        </div>
    )
}

export default DocumentMenu