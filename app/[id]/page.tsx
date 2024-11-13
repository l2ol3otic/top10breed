'use client'
import React from 'react'
import { useBreedSelectedStore } from '@/app/store'

const Page = () => {
    const selected = useBreedSelectedStore((state: any) => state.state)
    return (
        <div className=" w-full p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className='flex w-full'>
                <div className='flex flex-col w-28'>
                </div>
                <div className="p-2 ">
                    <h2 className="font-bold text-lg mb-2 ">{selected?.rice_name}</h2>
                    {/* <p className="text-sm text-gray-600">{props.menu.history}</p> */}
                </div>
            </div>

            <div className="m-2 flex justify-end">
                <a role='button'
                    href='#'
                    className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
                // onClick={() => { Router.push(`/${props.menu.no}`) }}
                >Learn More</a>
            </div>
        </div>
    )
}

export default Page