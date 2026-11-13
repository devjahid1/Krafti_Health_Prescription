
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/Auth/AuthLayout";

import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("patient");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Login
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.();
  };

  // Handle Account Type Selection
  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  // Handle Create Account Navigation
  const handleCreateAccount = () => {
    navigate(
      userType === "doctor"
        ? "/doctor-registration"
        : "/patient-registration"
    );
  };

  return (
    <AuthLayout variant={userType}>
      <div className="w-full">

        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-[11px] font-medium text-[#078D83] transition hover:text-[#10534F]"
          >
            <ArrowLeft size={13} />
            Back to MediLink
          </button>

          <span className="text-[11px] text-[#82938F]">
            {userType === "patient"
              ? "Patient portal"
              : "Doctor portal"}
          </span>
        </div>

        {/* Heading */}
        <div className="mt-7">
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#078D83]">
            {userType === "patient" ? "Patient" : "Doctor"} / Sign in
          </p>

          <h2 className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-[#183C39]">
            Welcome To Medilink
          </h2>

          <p className="mt-2 text-[14px] leading-6 text-[#7C918D]">
            Sign in to book your next visit and keep your care connected.
          </p>
        </div>

        {/* Patient / Doctor Selector */}
        <div className="mt-5 flex h-[49px] w-full rounded-xl bg-[#EFF6F4] p-[5px]">

          <button
            type="button"
            onClick={() => handleUserTypeChange("patient")}
            aria-pressed={userType === "patient"}
            className={`flex flex-1 items-center justify-center rounded-lg text-[13px] font-semibold transition-all duration-200 ${
              userType === "patient"
                ? "bg-white text-[#078D83] shadow-sm"
                : "bg-transparent text-[#647A76] hover:text-[#078D83]"
            }`}
          >
            Patient
          </button>

          <button
            type="button"
            onClick={() => handleUserTypeChange("doctor")}
            aria-pressed={userType === "doctor"}
            className={`flex flex-1 items-center justify-center rounded-lg text-[13px] font-semibold transition-all duration-200 ${
              userType === "doctor"
                ? "bg-white text-[#078D83] shadow-sm"
                : "bg-transparent text-[#647A76] hover:text-[#078D83]"
            }`}
          >
            Doctor
          </button>
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          className="mt-5 flex h-[43px] w-fit items-center justify-center gap-2 rounded-lg border border-[#E1E9E7] px-4 text-[13px] font-semibold text-[#183C39] transition hover:bg-[#F8FBFA]"
        >
          <Globe size={16} className="text-[#078D83]" />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#E1E9E7]" />

          <span className="whitespace-nowrap text-[10px] text-[#82938F]">
            or sign in with email
          </span>

          <div className="h-px flex-1 bg-[#E1E9E7]" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[12px] font-semibold text-[#183C39]"
            >
              Email address
            </label>

            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                autoComplete="email"
                required
                className="h-[45px] w-full rounded-lg border border-[#E1E9E7] bg-white px-3 pr-11 text-[13px] text-[#183C39] outline-none transition placeholder:text-[#A0AEAB] focus:border-[#078D83] focus:ring-2 focus:ring-[#078D83]/10"
              />

              <Mail
                size={16}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#82938F]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-[12px] font-semibold text-[#183C39]"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="h-[45px] w-full rounded-lg border border-[#E1E9E7] bg-white px-3 pr-11 text-[13px] text-[#183C39] outline-none transition placeholder:text-[#A0AEAB] focus:border-[#078D83] focus:ring-2 focus:ring-[#078D83]/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#82938F] transition hover:text-[#078D83]"
              >
                {showPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me / Forgot Password */}
          <div className="flex items-center justify-between gap-3">
            <label className="flex cursor-pointer items-center gap-2 text-[12px] text-[#35534F]">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 cursor-pointer rounded accent-[#078D83]"
              />

              Keep me signed in
            </label>

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-[11px] font-semibold text-[#078D83] transition hover:text-[#10534F]"
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#078D83] px-5 text-[13px] font-semibold text-white transition hover:bg-[#06766F] active:scale-[0.99]"
          >
            <ArrowRight size={16} />
            Sign in to MediLink
          </button>
        </form>

        {/* Create Account */}
        <p className="mt-5 text-center text-[13px] text-[#82938F]">
          New to MediLink?{" "}

          <button
            type="button"
            onClick={handleCreateAccount}
            className="font-semibold text-[#078D83] transition hover:text-[#10534F]"
          >
            Create a {userType} account
          </button>
        </p>

        {/* Security Information */}
        <div className="mt-5 flex items-start gap-3 rounded-lg bg-[#E8F5F2] px-4 py-4">
          <ShieldCheck
            size={19}
            className="mt-0.5 shrink-0 text-[#078D83]"
          />

          <div>
            {userType === "patient" ? (
              <>
                <p className="text-[13px] font-semibold text-[#10534F]">
                  Your care is just a step away
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#718681]">
                  Access your appointments, trusted doctors, and personal
                  health information securely.
                </p>
              </>
            ) : (
              <>
                <p className="text-[13px] font-semibold text-[#10534F]">
                  A secure workspace for your practice
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#718681]">
                  Access is limited to verified healthcare professionals.
                  Never share your sign-in details.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Terms */}
        <p className="mt-5 text-[10px] leading-5 text-[#82938F]">
          {userType === "patient"
            ? "By signing in, you agree to MediLink’s Terms of Service and Privacy Policy."
            : "By signing in, you agree to MediLink’s Professional Terms and Privacy Policy."}
        </p>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-between gap-3">
          <p className="text-[10px] text-[#82938F]">
            Need a hand? hello@krafticide.com
          </p>

          <button
            type="button"
            onClick={() => navigate("/help-support")}
            className="flex items-center gap-1 text-[10px] font-medium text-[#078D83] transition hover:text-[#10534F]"
          >
            Help center
            <ExternalLink size={11} />
          </button>
        </div>

      </div>
    </AuthLayout>
  );
};

export default Login;
