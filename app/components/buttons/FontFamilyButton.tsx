import useEditorStore from "@/app/components/hooks/useEditorStore";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {cn} from "@/lib/utils";
import {ChevronDownIcon} from "lucide-react";


const FontFamilyButton = () => {
    const {editor} = useEditorStore();

    const fonts = [
        {
            label: 'Arial',
            value: 'Arial',
        },
        {
            label: 'Times New Roman',
            value: 'Times New Roman',
        },
        {
            label: 'Courier New',
            value: 'Courier New',
        },
        {
            label: 'Georgia',
            value: 'Georgia',
        },
        {
            label: 'Verdana',
            value: 'Verdana',
        },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className={cn(
                        'h-7 w-[120px] shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm',
                    )}
                >
                    <span className='truncate'>
                        {editor?.getAttributes('textStyle').fontFamily || 'Arial'}
                    </span>
                    <ChevronDownIcon className='ml-2 size-4 shrink-0' />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='p-1 flex flex-col gap-y-1'>
                {fonts.map(({label, value}) => (
                    <button
                        key={value}
                        onClick={() => editor?.chain().focus().setFontFamily(value).run()}
                        className={cn(
                            'flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80',
                            editor?.getAttributes('textStyle').fontFamily === value && 'bg-neutral-200/80'
                        )}
                        style={{fontFamily: value}}
                    >
                    <span className='text-sm'>{label}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default FontFamilyButton;