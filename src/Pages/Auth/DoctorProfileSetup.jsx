
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  FileCheck2,
  MapPin,
  ShieldCheck,
  X,
} from "lucide-react";
import AuthLayout from "../../Components/Auth/AuthLayout";

const inputClass =
  "h-[43px] w-full rounded-lg border border-[#E1E9E7] bg-white px-3 text-[12px] text-[#183C39] outline-none transition placeholder:text-[#A0AEAB] focus:border-[#078D83] focus:ring-2 focus:ring-[#078D83]/10";

const labelClass =
  "mb-2 block text-[11px] font-semibold text-[#183C39]";

const DoctorProfileSetup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const registrationData = location.state || {};

  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");

  const [documents, setDocuments] = useState({
    medicalLicense: null,
    governmentId: null,
  });

  const [formData, setFormData] = useState({
    professionalName: [
      registrationData.firstName,
      registrationData.lastName,
    ]
      .filter(Boolean)
      .join(" "),
    phone: "",
    designation: "",
    department: "",
    qualifications: "",
    experience: "",
    email: registrationData.email || "",
    bmdcNumber: "",
    practiceAddress: "",
  });

  useEffect(() => {
    if (!photo) {
      setPhotoPreview("");
      return;
    }

    const url = URL.createObjectURL(photo);
    setPhotoPreview(url);

    return () => URL.revokeObjectURL(url);
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

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Please upload a JPG or PNG image.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Profile photo must be 5 MB or less.");
      e.target.value = "";
      return;
    }

    setPhoto(file);
  };

  const handleDocumentChange = (e, documentType) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF, JPG and PNG files are allowed.");
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Each document must be 10 MB or less.");
      e.target.value = "";
      return;
    }

    setDocuments((prev) => ({
      ...prev,
      [documentType]: file,
    }));
  };

  const removeDocument = (documentType) => {
    setDocuments((prev) => ({
      ...prev,
      [documentType]: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!documents.medicalLicense || !documents.governmentId) {
      alert("Please upload both required verification documents.");
      return;
    }

    navigate("/doctor-verification-pending", {
      state: {
        ...formData,
        photo,
        medicalLicense: documents.medicalLicense,
        governmentId: documents.governmentId,
      },
    });
  };

  const handleSaveDraft = () => {
    // Demo only: draft is not persisted to a backend.
    alert("Draft saved for this demo session.");
  };

  const renderDocument = (type, label) => {
    const file = documents[type];

    return (
      <div className="min-w-0 rounded-lg border border-[#DCE8E4] bg-[#F1F7F5] p-3">
        {file ? (
          <div className="flex items-center gap-2">
            <FileCheck2
              size={19}
              className="shrink-0 text-[#078D83]"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold text-[#183C39]">
                {label}
              </p>
              <p className="truncate text-[9px] text-[#82938F]">
                {file.name}
              </p>
            </div>

            <button
              type="button"
              onClick={() => removeDocument(type)}
              className="shrink-0 text-[#718681] hover:text-red-500"
              aria-label={`Remove ${label}`}
            >
              <X size={15} />
            </button>
          </div>
        ) : (
          <label className="flex cursor-pointer items-center gap-2">
            <FileCheck2
              size={19}
              className="shrink-0 text-[#078D83]"
            />

            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-semibold text-[#183C39]">
                {label}
              </span>
              <span className="mt-1 block text-[9px] text-[#82938F]">
                Upload PDF, JPG or PNG
              </span>
            </span>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) => handleDocumentChange(e, type)}
            />
          </label>
        )}
      </div>
    );
  };

  return (
    <AuthLayout variant="doctor" contentClassName="max-w-[850px]">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-[11px] font-medium text-[#078D83]"
        >
          <ArrowLeft size={13} />
          Back to MediLink
        </Link>

        <span className="text-[11px] text-[#82938F]">
          Doctor portal
        </span>
      </div>

      {/* Heading */}
      <div className="mt-6">
        <p className="text-[10px] font-bold uppercase tracking-wide text-[#078D83]">
          Doctor / Professional profile
        </p>

        <h1 className="mt-4 text-[30px] font-bold leading-tight tracking-tight text-[#183C39]">
          Introduce your expertise
        </h1>

        <p className="mt-2 text-[13px] text-[#7C918D]">
          Tell patients about you and provide your credentials for verification.
        </p>
      </div>

      {/* Photo Upload */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E7F5F1] text-[12px] font-semibold text-[#078D83]">
          {photoPreview ? (
            <img
              src={photoPreview}
              alt="Doctor profile"
              className="h-full w-full object-cover"
            />
          ) : (
            "DR"
          )}
        </div>

        <div className="min-w-0">
          <label className="flex cursor-pointer items-center gap-1.5 text-[11px] font-semibold text-[#078D83]">
            <Camera size={14} />
            {photo ? "Change professional photo" : "Upload professional photo"}
            <input
              type="file"
              accept="image/png,image/jpeg"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>

          <p className="mt-1 text-[10px] text-[#82938F]">
            A clear headshot · JPG or PNG, up to 5 MB
          </p>
        </div>

        <span className="rounded-full bg-[#F1F7F5] px-3 py-2 text-[10px] font-semibold text-[#718681]">
          Step 2 of 3
        </span>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Professional Name & Phone */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Full professional name</label>
            <input
              name="professionalName"
              value={formData.professionalName}
              onChange={handleChange}
              placeholder="Enter your professional name"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>Phone number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={inputClass}
              required
            />
          </div>
        </div>

        {/* Designation & Department */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Designation</label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Select designation</option>
              <option value="General Practitioner">General Practitioner</option>
              <option value="Consultant">Consultant</option>
              <option value="Specialist">Specialist</option>
              <option value="Senior Consultant">Senior Consultant</option>
              <option value="Professor">Professor</option>
              <option value="Surgeon">Surgeon</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Department</label>
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="e.g. Cardiology"
              className={inputClass}
              required
            />
          </div>
        </div>

        {/* Qualifications & Experience */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Qualifications</label>
            <input
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              placeholder="e.g. MBBS, MD"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>Experience</label>
            <input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g. 5 years"
              className={inputClass}
              required
            />
          </div>
        </div>

        {/* Email & BMDC */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your professional email"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>BMDC number</label>
            <input
              name="bmdcNumber"
              value={formData.bmdcNumber}
              onChange={handleChange}
              placeholder="Enter your BMDC registration number"
              className={inputClass}
              required
            />
          </div>
        </div>

        {/* Practice Address */}
        <div>
          <label className={labelClass}>Practice address</label>

          <div className="relative">
            <input
              name="practiceAddress"
              value={formData.practiceAddress}
              onChange={handleChange}
              placeholder="Enter your clinic or hospital address"
              className={`${inputClass} pr-10`}
              required
            />

            <MapPin
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718681]"
            />
          </div>
        </div>

        {/* Verification Documents */}
        <div>
          <label className={labelClass}>Verification documents</label>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {renderDocument("medicalLicense", "Medical license")}
            {renderDocument("governmentId", "Government-issued ID")}
          </div>

          <p className="mt-2 text-[10px] leading-5 text-[#82938F]">
            PDF, JPG or PNG · Up to 10 MB each · Stored securely and used only for verification.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="h-[43px] rounded-lg border border-[#DCE8E4] px-5 text-[12px] font-semibold text-[#183C39] transition hover:bg-[#F5F9F7]"
          >
            Save as draft
          </button>

          <button
            type="submit"
            className="flex h-[43px] items-center justify-center gap-2 rounded-lg bg-[#078D83] px-5 text-[12px] font-semibold text-white transition hover:bg-[#06766F]"
          >
            <ArrowRight size={15} />
            Submit for verification
          </button>
        </div>
      </form>

      <p className="mt-5 text-[10px] leading-5 text-[#82938F]">
        By submitting, you confirm your information is accurate and your license is current.
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between text-[10px] text-[#82938F]">
        <span>Need a hand? support@medilink.com</span>
        <Link to="/help-support" className="text-[#078D83]">
          Help center ↗
        </Link>
      </div>
    </AuthLayout>
  );
};

export default DoctorProfileSetup;
