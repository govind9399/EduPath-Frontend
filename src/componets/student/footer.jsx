import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="
        mt-12 border-t pt-10 px-4 md:px-8
        bg-white text-gray-700 border-gray-200
        dark:bg-gpt-bg dark:text-gpt-muted dark:border-gpt-border
        transition-colors duration-300
      "
    >
      {/* Top grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div
              className="
                w-8 h-8 rounded-md text-white font-bold text-sm
                bg-gradient-to-br from-blue-600 to-amber-500
                flex items-center justify-center
              "
            >
              EP
            </div>
            <span className="font-bold text-gray-900 dark:text-gpt-text text-base">
              EduPath
            </span>
          </div>

          <p className="text-xs text-gray-600 dark:text-gpt-muted leading-5">
            Empowering learners and creators by providing free,
            high-quality educational video content.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex gap-4 text-lg text-gray-400 dark:text-gpt-muted">
            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-cyan-500 cursor-pointer" />
            <IoLogoInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gpt-text mb-2">Platform</h4>
          <ul className="space-y-1 text-xs">
            <li className="cursor-pointer hover:underline">Browse Videos</li>
            <li className="cursor-pointer hover:underline">Become a Creator</li>
            <li className="cursor-pointer hover:underline">How It Works</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gpt-text mb-2">Support</h4>
          <ul className="space-y-1 text-xs">
            <li><NavLink to="/help-center" className="hover:underline">Help Center</NavLink></li>
            <li className="hover:underline cursor-pointer">Community</li>
            <li><NavLink to="/support-help" className="hover:underline">Contact Us</NavLink></li>
            <li className="hover:underline cursor-pointer">Report Content</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gpt-text mb-2">Legal</h4>
          <ul className="space-y-1 text-xs">
            <li className="cursor-pointer hover:underline">Privacy Policy</li>
            <li className="cursor-pointer hover:underline">Terms of Service</li>
            <li className="cursor-pointer hover:underline">Cookie Policy</li>
            <li className="cursor-pointer hover:underline">Copyright</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="
          mt-8 flex flex-col md:flex-row items-center justify-between gap-2 pb-6
          text-xs text-gray-600 dark:text-gpt-muted
        "
      >
        <span>© 2025 EduPath. All rights reserved.</span>
        <span>English • Made with ❤️ for learners</span>
      </div>
    </footer>
  );
};
