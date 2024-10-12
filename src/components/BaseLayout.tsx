import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";
import { ReactNode } from "react"
import Sidebar from "./Sidebar";


const BaseLayout = async ({children, renderRightPanel=true}: {children: ReactNode, renderRightPanel?: boolean}) => {

  // any page uses this layout require authenticated users otherwise they gone be redirected to home page

  const {isAuthenticated} = getKindeServerSession();

  if(!(await isAuthenticated())){
    return redirect("/");
  }

  return (
    <div className="flex max-w-2xl lg:max-w-7xl mx-auto relative">
      {/* Sidebar */}
      <Sidebar />
      {/* main content */}
      <div className="w-full lg:w-3/5 flex flex-col border-r">{children}</div>
      {/* right panel */}
      {renderRightPanel && <p>suggested products</p>}
    </div>
  )
}

export default BaseLayout;
