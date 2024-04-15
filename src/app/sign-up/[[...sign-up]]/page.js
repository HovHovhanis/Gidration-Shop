
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex h-[100vh] flex-col justify-center items-center">
        <SignUp />
    </div>
  ) 
}
