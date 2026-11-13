
import AuthLeftPanel from "./AuthLeftPanel";

const AuthLayout = ({
  children,
  contentClassName = "",
  variant = "patient",
}) => {
  return (
    <main className="min-h-screen w-full bg-white lg:h-screen lg:overflow-hidden">
      <div className="flex min-h-screen lg:h-screen lg:min-h-0">
        {/* Common Left Panel */}
        <AuthLeftPanel variant={variant} />

        {/* Dynamic Right Panel */}
        <section className="flex min-w-0 flex-1 items-center justify-center px-5 py-8 sm:px-10 lg:h-screen lg:overflow-y-auto lg:px-10 lg:py-6 min-[1600px]:px-16">
          <div className={`w-full ${contentClassName || "max-w-[560px]"}`}>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthLayout;
