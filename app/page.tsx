import React from 'react'
import jsonData from '@/data/riceRaw.json'
import MenuCard from '@/components/custom/menuCard'
import { Label } from '@/components/ui/label'


const page = () => {

  return (
    <div className="grid items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center ">
          <Label className=' text-xl font-bold'>ข้าว 72 พรรษา</Label>
          {
            jsonData.map((data, index) => {
              return (
                <MenuCard key={index} menu={data} />
              )
            })
          }
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        ปปปปปปปปปปปปปปปปปปป
      </footer>
    </div>
  )
}

export default page

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           ปปปปปปปปปปปปปปปปปปป
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         ปปปปปปปปปปปปปปปปปปป
//       </footer>
//     </div>
//   );
// }