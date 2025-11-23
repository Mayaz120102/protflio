import React from "react";
import { Code, Mail } from "lucide-react";

const Footer = () => {
  return (
    // <div className="py-8 px-4">
    //   <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6">
    //     <div className="text-center space-y-4">
    //       <p className="text-gray-400">abrarmayaz2002@gmail.com</p>
    //       <div className="flex justify-center gap-6">
    //         <button className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
    //           <Code size={24} />
    //         </button>
    //         <button className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
    //           <Mail size={24} />
    //         </button>
    //       </div>
    //       <p className="text-sm text-gray-500">© 2025 Abrar Mayaz</p>
    //     </div>
    //   </div>
      
    // </div>
     <div className="max-w-7xl mx-auto  pt-8 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 John Doe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
  );
};

export default Footer;
