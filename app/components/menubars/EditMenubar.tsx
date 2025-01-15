import {MenubarContent, MenubarItem, MenubarMenu, MenubarShortcut, MenubarTrigger} from "@/components/ui/menubar";
import {Redo2Icon, Undo2Icon} from "lucide-react";
import useEditorStore from "@/app/components/hooks/useEditorStore";

const EditMenubar = () => {
    const {editor} = useEditorStore();

    return (
        <MenubarMenu>
            <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                Edit
            </MenubarTrigger>
            <MenubarContent className='print:hidden'>
                <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                    <Undo2Icon className='size-4 mr-2' />
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
                    <Redo2Icon className='size-4 mr-2' />
                    Redo <MenubarShortcut>⌘Y</MenubarShortcut>
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
    )
}

export default EditMenubar;