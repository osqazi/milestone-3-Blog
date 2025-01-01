import Link from "next/link";

export default function Footer(){
    return(
        <div className="bg-gray-200 text-blue-600 lg:flex md:flex justify-center content-center w-full text-center gap-16 h-16">
           <div className="flex items-center gap-1 justify-center mb-2 text-lg">
              <i className="fa-regular fa-copyright"></i>
              <div className="flex gap-4 items-center">
              <p className="text-sm">2025</p>
              <p className="font-bold">MetaLog</p>
              <p className="text-sm">All Rights Reserved</p>
              </div>
              
            </div>
            <div className="flex items-center gap-8 text-xl justify-center">
              <div>
                <Link href="https://www.facebook.com/osqazi" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/osqazi.khatri" target="_blank"><i className="fa-brands fa-square-instagram"></i></Link>
              </div>
              <div>
                <Link href="https://x.com/osqazi" target="_blank"><i className="fa-brands fa-square-twitter"></i></Link>
                
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/owais-qazi/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                
              </div>
              <div>
              <Link
                href="https://wa.me/+923353221003"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
            </div>

        </div>
    )
}