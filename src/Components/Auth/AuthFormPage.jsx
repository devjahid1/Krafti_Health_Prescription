
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { ArrowLeft, ArrowRight, Mail, LockKeyhole } from "lucide-react";

const AuthFormPage = ({
  eyebrow,
  title,
  description,
  fields = [],
  buttonText,
  footerText,
  footerLinkText,
  footerLink,
  onSubmit,
}) => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-between">
        <Link
          to="/login"
          className="flex items-center gap-1.5 text-[11px] font-medium text-[#168078] hover:text-[#10534F]"
        >
          <ArrowLeft size={14} />
          Back to sign in
        </Link>

        <span className="text-[11px] text-gray-500">
          MediLink Account
        </span>
      </div>

      <div className="mt-7">
        <p className="text-[11px] font-bold uppercase tracking-wide text-[#168078]">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight text-[#183C39]">
          {title}
        </h2>

        <p className="mt-2 text-[13px] leading-6 text-gray-500">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-2 block text-[12px] font-semibold text-[#183C39]"
            >
              {field.label}
            </label>

            <div className="relative">
              <input
                id={field.name}
                type={field.type || "text"}
                name={field.name}
                value={values[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required !== false}
                autoComplete={field.autoComplete}
                className="h-[43px] w-full rounded-lg border border-gray-200 bg-white px-4 text-[12px] text-[#183C39] outline-none transition placeholder:text-gray-400 focus:border-[#168078] focus:ring-2 focus:ring-[#168078]/10"
              />
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="flex h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#078D83] px-5 text-[12px] font-semibold text-white transition hover:bg-[#06766F]"
        >
          {buttonText}
          <ArrowRight size={15} />
        </button>
      </form>

      {footerText && (
        <p className="mt-6 text-center text-[11px] text-gray-500">
          {footerText}{" "}
          {footerLink && (
            <Link
              to={footerLink}
              className="font-semibold text-[#078D83] hover:text-[#10534F]"
            >
              {footerLinkText}
            </Link>
          )}
        </p>
      )}
    </AuthLayout>
  );
};

export default AuthFormPage;
