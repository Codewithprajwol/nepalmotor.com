import Link from "next/link";

const BACKGROUND_IMAGE_URL = "/geometric-pattern.svg"; // Changed to a more modern pattern

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-100 p-6">
      {/* Background with geometric pattern */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)",
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse"
          style={{ backgroundColor: "#00F3FF" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 animate-pulse"
          style={{ backgroundColor: "#008080" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 404 Number with gradient */}
        <h1
          className="text-8xl font-bold tracking-tighter sm:text-9xl md:text-[12rem] bg-gradient-to-br from-teal-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
          style={{
            background: `linear-gradient(135deg, #008080 0%, #00F3FF 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>

        {/* Error message */}
        <div
          className="mt-6 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-opacity-20"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderColor: "#008080",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-3 md:text-3xl"
            style={{ color: "#004D40" }}
          >
            Page Not Found
          </h2>
          <p
            className="max-w-md text-lg md:text-xl mb-6"
            style={{ color: "#374151" }}
          >
            The page you're looking for seems to have wandered off into the
            digital void.
          </p>

          {/* CTA Button */}
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-300"
            style={{
              backgroundColor: "#008080",
              boxShadow: "0 4px 15px rgba(0, 243, 255, 0.4)",
            }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>
        </div>

        {/* Additional help text */}
        <p
          className="mt-8 text-base md:text-lg opacity-80"
          style={{ color: "#6B7280" }}
        >
          Need help? Try checking the URL or{" "}
          <Link
            href="/contact"
            className="font-medium underline transition-colors hover:no-underline focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded"
            style={{ color: "#008080" }}
          >
            contact support
          </Link>
        </p>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{ backgroundColor: "#004D40" }}
      />
    </main>
  );
}
