import {Editor} from "@/app/components/editor/Editor";
import Toolbar from "@/app/components/toolbar/Toolbar";
import Ruler from "@/app/components/forms/Ruler";

const NoteIdPage = async () => {

    return (
        <div className='min-h-screen bg-[#FAFBFD]'>
            <Toolbar />
            <Ruler />

            <Editor />
        </div>


    )
}

export default NoteIdPage;