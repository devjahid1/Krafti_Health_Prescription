
import bg from "../../assets/Login_page/login_rightside_bg.png";
import { Plus, ShieldCheck } from "lucide-react";

const AuthLeftPanel = ({ variant = "patient" }) => {
  const isDoctor = variant === "doctor";

  return (
    <section
      className="
        relative hidden h-screen w-[520px] shrink-0
        flex-col overflow-hidden bg-[#10534F]
        px-8 py-8 text-white lg:flex
        min-[1600px]:px-10 min-[1600px]:py-10
      "
    >
      {/* Logo */}
      <div className="flex shrink-0 items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#078D83]">
          <Plus size={27} strokeWidth={2.8} />
        </div>

        <div>
          <h1 className="text-[22px] font-bold tracking-tight">
            MediLink
          </h1>
          <p className="text-[10px] tracking-[3px] text-white/70">
            HEALTHCARE PLATFORM
          </p>
        </div>
      </div>

      {/* Hero Content */}
      <div className="mt-10 shrink-0 min-[1600px]:mt-12">
        <p className="text-[10px] font-medium uppercase tracking-wide text-white/60">
          {isDoctor
            ? "For healthcare professionals"
            : "Care that fits your life"}
        </p>

        <h2 className="mt-4 max-w-[420px] text-[30px] font-bold leading-[1.2] tracking-tight min-[1600px]:text-[34px]">
          {isDoctor
            ? "More time for care. Less time on admin."
            : "Good care starts with a connection."}
        </h2>

        <p className="mt-4 max-w-[410px] text-[13px] leading-6 text-white/75">
          {isDoctor
            ? "A calmer way to manage your practice, appointments, and availability."
            : "Find a trusted doctor, book with confidence, and keep your care in one place."}
        </p>
      </div>

      {/* Hero Image */}
      <div className="mt-7 w-full flex-none overflow-hidden rounded-xl border-2 border-[#078D83]">
        <img
          src={bg}
          alt="Doctor consulting with a patient"
          className="h-[320px] w-full object-cover object-center min-[1600px]:h-[280px]"
        />
      </div>

      {/* Trust Information */}
      <div className="mt-7 flex shrink-0 items-start gap-3">
        <ShieldCheck
          size={18}
          className="mt-0.5 shrink-0 text-[#A9D8D1]"
        />

        <div>
          <p className="text-[12px] font-semibold">
            Private by design. Human by nature.
          </p>

          <p className="mt-1 text-[10px] text-white/60">
            Secure health information · Verified professionals
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-auto pt-6 text-[10px] text-white/50">
        © 2026 MediLink · Privacy · Terms
      </div>
    </section>
  );
};

export default AuthLeftPanel;
