import useEditorStore from "@/app/components/hooks/useEditorStore";
import {SketchPicker, ColorResult} from "react-color";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {HighlighterIcon} from "lucide-react";

const HighlightColorButton = () => {
    const {editor} = useEditorStore();

    const value = editor?.getAttributes('highlight').color || '#FFFFFF'

    const onChange = (color: ColorResult) => {
        editor?.chain().focus().setHighlight({ color: color.hex }).run();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='h-5 min-w-7 shrink-0 flex flex-col items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm'>
                    <HighlighterIcon className='size-4' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-0'>
                <SketchPicker
                    color={value}
                    onChange={onChange}
                />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HighlightColorButton;