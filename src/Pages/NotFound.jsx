
const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5FAFA] px-5">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-[#009B95]">404</h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <a
          href="https://kraftihealth.tech"
          className="mt-7 inline-block rounded-xl bg-[#009B95] px-6 py-3 font-semibold text-white transition hover:bg-[#007F7A]"
        >
          Back to Website
        </a>
      </div>
    </div>
  );
};

export default NotFound;
