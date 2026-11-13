
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  FileCheck,
  Mail,
  UserCheck,
} from "lucide-react";

import AuthLayout from "../../Components/Auth/AuthLayout";

const DoctorVerificationPending = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Doctor profile data received from DoctorProfileSetup
  const profileData = location.state?.formData || {};

  // Generate a demo reference number
  const referenceNumber = useMemo(() => {
    return `MLD-${Date.now().toString().slice(-8)}`;
  }, []);

  // Back to Doctor Profile Setup
  const handleReviewProfile = () => {
    navigate("/doctor-profile-setup", {
      state: {
        registrationData: location.state?.registrationData || {},
        formData: profileData,
      },
    });
  };

  // Back to Login
  const handleBackToLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <AuthLayout variant="doctor">
      <div className="w-full">
        {/* Back Navigation */}
        <button
          type="button"
          onClick={handleBackToLogin}
          className="mb-7 flex items-center gap-2 text-[12px] font-medium text-[#168078] transition hover:text-[#10534F]"
        >
          <ArrowLeft size={15} />
          Back to sign in
        </button>

        {/* Status Icon */}
        <div className="flex justify-center">
          <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#E7F5F1]">
            <Clock size={38} className="text-[#078D83]" />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5E6] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E9A23B]" />
            <span className="text-[10px] font-bold uppercase tracking-wide text-[#A66A16]">
              Verification Pending
            </span>
          </div>

          <h1 className="mt-4 text-[28px] font-bold leading-tight text-[#183C39]">
            Your profile is under review
          </h1>

          <p className="mx-auto mt-3 max-w-[430px] text-[12px] leading-6 text-gray-500">
            Thank you for registering with MediLink. Our verification
            team is reviewing your professional information and
            submitted documents.
          </p>
        </div>

        {/* Reference Number */}
        <div className="mt-7 rounded-xl border border-[#DDECE8] bg-[#F6FBF9] p-4">
          <p className="text-center text-[10px] font-medium uppercase tracking-wider text-gray-500">
            Application Reference Number
          </p>

          <p className="mt-2 text-center text-[20px] font-bold tracking-wider text-[#168078]">
            {referenceNumber}
          </p>

          <p className="mt-2 text-center text-[10px] text-gray-400">
            Please keep this reference number for future communication.
          </p>
        </div>

        {/* Verification Progress */}
        <div className="mt-7">
          <h3 className="mb-5 text-[13px] font-bold text-[#183C39]">
            Verification progress
          </h3>

          <div className="space-y-5">
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E7F5F1]">
                <CheckCircle2 size={19} className="text-[#078D83]" />
              </div>

              <div className="flex-1 pt-0.5">
                <p className="text-[12px] font-semibold text-[#183C39]">
                  Profile submitted
                </p>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Your professional information has been submitted successfully.
                </p>

                <span className="mt-1 inline-block text-[10px] font-semibold text-[#078D83]">
                  Completed
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF5E6]">
                <Clock size={19} className="text-[#D9962B]" />
              </div>

              <div className="flex-1 pt-0.5">
                <p className="text-[12px] font-semibold text-[#183C39]">
                  Document verification
                </p>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Our team is reviewing your medical license and
                  submitted identification documents.
                </p>

                <span className="mt-1 inline-block text-[10px] font-semibold text-[#C58A32]">
                  In review
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <UserCheck size={19} className="text-gray-400" />
              </div>

              <div className="flex-1 pt-0.5">
                <p className="text-[12px] font-semibold text-gray-500">
                  Account activation
                </p>

                <p className="mt-1 text-[10px] leading-5 text-gray-400">
                  Your doctor account will be ready after successful verification.
                </p>

                <span className="mt-1 inline-block text-[10px] font-medium text-gray-400">
                  Awaiting approval
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Review Time */}
        <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#E8EDEB] bg-white p-4">
          <ShieldCheck
            size={19}
            className="mt-0.5 shrink-0 text-[#078D83]"
          />

          <div>
            <p className="text-[12px] font-semibold text-[#183C39]">
              What happens next?
            </p>

            <p className="mt-1 text-[10px] leading-5 text-gray-500">
              Verification typically takes 1–2 business days.
              You will be notified when your application status changes.
            </p>
          </div>
        </div>

        {/* Submitted Documents */}
        <div className="mt-5 rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-2">
            <FileCheck size={17} className="text-[#078D83]" />

            <p className="text-[12px] font-semibold text-[#183C39]">
              Submitted for verification
            </p>
          </div>

          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500">Medical License</span>
              <span className="flex items-center gap-1 font-medium text-[#078D83]">
                <CheckCircle2 size={13} />
                Submitted
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500">Government ID</span>
              <span className="flex items-center gap-1 font-medium text-[#078D83]">
                <CheckCircle2 size={13} />
                Submitted
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-7 space-y-3">
          <button
            type="button"
            onClick={handleReviewProfile}
            className="flex h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#078D83] bg-white text-[12px] font-semibold text-[#078D83] transition hover:bg-[#F0F9F6]"
          >
            Review submitted profile
            <ArrowRight size={15} />
          </button>

          <button
            type="button"
            onClick={handleBackToLogin}
            className="flex h-[44px] w-full items-center justify-center rounded-lg bg-[#078D83] text-[12px] font-semibold text-white transition hover:bg-[#06766F]"
          >
            Back to sign in
          </button>
        </div>

        {/* Support */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-gray-500">
          <Mail size={13} />
          Need help?{" "}
          <a
            href="mailto:hello@krafticode.com"
            className="font-semibold text-[#078D83] hover:underline"
          >
            Contact support
          </a>
        </div>

        <p className="mt-5 text-center text-[10px] text-gray-400">
          © {new Date().getFullYear()} MediLink. All rights reserved.
        </p>
      </div>
    </AuthLayout>
  );
};

export default DoctorVerificationPending;
