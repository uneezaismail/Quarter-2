import {SignUp } from "@clerk/nextjs";

export default function SignUppage(){
      return(
        <div className="bg-emerald-950 h-screen flex items-center justify-center">
        <SignUp/>  
        </div>
    ) 
}