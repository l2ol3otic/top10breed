import React from 'react'
import jsonData from '@/data/riceRaw.json'
import MenuCard from '@/components/custom/menuCard'
import { Label } from '@/components/ui/label'


const page = () => {

  return (
    <div className="grid items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-2 items-center ">
          <Label className=' text-xl font-bold'>พันธุ์ข้าวรับรอง 10 พันธุ์</Label>
          <Label className=' text-md text-center font-bold'>เนื่องในโอกาสพระบาทสมเด็จพระเจ้าอยู่หัว รัชกาลที่ 10 พระชนมพรรษา 72 พรรษา</Label>
            <Label className='text-md indent-4 text-gray-600 leading-relaxed'>
            เนื่องในโอกาสพระบาทสมเด็จพระเจ้าอยู่หัว รัชกาลที่ 10 พระชนมพรรษา 72 พรรษา กรมการข้าวน้อมสำนึก
            ในพระมหากรุณาธิคุณ เพื่อสร้างขวัญและกำลังใจแก่เกษตรกรผู้ปลูกข้าว กรมการข้าวเตรียมการจะรับรองพันธุ์ข้าว
            ในปี 2567 ช่วงเดือน เมษายน จำนวน 10 พันธุ์ ประกอบไปด้วย ข้าวขาวพื้นแข็ง ข้าวหอมไทย ข้าวเหนียว ข้าวญี่ปุ่น
            และข้าวสาลี นี้มีความสำคัญต่อชาวนา รวมถึงประชาชนที่อยู่ทั่วทุกภูมิภาคของประเทศไทย เกษตรกรผู้ปลูกข้าวจะมีข้าวพันธุ์ใหม่ คุณภาพดี ตรงความต้องการของผู้บริโภคและผู้ประกอบการ
            ในแต่ละชนิดและประเภทข้าว ซึ่งเป็นทางเลือกให้เกษตรกร
            ในการเลือกใช้พันธุ์ข้าวสำหรับปลูกแต่ละนิเวศน์ของการปลูกข้าวในประเทศไทย
            </Label>
          {
            jsonData.map((data, index) => {
              return (
                <MenuCard key={index} menu={data} />
              )
            })
          }
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        ปปปปปปปปปปปปปปปปปปป
      </footer> */}
    </div>
  )
}

export default page
