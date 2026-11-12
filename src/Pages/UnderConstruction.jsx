
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F5FAFA] px-5 py-12">

      {/* Background Decorations */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#00BFAF]/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#00A99D]/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Animated Construction Icon */}
        <div className="relative mx-auto mb-8 flex h-44 w-44 items-center justify-center">

          <div className="absolute inset-0 animate-ping rounded-full border border-[#00A99D]/20 opacity-30" />

          <div className="absolute inset-3 animate-pulse rounded-full bg-[#00A99D]/10" />

          <div className="relative flex h-32 w-32 animate-float items-center justify-center rounded-[35px] bg-white shadow-xl shadow-[#009B95]/10">

            <svg
              className="h-20 w-20 text-[#009B95]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10L91 82H9L50 10Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <path
                d="M50 36V57"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <circle cx="50" cy="70" r="4" fill="currentColor" />
            </svg>
          </div>

          {/* Floating Tools */}
          <div className="absolute -right-1 top-5 flex h-11 w-11 animate-bounce items-center justify-center rounded-2xl bg-[#009B95] text-white shadow-lg">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 12l-2-2 2.7-3.7Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="absolute -bottom-1 -left-2 flex h-10 w-10 animate-pulse items-center justify-center rounded-xl bg-[#D9F7F3] text-[#009B95] shadow-md">
            <span className="text-xl font-bold">+</span>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#009B95]/20 bg-[#E7F8F6] px-4 py-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#009B95] opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#009B95]" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[2px] text-[#007F7A]">
            Work in Progress
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-[#202D35] sm:text-5xl md:text-6xl">
          Under <span className="text-[#009B95]">Construction</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
          We're working hard to bring you something amazing.
          This page is currently under development and will be
          available soon. Thank you for your patience!
        </p>

        {/* Animated Progress Bar */}
        <div className="mx-auto mt-9 max-w-xs">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold text-[#64748B]">
            <span>Building something great</span>
            <span className="text-[#009B95]">Coming Soon</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#DDEBEA]">
            <div className="h-full w-2/3 animate-progress rounded-full bg-gradient-to-r from-[#00BFAF] to-[#007F7A]" />
          </div>
        </div>

        {/* Back Button */}
        <a
          href="https://kraftihealth.tech"
          className="group mt-10 inline-flex items-center justify-center gap-3 rounded-xl bg-[#009B95] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#009B95]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#007F7A] hover:shadow-xl"
        >
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Website
        </a>

        {/* Footer */}
        <p className="mt-12 text-xs text-[#94A3B8]">
          Powered by <span className="font-bold text-[#009B95]">MediLink</span>
          <span className="mx-2">·</span>
          Better Healthcare, Connected.
        </p>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes progress {
          0% { width: 10%; }
          50% { width: 85%; }
          100% { width: 10%; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-progress {
          animation: progress 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default UnderConstruction;
