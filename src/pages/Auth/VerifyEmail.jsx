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
    <div
      className="min-h-screen flex justify-center items-center px-4"
      style={{
        background:
          "linear-gradient(180deg,#f4f9ff 0%,#fff9ef 65%,#ffffff 100%)",
      }}
    >
      <div className="max-w-md w-full bg-white p-10 rounded-xl border shadow-sm">
        {/* ICON */}
        <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-4">
          ✉
        </div>

        {/* TITLE */}
        <h1 className="text-center text-2xl font-bold mb-1">Verify Your Email</h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          We've sent a verification code to <br />
          <span className="font-semibold text-gray-700">user@example.com</span>
        </p>

        {/* OTP INPUTS */}
        <label className="text-sm font-medium text-gray-700">
          Verification Code
        </label>

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
              className="w-12 h-12 border rounded-lg text-center text-lg font-medium focus:ring-blue-500 focus:border-blue-500"
            />
          ))}
        </div>

        <p className="text-xs text-gray-500 mb-6 text-center">
          Enter the 6-digit code sent to your email
        </p>

        {/* VERIFY BUTTON */}
        <button
          onClick={verify}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          ✔ Verify Email
        </button>

        {/* RESEND SECTION */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Didn't receive the code?</p>

          <button className="w-full border py-2 rounded-lg mt-2 hover:bg-gray-50 flex justify-center gap-2">
            🔄 Resend Code
          </button>

          <p className="text-xs text-gray-500 mt-2">
            We'll send a new code to <span className="font-medium">user@example.com</span>
          </p>
        </div>

        {/* DEMO TIP */}
        <div className="bg-gray-50 border rounded-lg p-3 mt-4 text-center text-sm">
          <span className="font-semibold">Demo Tip:</span> Enter{" "}
          <span className="text-blue-600 font-semibold">123456</span> to verify your email.
        </div>

        {/* LOGIN */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Already verified?{" "}
        </p>

        {/* <Link */}
        {/* //   to="/login" */}
        {/* //   className="w-full border py-2 mt-1 rounded-lg block text-center hover:bg-gray-50 font-medium" */}
        {/* // > */}
          {/* Back to Login */}
        {/* </Link> */}
      </div>
    </div>
  );
}
