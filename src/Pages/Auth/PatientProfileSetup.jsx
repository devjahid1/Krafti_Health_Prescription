
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CalendarDays,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import AuthLayout from "../../Components/Auth/AuthLayout";

const inputClass =
  "h-[43px] w-full rounded-lg border border-[#E1E9E7] bg-white px-3 text-[12px] text-[#183C39] outline-none transition placeholder:text-[#A0AEAB] focus:border-[#078D83] focus:ring-2 focus:ring-[#078D83]/10";

const labelClass =
  "mb-1.5 block text-[10px] font-semibold text-[#183C39]";

const PatientProfileSetup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const registrationData = location.state || {};

  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [appointmentReminders, setAppointmentReminders] = useState(true);

  const [formData, setFormData] = useState({
    firstName: registrationData.firstName || "Nadia",
    lastName: registrationData.lastName || "Sullivan",
    dateOfBirth: "1992-03-14",
    gender: "Female",
    phone: "+1 (212) 555-0148",
    language: "English",
    city: "New York",
    zipCode: "10023",
    allergies: "No known drug allergies",
  });

  useEffect(() => {
    if (!photo) {
      setPhotoPreview("");
      return;
    }

    const previewUrl = URL.createObjectURL(photo);
    setPhotoPreview(previewUrl);

    return () => URL.revokeObjectURL(previewUrl);
  }, [photo]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Photo size must be 5 MB or less.");
      return;
    }

    setPhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo navigation. Save profile data through your API later.
    navigate("/find-doctor", {
      state: {
        ...formData,
        photo,
        appointmentReminders,
      },
    });
  };

  const initials = `${formData.firstName?.[0] || "N"}${
    formData.lastName?.[0] || "S"
  }`;

  return (
    <AuthLayout contentClassName="max-w-[650px]">
      {/* Top navigation */}
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
      <div className="mt-5">
        <p className="text-[9px] font-bold uppercase tracking-wide text-[#078D83]">
          Patient / Complete your profile
        </p>

        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#E8F5F1] px-2.5 py-1 text-[9px] font-semibold text-[#078D83]">
          <ShieldCheck size={11} />
          Account created · Email verified
        </div>

        <h1 className="mt-2 text-[27px] font-bold leading-tight tracking-tight text-[#183C39]">
          Let’s get to know you
        </h1>

        <p className="mt-1.5 text-[11px] text-[#7C918D]">
          A few details help your doctor prepare for more personal care.
        </p>
      </div>

      {/* Profile photo */}
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E8F5F1] text-[13px] font-semibold text-[#078D83]">
          {photoPreview ? (
            <img
              src={photoPreview}
              alt="Profile preview"
              className="h-full w-full object-cover"
            />
          ) : (
            initials
          )}
        </div>

        <div>
          <label className="flex cursor-pointer items-center gap-1.5 text-[10px] font-semibold text-[#078D83] hover:text-[#10534F]">
            <Camera size={13} />
            {photo ? "Change profile photo" : "Upload a profile photo"}
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </label>

          <p className="mt-1 text-[9px] text-[#8A9B97]">
            Optional · JPG or PNG, up to 5 MB
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        {/* Name */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>First name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={inputClass}
              placeholder="First name"
              required
            />
          </div>

          <div>
            <label className={labelClass}>Last name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={inputClass}
              placeholder="Last name"
              required
            />
          </div>
        </div>

        {/* Date and gender */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Date of birth</label>
            <div className="relative">
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`${inputClass} pr-9`}
                required
              />
              <CalendarDays
                size={13}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#718681]"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Select gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Phone and language */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Phone number</label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`${inputClass} pr-9`}
                placeholder="Enter phone number"
                required
              />
              <Phone
                size={13}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718681]"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Preferred language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
              <option value="Hindi">Hindi</option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>
        </div>

        {/* City and ZIP */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter your city"
            />
          </div>

          <div>
            <label className={labelClass}>ZIP code</label>
            <input
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter ZIP code"
            />
          </div>
        </div>

        {/* Allergies */}
        <div>
          <label className={labelClass}>
            Known allergies (optional)
          </label>
          <input
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. No known allergies"
          />
          <p className="mt-1 text-[9px] text-[#8A9B97]">
            You can add more health information in your profile later.
          </p>
        </div>

        {/* Reminder */}
        <label className="flex cursor-pointer items-center gap-2 pt-0.5 text-[10px] text-[#526A65]">
          <input
            type="checkbox"
            checked={appointmentReminders}
            onChange={(e) => setAppointmentReminders(e.target.checked)}
            className="h-3 w-3 accent-[#078D83]"
          />
          Send me appointment reminders by email and SMS.
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="flex h-[42px] items-center justify-center gap-2 rounded-lg bg-[#078D83] px-5 text-[11px] font-semibold text-white transition hover:bg-[#06766F]"
        >
          <ArrowRight size={14} />
          Save profile & find a doctor
        </button>
      </form>

      {/* Privacy notice */}
      <div className="mt-3 flex items-start gap-2.5 rounded-lg bg-[#E8F5F1] px-3 py-3">
        <ShieldCheck
          size={15}
          className="mt-0.5 shrink-0 text-[#078D83]"
        />

        <div>
          <p className="text-[10px] font-semibold text-[#183C39]">
            Only shared with your care team
          </p>
          <p className="mt-1 text-[9px] leading-4 text-[#7C918D]">
            Your profile helps doctors deliver safer, more informed care.
            You control your health information.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between gap-3 text-[9px] text-[#82938F]">
        <span>Need a hand? support@medilink.com</span>
        <Link to="/help" className="shrink-0 text-[#078D83] hover:underline">
          Help center ↗
        </Link>
      </div>
    </AuthLayout>
  );
};

export default PatientProfileSetup;
