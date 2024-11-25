"use client"
import Link from "next/link"

 
const FormReset = () => {
    const handleReset=()=>{
        const form=document.querySelector(".search-form") as HTMLFormElement;
        if(form){
          form.reset();
        }
      }
  return (
    <div>
         <button
              onClick={handleReset}
              type="reset"
              className="h-8 w-8 md:h-10 md:w-10 text-white hover:text-[#60efff] transition-colors"
            >
              <Link href={'/'} >
               X
              </Link>
            </button>
    </div>
  )
}

export default FormReset