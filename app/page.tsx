
'use client';

import { useRouter } from 'next/navigation';
import { BaseSyntheticEvent } from 'react';
import React, { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [wiggle, setWiggle] = useState(false);

  function handleSubmit(e: BaseSyntheticEvent){
   
    e.preventDefault();
    const secret= e.target[0].value;

    if(secret == "raisins"){
      router.push('/recipes');
    }else{
      setWiggle(true);
    }


    
  }
  return (
    <main className="flex min-h-screen flex-col">


      <div className = "mt-[30vh]">
        <form className="flex flex-col items-center space-y-6 tracking-widest" onSubmit={handleSubmit}>
          <div className = "text-3xl"> Fistfuls of:</div>
          <input type="text" name="secret" className={`${wiggle ?  "border-rose-500" : ""} bg-black border border-1px rounded-md h-10 tracking-wider pl-3 focus:hover:active:enabled:border-sky-200 focus:outline-none`} onChange = {()=> setWiggle(false)}/>
          <input type="submit" value="Submit" className = "text-lg active:font-medium"/>
        </form>
      </div>
      
     
      
    </main>
  )
}
