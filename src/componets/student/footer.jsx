import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className=" mt-12 border-t border-gray-200 pt-8 px-4 md:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm">
                EP
              </div>
              <span className="font-bold text-gray-800 text-base">EduPath</span>
            </div>

            <p className="text-xs text-gray-700 leading-5">
              Democratizing education through free, high-quality video content.
              Learn anything, teach everything.
            </p>

            <div className="mt-4 flex gap-4 text-gray-400 text-lg">
              <FaLinkedinIn />
              <FaTwitter />
              <IoLogoInstagram />
              <FaFacebook />
              <FaYoutube />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Platform</h4>
            <ul className="space-y-1 text-xs text-gray-700 cursor-pointer">
              <li>Browse Videos</li>
              <li>Become a Creator</li>
              <li>How It Works</li>
              {/* <li>Pricing</li> */}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
            <ul className="space-y-1 text-xs text-gray-600 cursor-pointer ">
              <NavLink to="/help-center">
                <li>Help Center</li>
              </NavLink>
              <NavLink to="">
                <li>Community</li>
              </NavLink>

              <NavLink to="">
                <li>Contact Us</li>
              </NavLink>

              <NavLink to="">
                <li>Report Content</li>
              </NavLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Legal</h4>
            <ul className="space-y-1 text-xs text-gray-500 cursor-pointer">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Copyright</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-700 gap-2 pb-4">
          <span className="text-center md:text-left">
            © 2025 EduPath. All rights reserved.
          </span>
          <span className="text-center md:text-right">
            English • Made with ❤️ for learners
          </span>
        </div>
      </footer>
    </>
  );
};
