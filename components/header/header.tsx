import Image from "next/image";

import "./header.scss"



export function Header(){
    return(
    <div className="header">
          <div>
            <h1>Lucas Bueno Monteiro</h1>
            <h2>Software Development Student</h2>
          </div>
          <Image
            src="/eu_climb.jpeg"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
    </div>
         )
        
    
}