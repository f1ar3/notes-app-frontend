import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {cn} from "@/lib/utils";

const templates = [
    {
        id: 'blank',
        label: 'Blank Document',
        imageURL: '/blank-document.svg',
    },
    {
        id: 'project-proposal',
        label: 'Project Proposal',
        imageURL: '/project-proposal.svg',
    },
    {
        id: 'software-proposal',
        label: 'Software Proposal',
        imageURL: '/software-proposal.svg',
    },
    {
        id: 'blank2',
        label: 'Blank Document',
        imageURL: '/blank-document.svg',
    },
    {
        id: 'project-proposal2',
        label: 'Project Proposal',
        imageURL: '/project-proposal.svg',
    },
    {
        id: 'software-proposal2',
        label: 'Software Proposal',
        imageURL: '/software-proposal.svg',
    },
    {
        id: 'blank3',
        label: 'Blank Document',
        imageURL: '/blank-document.svg',
    },
    {
        id: 'project-proposal3',
        label: 'Project Proposal',
        imageURL: '/project-proposal.svg',
    },
    {
        id: 'software-proposal3',
        label: 'Software Proposal',
        imageURL: '/software-proposal.svg',
    },
];

const EducationTemplatesListItem = () => {
    const isCreating = false

    return (
        <Carousel>
            <CarouselContent className='-ml-4'>
                {templates.map((template) => (
                    <CarouselItem
                        key={template.id}
                        className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%]'
                    >
                        <div className={cn(
                            'aspect-[3/4] flex flex-col gap-y-2.5',
                            isCreating && 'pointer-events-none opacity-50'
                        )}>
                            <button
                                disabled={isCreating}
                                onClick={() => {
                                }}
                                style={{
                                    backgroundImage: `url(${template.imageURL})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className='size-full hover:border-blue-500 rounded-sm border hover:bg-blue-50
                                        transition flex flex-col items-center justify-center gap-y-4 bg-white'
                            />
                            <p className='text-sm font-medium truncate'>
                                {template.label}
                            </p>
                        </div>

                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default EducationTemplatesListItem