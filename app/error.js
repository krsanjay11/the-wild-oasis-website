// This works for all errors and exceptions that happen anywhere in the app but only in rendering. so any errors that hapens in a callback functions will not be caught by react error boundary
// This error.js boundary does not caught errors that might happen in a root layout. we can create global-error.js then we can replace the entire layout even the root layout will then be gone.

"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
