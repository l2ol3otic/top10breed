import React, { useState } from 'react'
import Image from 'next/image'
import ph_rice from '@/public/image/ph_rice.png'
import r1_01 from '@/public/image/1_01.jpg'
import r1_02 from '@/public/image/1_02.jpg'
import r1_03 from '@/public/image/1_03.jpg'
import r2_01 from '@/public/image/2_01.jpg'
import r2_02 from '@/public/image/2_02.jpg'
import r2_03 from '@/public/image/2_03.jpg'
import r3_01 from '@/public/image/3_01.jpg'
import r3_02 from '@/public/image/3_02.jpg'
import r3_03 from '@/public/image/3_03.jpg'
import r4_01 from '@/public/image/4_01.jpg'
import r4_02 from '@/public/image/4_02.jpg'
import r4_03 from '@/public/image/4_03.jpg'
import r5_01 from '@/public/image/5_01.jpg'
import r5_02 from '@/public/image/5_02.jpg'
import r5_03 from '@/public/image/5_03.jpg'
import r6_01 from '@/public/image/6_01.jpg'
import r6_02 from '@/public/image/6_02.jpg'
import r6_03 from '@/public/image/6_03.jpg'
import r7_01 from '@/public/image/7_01.jpg'
import r7_02 from '@/public/image/7_02.jpg'
import r7_03 from '@/public/image/7_03.jpg'
import r8_01 from '@/public/image/8_01.jpg'
import r8_02 from '@/public/image/8_02.jpg'
import r8_03 from '@/public/image/8_03.jpg'
import r9_01 from '@/public/image/9_01.jpg'
import r9_02 from '@/public/image/9_02.jpg'
import r9_03 from '@/public/image/9_03.jpg'
import r10_01 from '@/public/image/10_01.jpg'
import r10_02 from '@/public/image/10_02.jpg'
import r10_03 from '@/public/image/10_03.jpg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Button } from '../ui/button'

type Props = {
    catagory: string;
}

const ImageLayout = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | StaticImport | null>(null);

    const openModal = (src: string | StaticImport) => {
        setSelectedImage(src);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    }

    const ImageCatagorySelect = () => {
        const images: { [key: string]: StaticImport[] } = {
            '1': [r1_01, r1_02, r1_03],
            '2': [r2_01, r2_02, r2_03],
            '3': [r3_01, r3_02, r3_03],
            '4': [r4_01, r4_02, r4_03],
            '5': [r5_01, r5_02, r5_03],
            '6': [r6_01, r6_02, r6_03],
            '7': [r7_01, r7_02, r7_03],
            '8': [r8_01, r8_02, r8_03],
            '9': [r9_01, r9_02, r9_03],
            '10': [r10_01, r10_02, r10_03],
            'default': [ph_rice, ph_rice, ph_rice]
        };

        const selectedImages = images[props.catagory as keyof typeof images] || images['default'];

        return (
            <div className='grid grid-cols-3 gap-4 py-6 items-center'>
                {selectedImages.map((src: string | StaticImport, index: React.Key | null | undefined) => (
                    <Image
                        key={index}
                        className="h-48 object-cover rounded-xl cursor-pointer"
                        src={src}
                        loading='lazy'
                        alt=""
                        width={200}
                        height={200}
                        onClick={() => openModal(src)}
                    />
                ))}
            </div>
        )
    }

    return (
        <>
            <ImageCatagorySelect />
            {isOpen && selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <Button
                            className="absolute top-0 right-0 m-4 text-white text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </Button>
                        <Image
                            src={selectedImage}
                            alt=""
                            width={800}
                            height={800}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default ImageLayout