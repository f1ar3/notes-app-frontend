import {Editor} from "@/app/components/editor/Editor";
import Toolbar from "@/app/components/toolbar/Toolbar";
import Ruler from "@/app/components/forms/Ruler";
import DocumentNavigation from "@/app/components/navbar/DocumentNavigation";

const NoteIdPage = async () => {

    return (
        <div className='min-h-screen bg-[#FAFBFD]'>
            <div className='flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden'>
                <DocumentNavigation />
                <Toolbar />
            </div>
            <div className='pt-[114px] print:pt-0'>
                <Ruler />
                <Editor />
            </div>
        </div>


    )
}

export default NoteIdPage;