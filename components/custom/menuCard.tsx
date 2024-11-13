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
        <div className=" w-full max-h-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className='grid grid-cols-3 gap-1 items-center'>
                <div className=' col-auto items-center'>
                    <Image className=" h-40 object-cover rounded-xl" src={ph_rice} alt="" width={100} height={100} />
                    <Badge variant="secondary" className=' justify-center'>{props.menu.rice_Type}</Badge>
                </div>
                <div className=" col-span-2 ">
                    <h2 className="font-bold text-lg mb-2">{props.menu.rice_name}</h2>
                    <ul className=" list-disc list-inside">
                        {props.menu.Features.map((fearure, index) => {
                            return (
                                <li key={index} className="text-xs text-gray-600 text-ellipsis overflow-hidden indent-4 ">{fearure}</li>
                            )
                        })}
                    </ul>

                </div>
            </div>

            <div className="m-2 flex justify-end">
                <a role='button'
                    href='#'
                    className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
                    onClick={() => { selectedBreed() }}
                >ข้อมูลเพิ่มเติม</a>
            </div>
        </div>

    )
}

export default MenuCard