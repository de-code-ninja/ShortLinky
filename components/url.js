"use client"
import React, { useEffect, useState } from 'react'
import { useForm} from "react-hook-form"
import isUrl from "is-url";

function Url() {
 const [val, setval] = useState("")
 const [isCopied, setisCopied] = useState(false);
 const [buttonText, setbuttonText] = useState([]);
 const [urlArr, seturlArr] = useState([]);
 const {
   register,
   handleSubmit,
   watch,
   setValue,
   reset,
   setError,
   formState: { errors,isSubmitting,isSubmitted },
  } = useForm()


  async function linkSubmit(data){
    console.log(data);
    let chkUrl = isUrl(data.link);
    console.log(chkUrl);
    if(chkUrl){

      const response = await fetch(`/api/link`,{
        method: "POST",
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      const res =await response.json();
      console.log(res);
      setval(res.shortUrl);
      setValue("link",res.shortUrl)
      const newArr = [...urlArr]
      newArr.push(res.shortUrl);
      seturlArr(newArr);
      const newBtnTextArr =[...buttonText];
      newBtnTextArr.push("Copy");
      setbuttonText(newBtnTextArr);
      console.log(urlArr);
    }else{
        setError("link",{message:"URL is not valid, try again!"})
    }
    }


    function copyText(text,indx){
      
        navigator.clipboard.writeText(text);
        console.log("copied");
        setisCopied(true);
        const BtnTextArr =[...buttonText];
        BtnTextArr[indx]="Copied";
        setbuttonText(BtnTextArr);
    }
      useEffect(() => {
        
        if(isSubmitted){
         
          reset();
        }
        
        
      }, [isSubmitted,isSubmitting])
      
  return (
    <div>
      <form onSubmit={handleSubmit(linkSubmit)}>

      <div className='bg-black w-full h-60 flex gap-4 flex-col justify-center items-center'>
        <h2 className='font-bold text-xl text-white'>Shorten any link <span className='border-b-2 border-white text-lime-500'>in seconds</span></h2>
       

        <input type="text"  {...register("link", {required:{value:true, message: "Please provide a link"}})} className='border-2 bg-black text-white border-lime-400 w-5/6 sm:w-4/6 lg:w-3/6 h-12 rounded-lg p-2' placeholder='Paste link here' />
        {errors.link && <div className='text-red-500'>{errors.link.message}</div>}
        <button type={isSubmitted?"button":"submit"}  className='bg-lime-400 hover:bg-lime-200 text-black font-bold font-sans px-9 py-2 text-2xl rounded-lg'>{isSubmitting?"Processing":"Shorten"}</button>
      </div>

      </form>

      <div className=' w-full flex gap-4 flex-col justify-center items-center py-4'>

        {urlArr.map((item,index)=>( 
        <div key={index} className='flex gap-2 flex-col md:flex-row w-5/6 sm:w-4/6 lg:w-3/6 bg-lime-50 border-zinc-600 rounded-xl justify-between items-center  p-3 lg:p-4'>
          <h2 className='font-semibold xl:text-xl'>{item}</h2>
          <button onClick={()=>{copyText(item,index)}} className="bg-black hover:bg-lime-400 hover:text-black text-white w-32 font-semibold font-sans py-2 text-xl rounded-xl">{buttonText[index]}</button>
        </div>

        ))}
    </div>
      
    </div>
  )
}

export default Url
