import useEditorStore from "@/app/components/hooks/useEditorStore";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {ListIcon} from "lucide-react";
import {cn} from "@/lib/utils";

const ListButton = () => {
    const {editor} = useEditorStore();
    const lists = [
        {
            label: "Bullet List",
            icon: ListIcon,
            isActive: () => editor?.isActive('bulletList'),
            onClick: () => editor?.chain().focus().toggleBulletList().run(),
        },
        {
            label: "Ordered List",
            icon: ListIcon,
            isActive: () => editor?.isActive('orderedList'),
            onClick: () => editor?.chain().focus().toggleOrderedList().run(),
        },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='h-5 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm'>
                    <ListIcon className='size-4' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-1 flex flex-col gap-y-1'>
                {lists.map(({label, icon: Icon, onClick, isActive}) => (
                    <button
                        key={label}
                        onClick={onClick}
                        className={cn(
                            'flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80',
                            isActive() && 'bg-neutral-200/80'
                        )}
                    >
                        <Icon className='size-4' />
                        <span className='text-sm'>{label}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )


}

export default ListButton;