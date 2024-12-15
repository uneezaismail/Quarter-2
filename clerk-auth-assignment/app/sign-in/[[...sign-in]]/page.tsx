import { SignIn } from "@clerk/nextjs";

export default function SignInpage(){
    return(
        <div className="bg-emerald-950 h-screen flex items-center justify-center">
          <SignIn/>  
        </div>
    ) 
}