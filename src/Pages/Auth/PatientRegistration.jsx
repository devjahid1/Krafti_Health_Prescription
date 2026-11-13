
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";

import AuthLayout from "../../Components/Auth/AuthLayout";

const inputClass =
  "h-[43px] w-full rounded-lg border border-[#E1E9E7] bg-white px-3 text-[12px] text-[#183C39] outline-none transition placeholder:text-[#A0AEAB] focus:border-[#078D83] focus:ring-2 focus:ring-[#078D83]/10";

const PatientRegistration = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  // Empty form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle account type navigation
  const handleAccountTypeChange = (type) => {
    if (type === "doctor") {
      navigate("/doctor-registration");
    } else {
      navigate("/patient-registration");
    }
  };

  // Handle registration
  const handleSubmit = (e) => {
    e.preventDefault();

    // Terms validation
    if (!acceptedTerms) {
      alert("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    // Password length validation
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    // Password matching validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Demo navigation - Connect registration API later
    navigate("/patient-profile-setup", {
      state: {
        accountType: "patient",
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        marketingConsent,
      },
    });
  };

  return (
    <AuthLayout
      variant="patient"
      contentClassName="max-w-[650px]"
    >
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-[10px] font-medium text-[#078D83] hover:text-[#10534F]"
        >
          <ArrowLeft size={12} />
          Back to MediLink
        </Link>

        <span className="text-[10px] text-[#82938F]">
          Patient portal
        </span>
      </div>

      {/* Heading */}
      <div className="mt-6">
        <p className="text-[9px] font-bold uppercase tracking-wide text-[#078D83]">
          Patient / Create account
        </p>

        <h1 className="mt-3 text-[27px] font-bold leading-tight tracking-tight text-[#183C39]">
          A healthier next chapter
        </h1>

        <p className="mt-2 text-[11px] leading-5 text-[#7C918D]">
          Create your free patient account. Your first appointment is
          just a few steps away.
        </p>
      </div>

      {/* Account Type Selector */}
      <div className="mt-5 flex rounded-lg bg-[#EFF6F4] p-1">
        <button
          type="button"
          onClick={() => handleAccountTypeChange("patient")}
          aria-pressed="true"
          className="h-[34px] flex-1 rounded-md bg-white text-[11px] font-semibold capitalize text-[#078D83] shadow-sm transition focus:outline-none"
        >
          Patient
        </button>

        <button
          type="button"
          onClick={() => handleAccountTypeChange("doctor")}
          aria-pressed="false"
          className="h-[34px] flex-1 rounded-md text-[11px] font-semibold capitalize text-[#637A75] transition hover:text-[#10534F] focus:outline-none"
        >
          Doctor
        </button>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-1.5 block text-[10px] font-semibold text-[#183C39]"
            >
              First name
            </label>

            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className={inputClass}
              autoComplete="given-name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-1.5 block text-[10px] font-semibold text-[#183C39]"
            >
              Last name
            </label>

            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className={inputClass}
              autoComplete="family-name"
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-[10px] font-semibold text-[#183C39]"
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
              className={`${inputClass} pr-10`}
              autoComplete="email"
              required
            />

            <Mail
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718681]"
            />
          </div>

          <p className="mt-1.5 text-[9px] text-[#879995]">
            We'll send your booking confirmations here.
          </p>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-[10px] font-semibold text-[#183C39]"
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
              placeholder="Create a strong password"
              className={`${inputClass} pr-10`}
              autoComplete="new-password"
              required
              minLength={8}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718681] hover:text-[#078D83] focus:outline-none"
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? (
                <Eye size={14} />
              ) : (
                <EyeOff size={14} />
              )}
            </button>
          </div>

          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[9px] text-[#078D83]">
            <span>✓ 8+ characters</span>
            <span>✓ Number</span>
            <span>✓ Special character</span>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-1.5 block text-[10px] font-semibold text-[#183C39]"
          >
            Confirm password
          </label>

          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className={`${inputClass} pr-10`}
              autoComplete="new-password"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword((prev) => !prev)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718681] hover:text-[#078D83] focus:outline-none"
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              {showConfirmPassword ? (
                <Eye size={14} />
              ) : (
                <EyeOff size={14} />
              )}
            </button>
          </div>
        </div>

        {/* Terms & Conditions */}
        <label className="flex cursor-pointer items-start gap-2 pt-0.5 text-[10px] text-[#526A65]">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="mt-0.5 h-3 w-3 accent-[#078D83]"
          />

          <span>
            I agree to the{" "}
            <Link
              to="/terms"
              className="font-medium text-[#078D83] hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="font-medium text-[#078D83] hover:underline"
            >
              Privacy Policy
            </Link>.
          </span>
        </label>

        {/* Marketing Consent */}
        <label className="flex cursor-pointer items-start gap-2 text-[10px] text-[#526A65]">
          <input
            type="checkbox"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
            className="mt-0.5 h-3 w-3 accent-[#078D83]"
          />

          <span>
            Send me health tips and product updates (optional).
          </span>
        </label>

        {/* Create Account Button */}
        <button
          type="submit"
          className="flex h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-[#078D83] px-5 text-[11px] font-semibold text-white transition hover:bg-[#06766F] active:scale-[0.99]"
        >
          <ArrowRight size={14} />
          Create patient account
        </button>
      </form>

      {/* Sign In */}
      <p className="mt-4 text-center text-[10px] text-[#81938F]">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#078D83] hover:underline"
        >
          Sign in
        </Link>
      </p>

      {/* Information */}
      <p className="mt-4 text-[9px] leading-5 text-[#8A9B97]">
        Your account is free. Consultation fees are shown before you
        book, with no hidden booking charges.
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between gap-3 text-[9px] text-[#82938F]">
        <span>Need a hand? hello@krafticode.com</span>

        <Link
          to="/help-support"
          className="shrink-0 text-[#078D83] hover:underline"
        >
          Help center ↗
        </Link>
      </div>
    </AuthLayout>
  );
};

export default PatientRegistration;
