import {
    MenubarMenu, MenubarItem, MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger, MenubarContent
} from "@/components/ui/menubar";
import {
    FileIcon,
    FileJsonIcon,
    FilePenIcon,
    FilePlusIcon,
    FileTextIcon,
    GlobeIcon,
    PrinterIcon,
    TrashIcon
} from "lucide-react";
import {BsFilePdf} from "react-icons/bs";
import useEditorStore from "@/app/components/hooks/useEditorStore";

const FileMenubar = () => {
    const {editor} = useEditorStore();

    const onDownload = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
    }

    const onSaveJson = () => {
        if (!editor) return;

        const content = editor.getJSON()
        const blob = new Blob([JSON.stringify(content)], { type: "application/json" });
        onDownload(blob, `document.json`);
    }

    const onSaveHTML = () => {
        if (!editor) return;

        const content = editor.getHTML()
        const blob = new Blob([content], { type: "text/html" });
        onDownload(blob, `document.html`);
    }

    const onSaveText = () => {
        if (!editor) return;

        const content = editor.getText();
        const blob = new Blob([content], { type: "text/plain" });
        onDownload(blob, `document.txt`);
    }

    return (
        <MenubarMenu>
            <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                File
            </MenubarTrigger>
            <MenubarContent className='print:hidden'>
                <MenubarSub>
                    <MenubarSubTrigger>
                        <FileIcon className='size-4 mr-2' />
                        Save
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                        <MenubarItem onClick={onSaveJson}>
                            <FileJsonIcon className='size-4 mr-2' />
                            JSON
                        </MenubarItem>
                        <MenubarItem onClick={onSaveHTML}>
                            <GlobeIcon className='size-4 mr-2' />
                            HTML
                        </MenubarItem>
                        <MenubarItem onClick={() => window.print()}>
                            <BsFilePdf className='size-4 mr-2' />
                            PDF
                        </MenubarItem>
                        <MenubarItem onClick={onSaveText}>
                            <FileTextIcon className='size-4 mr-2' />
                            Text
                        </MenubarItem>
                    </MenubarSubContent>
                </MenubarSub>
                <MenubarItem>
                    <FilePlusIcon className='size-4 mr-2' />
                    New Document
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                    <FilePenIcon className='size-4 mr-2' />
                    Rename
                </MenubarItem>
                <MenubarItem>
                    <TrashIcon className='size-4 mr-2' />
                    Remove
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => window.print()}>
                    <PrinterIcon className='size-4 mr-2' />
                    Print
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
    )
}

export default FileMenubar