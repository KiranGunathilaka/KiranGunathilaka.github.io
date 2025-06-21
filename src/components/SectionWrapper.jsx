// SectionWrapper.jsx
export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 bg-white dark:bg-gray-900 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
