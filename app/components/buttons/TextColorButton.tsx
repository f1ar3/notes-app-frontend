import useEditorStore from "@/app/components/hooks/useEditorStore";
import {SketchPicker, ColorResult} from "react-color";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

const TextColorButton = () => {
    const {editor} = useEditorStore();

    const value = editor?.getAttributes('textStyle').color || '#000000'

    const onChange = (color: ColorResult) => {
        editor?.chain().focus().setColor(color.hex).run();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='h-5 min-w-7 shrink-0 flex flex-col items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm'>
                    <span className='text-xs'>A</span>
                    <div className='h-0.5 w-full' style={{backgroundColor: value}}></div>
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

export default TextColorButton;