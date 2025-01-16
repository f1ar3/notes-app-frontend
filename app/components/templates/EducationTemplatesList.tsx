'use client'

import EducationTemplatesListItem from "@/app/components/templates/EducationTemplatesListItem";

const EducationTemplatesList = () => {

    return (
        <div className='bg-[#F1F3F4]'>
            <div className='max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4'>
                <h3 className='text-base font-medium'>Start a new document</h3>
                <EducationTemplatesListItem />
            </div>
        </div>
    )
}

export default EducationTemplatesList