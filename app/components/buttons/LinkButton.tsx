import useEditorStore from "@/app/components/hooks/useEditorStore";
import {useState} from "react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Link2Icon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const LinkButton = () => {
    const {editor} = useEditorStore();
    const [value, setValue] = useState('');

    const onChange = (href: string) => {
        editor?.chain().focus().extendMarkRange('link').setLink({href}).run();
        setValue('');
    }

    return (
        <DropdownMenu onOpenChange={(open) => {
            if (open) {
                setValue(editor?.getAttributes('link').href || '');
            }
        }}>
            <DropdownMenuTrigger asChild>
                <div className='h-5 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm'>
                    <Link2Icon className='size-4' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-2.5 flex items-center gap-x-2'>
                <Input
                    placeholder='https://www.example.com'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button onClick={() => {onChange(value)}}>
                    Apply
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )


}

export default LinkButton;