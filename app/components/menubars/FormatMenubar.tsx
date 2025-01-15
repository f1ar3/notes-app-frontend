import {
    MenubarContent, MenubarItem,
    MenubarMenu, MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger
} from "@/components/ui/menubar";
import {BoldIcon, ItalicIcon, RemoveFormattingIcon, StrikethroughIcon, TextIcon, UnderlineIcon} from "lucide-react";
import useEditorStore from "@/app/components/hooks/useEditorStore";

const FormatMenubar = () => {
    const {editor} = useEditorStore();

    return (
        <MenubarMenu>
            <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                Format
            </MenubarTrigger>
            <MenubarContent className='print:hidden'>
                <MenubarSub>
                    <MenubarSubTrigger>
                        <TextIcon className='size-4 mr-2'/>
                        Text
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                        <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()}>
                            <BoldIcon className='size-4 mr-2'/>
                            Bold <MenubarShortcut>⌘B</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()}>
                            <ItalicIcon className='size-4 mr-2'/>
                            Italic <MenubarShortcut>⌘I</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => editor?.chain().focus().toggleUnderline().run()}>
                            <UnderlineIcon className='size-4 mr-2'/>
                            Underline <MenubarShortcut>⌘U</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => editor?.chain().focus().toggleStrike().run()}>
                            <StrikethroughIcon className='size-4 mr-2'/>
                            <span>Strikethrough&nbsp;&nbsp;&nbsp;&nbsp;</span> <MenubarShortcut>⌘+Shift+S</MenubarShortcut>
                        </MenubarItem>
                    </MenubarSubContent>
                </MenubarSub>
                <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
                    <RemoveFormattingIcon className='size-4 mr-2'/>
                    Clear formatting
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
    )
}

export default FormatMenubar;