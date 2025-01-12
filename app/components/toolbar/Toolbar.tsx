'use client'

import ToolbarButton from "@/app/components/buttons/ToolbarButton";
import {
    BoldIcon,
    ItalicIcon, ListTodoIcon,
    LucideIcon, MessageSquarePlusIcon,
    PrinterIcon,
    Redo2Icon, RemoveFormattingIcon,
    SpellCheckIcon,
    UnderlineIcon,
    Undo2Icon
} from "lucide-react";
import useEditorStore from "@/app/components/hooks/useEditorStore";
import {Separator} from "@/components/ui/separator";
import FontFamilyButton from "@/app/components/buttons/FontFamilyButton";
import HeadingLevelButton from "@/app/components/buttons/HeadingLevelButton";
import TextColorButton from "@/app/components/buttons/TextColorButton";


const Toolbar = () => {
    const {editor} = useEditorStore();

    const sections: {
        label: string;
        icon: LucideIcon;
        onClick: () => void
        isActive?: boolean;
    }[][] = [
        [
            {
                label: 'Undo',
                icon: Undo2Icon,
                onClick: () => editor?.chain().focus().undo().run(),
            },
            {
                label: 'Redo',
                icon: Redo2Icon,
                onClick: () => editor?.chain().focus().redo().run(),
            },
            {
                label: 'Print',
                icon: PrinterIcon,
                onClick: () => window.print(),
            },
            {
                label: 'Spell Check',
                icon: SpellCheckIcon,
                onClick: () => {
                    const current = editor?.view.dom.getAttribute('spellcheck');
                    editor?.view.dom.setAttribute('spellcheck', current === 'false' ? 'true' : 'false');
                }
            }
        ],
        [
            {
                label: 'Bold',
                icon: BoldIcon,
                onClick: () => editor?.chain().focus().toggleBold().run(),
                isActive: editor?.isActive('bold'),
            },
            {
                label: 'Italic',
                icon: ItalicIcon,
                onClick: () => editor?.chain().focus().toggleItalic().run(),
                isActive: editor?.isActive('italic'),
            },
            {
                label: 'Underline',
                icon: UnderlineIcon,
                onClick: () => editor?.chain().focus().toggleUnderline().run(),
                isActive: editor?.isActive('underline'),
            },
        ],
        [
            {
                label: 'Comment',
                icon: MessageSquarePlusIcon,
                onClick: () => console.log(),
                isActive: false,
            },
            {
                label: 'List Todo',
                icon: ListTodoIcon,
                onClick: () => editor?.chain().focus().toggleTaskList().run(),
                isActive: editor?.isActive('italic'),
            },
            {
                label: 'Remove Formatting',
                icon: RemoveFormattingIcon,
                onClick: () => editor?.chain().focus().unsetAllMarks().run(),
            },
        ],
    ]

    return (
        <div className='bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto'>
            {sections[0].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <FontFamilyButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <HeadingLevelButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />

            {sections[1].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}

            <TextColorButton />

            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {sections[2].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}


        </div>
    )
}

export default Toolbar;