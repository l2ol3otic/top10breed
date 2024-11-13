"use client"
import React from 'react'
import Image from 'next/image'
import ph_rice from '@/public/image/ph_rice.png'
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { useBreedSelectedStore } from '@/app/store'

type Props = {
    menu: {
        no: number;
        rice_Type: string;
        rice_name: string;
        department: string;
        owner: string;
        position: string;
        history: string;
        characteristics: string[];
        Features: string[];
        area: string;
        Limitations: string;
        image: string;
    }
}
const MenuCard = (props: Props) => {

    const setSelected = useBreedSelectedStore((state: any) => state.set)
    const Router = useRouter()
    const selectedBreed = () => {
        setSelected(props.menu)
        Router.push(`/${props.menu.no}`)
    }
    return (
        <div className=" w-full p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className='flex w-full'>
                <div className='flex flex-col w-28'>
                    <Image className="h-40 object-cover rounded-xl" src={ph_rice} alt="" width={100} height={60} />
                    <Badge variant="outline">Badge</Badge>
                </div>
                <div className="p-2 ">
                    <h2 className="font-bold text-lg mb-2 ">{props.menu.rice_name}</h2>
                    <p className="text-sm text-gray-600">{props.menu.history}</p>
                </div>
            </div>

            <div className="m-2 flex justify-end">
                <a role='button'
                    href='#'
                    className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
                    onClick={() => { selectedBreed() }}
                >Learn More</a>
            </div>
        </div>

    )
}

export default MenuCard