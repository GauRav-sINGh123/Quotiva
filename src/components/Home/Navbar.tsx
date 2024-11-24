import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

 

export default async function Navbar() {
  const session = await auth()
   
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-white">Quotiva</span>
          </Link>
          <div className="flex gap-5">
          {
             session && session?.user?(
               <>
                < Link href={'/startup/create'}>
                  <span>Create</span>
                </Link> 
                
               <form action={async()=>{
               "use server"
                await signOut({redirectTo:"/"})
                }}>
                 <button type="submit">Logout</button>
               </form>

               < Link href={`/user/${session?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link> 
               </>
             ):(
               <form action={async () => {
                "use server"
                await signIn("google")
                }}>
                <button type="submit">Login</button>
               </form>
             )
             
          }
          </div>
        </div>
      </div>
    </nav>
  );
}
