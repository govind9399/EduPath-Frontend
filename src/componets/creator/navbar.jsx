 import { NavLink } from "react-router-dom"

export const Navbar=()=>{
     return(
        <>
         <header className="w-full border-b border-gray-200 bg-white">
   <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
     <div className="flex items-center gap-3">
       <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-500 to-amber-400 flex items-center justify-center text-white
font-bold">
         EP
       </div>
       <span className="font-semibold text-gray-800 text-lg">EduPath</span>
     </div>
     <div className="hidden md:block flex-1 mx-10">
       <div className="relative max-w-xl mx-auto">
         <input
           className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 shadow-sm 
focus:outline-none focus:ring-2 focus:ring-blue-400"
           placeholder="Search courses, videos, creators..."
         />
         <svg
           className="w-4 h-4 absolute right-3 top-2.5 text-gray-400"
           viewBox="0 0 24 24"
           fill="none"
         >
           <path
             d="M21 21l-4.35-4.35"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
           />
           <circle
             cx="11"
             cy="11"
             r="6"
             stroke="currentColor"
             strokeWidth="2"
           />
         </svg>
       </div>
     </div>
     <div className="flex items-center gap-4">
       <NavLink to="/creator-dashboard" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white 
hover:bg-gray-50">
         <span className="inline-block w-4 h-4 border border-gray-500 rounded-sm" />
         Creator Studio
       </NavLink>
       <NavLink to="/student-dashboard" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
         U
       </NavLink>
     </div>
   </div>
 </header>
        </>
     )
}
