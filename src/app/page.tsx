'use client'
import Image from "next/image"
import { useState } from "react"

export default function Home() {

  const [index, setIndex] = useState('159')
  const [advice, setAdvice] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action.")

  const fetchAdvice = async() => {
    try{
      const response = await fetch('https://api.adviceslip.com/advice').then()
      const data = await response.json()

      setIndex(data.slip.id)
      setAdvice(data.slip.advice)
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <main className="bg-[#1f2632] h-screen text-white flex justify-center items-center">
      {/* Card */}
      <div className="bg-[#323a49] max-w-[500px] w-full rounded-lg p-10 flex flex-col justify-center items-center relative mx-5 gap-5">
        <div className="text-[#52ffa8] font-mono uppercase tracking-widest font-semibold text-center">Advice #{index}</div>
        <div className="text-center text-2xl font-semibold">{`"{$advice}"`}</div>
        <div className="my-4">
          <Image src='/images/pattern-divider-desktop.svg' width={500} height={200} alt='pattern divider'/>
        </div>
        <div className="absolute bottom-[-1.8rem] bg-[#52ffa8] p-4 rounded-full cursor-pointer hover:ring-4 hover:shadow-[#52ffa8]" onClick={fetchAdvice}>
          <Image src='/images/icon-dice.svg' width={30} height={30} alt='icon-dice'/>
        </div>
      </div>
    </main>
  )
}
