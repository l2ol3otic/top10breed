'use client'
import React from 'react'
import { useBreedSelectedStore } from '@/app/store'
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import ph_rice from '@/public/image/ph_rice.png'
import { Badge } from '@/components/ui/badge'
import ImageLayout from '@/components/custom/ImageLayout'

const Page = () => {
    const Router = useRouter()
    const selected = useBreedSelectedStore((state: any) => state.state)
    return (
        <div className=" w-full p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className='flex w-full px-2'>
                <div className="p-2 ">
                    <div className='flex justify-between'>
                        <Button variant="outline" size="icon" className=' justify-center' onClick={() => { Router.push('/') }}>
                            <ArrowLeft />
                        </Button>
                        <h1 className="font-bold text-2xl mb-2 ">{selected?.rice_name}</h1>

                    </div>
                    <div className='flex justify-end'>
                        <Badge className=' justify-center bg-cyan-500'>{selected?.rice_Type}</Badge>
                    </div>
                    <div className='flex justify-center gap-2'>
                        <ImageLayout catagory={selected?.no} />
                    </div>
                    <h3 className="font-bold text-xl mt-2">โดย</h3>
                    <h2 className="text-md font-bold indent-2">{selected?.department}</h2>
                    <h3 className="text-md text-gray-600 indent-2">{selected?.owner}</h3>
                    <h3 className="text-md text-gray-600 indent-2 mb-2">{selected?.position}</h3>
                    <Separator />
                    <h3 className="font-bold text-xl mt-2">ประวัติพันธุ์</h3>
                    <p className="text-md text-gray-600 indent-2 mb-2">{selected?.history}</p>
                    <Separator />
                    <h3 className="font-bold text-xl mt-2">ลักษณะประจำพันธุ์</h3>
                    <ul className="list-disc  list-outside pl-5 mb-2">
                        {selected.characteristics?.map((characteristic: any, index: number) => {
                            return (
                                <li key={index} className="text-md text-gray-600 ">{characteristic}</li>
                            )
                        })}
                    </ul>
                    <Separator />
                    <h3 className="font-bold text-xl mt-2">ลักษณะเด่น</h3>
                    <ul className="list-disc list-outside pl-5 mb-2">
                        {selected.Features?.map((feature: any, index: number) => {
                            return (
                                <li key={index} className="text-md text-gray-600 ">{feature}</li>
                            )
                        })}
                    </ul>
                    <Separator />
                    <h3 className="font-bold text-xl mt-2">พื้นที่แนะนำ</h3>
                    <p className="text-md text-gray-600 indent-2 mb-2">{selected?.area}</p>
                    <Separator />
                    <h3 className="font-bold text-xl mt-2">ข้อควรระวัง หรือ ข้อจำกัด</h3>
                    <p className="text-md text-gray-600 indent-2 mb-2">{selected?.Limitations}</p>
                    <Separator />
                    <p className="text-xs text-gray-600 indent-2 mt-2"></p>
                    {/* <p className="text-xs text-gray-600 indent-2 mt-2">ข้อมูลจาก กรมการข้าว</p> */}
                </div>
            </div>

        </div>
    )
}

export default Page