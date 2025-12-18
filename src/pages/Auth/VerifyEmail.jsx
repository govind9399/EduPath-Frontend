import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function VerifyEmail() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const updated = [...otp];
      updated[index] = value;
      setOtp(updated);

      if (value && index < 5) inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verify = () => {
    const code = otp.join("");
    console.log("Entered OTP:", code);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-b from-blue-50 via-amber-50 to-white dark:from-gpt-bg dark:via-gpt-bg dark:to-gpt-bg transition">
      <div className="max-w-md w-full bg-white dark:bg-gpt-surface p-10 rounded-xl border dark:border-gpt-border shadow-xl">

        {/* ICON */}
        <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-gpt-accent/20 text-blue-600 dark:text-gpt-accent rounded-full flex items-center justify-center text-3xl mb-4">
          ✉
        </div>

        {/* TITLE */}
        <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-gpt-text mb-1">
          Verify Your Email
        </h1>
        <p className="text-center text-sm text-gray-600 dark:text-gpt-muted mb-6">
          We've sent a 6-digit verification code to <br />
          <span className="font-semibold text-gray-800 dark:text-gpt-text">user@example.com</span>
        </p>

        {/* OTP INPUT LABEL */}
        <label className="text-sm font-medium text-gray-700 dark:text-gpt-text">
          Verification Code
        </label>

        {/* OTP BOXES */}
        <div className="flex justify-between mt-2 mb-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border border-gray-300 dark:border-gpt-border rounded-lg text-center text-lg font-semibold
              bg-white dark:bg-gpt-elevated text-gray-900 dark:text-gpt-text
              focus:ring-2 focus:ring-blue-500 outline-none"
            />
          ))}
        </div>

        <p className="text-xs text-gray-500 dark:text-gpt-muted mb-6 text-center">
          Enter the 6-digit code sent to your email
        </p>

        {/* VERIFY BUTTON */}
        <button
          onClick={verify}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow-sm transition"
        >
          ✔ Verify Email
        </button>

        {/* RESEND */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gpt-muted">Didn't receive the code?</p>

          <button className="w-full border dark:border-gpt-border py-2 rounded-lg mt-2 hover:bg-gray-50 dark:hover:bg-gpt-elevated transition">
            🔄 Resend Code
          </button>

          <p className="text-xs text-gray-500 dark:text-gpt-muted mt-2">
            A new code will be sent to <span className="font-medium">user@example.com</span>
          </p>
        </div>

        {/* DEMO TIP */}
        <div className="bg-blue-50 dark:bg-gpt-accent/10 border border-blue-200 dark:border-gpt-border rounded-lg p-3 mt-5 text-center text-sm text-gray-700 dark:text-gpt-text">
          <span className="font-semibold">Demo Tip:</span> Enter{" "}
          <span className="text-blue-600 font-semibold">123456</span> to verify your email.
        </div>

        {/* BACK TO LOGIN */}
        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gpt-muted">
          Already verified?
        </p>

        <Link
          to="/login"
          className="w-full border dark:border-gpt-border py-2 mt-1 rounded-lg block text-center hover:bg-gray-50 dark:hover:bg-gpt-elevated transition font-medium"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
