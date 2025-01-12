import {Editor} from "@/app/components/editor/Editor";
import Toolbar from "@/app/components/toolbar/Toolbar";

interface NoteIdPageProps {
    params: Promise<{ noteId: string }>
}

const NoteIdPage = async () => {

    return (
        <div className='min-h-screen bg-[#FAFBFD]'>
            <Toolbar />

            <Editor />
        </div>


    )
}

export default NoteIdPage;