import SectionWrapper from './SectionWrapper';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-center text-3xl font-bold">Get in Touch</h2>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="mx-auto mt-10 grid max-w-2xl gap-6"
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="rounded-lg border border-gray-300 bg-white p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="rounded-lg border border-gray-300 bg-white p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          required
          className="rounded-lg border border-gray-300 bg-white p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
        ></textarea>

        <button
          type="submit"
          className="w-full rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send&nbsp;Message
        </button>
      </form>
    </SectionWrapper>
  );
}
