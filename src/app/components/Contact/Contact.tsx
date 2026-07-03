export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-white">

      <div className="max-w-4xl mx-auto px-8">

        <h1 className="text-5xl font-bold text-center mb-16">
          Contact Me
        </h1>

        <div className="bg-gray-100 p-10 rounded-xl shadow-lg">

          <p className="text-xl">
            📧 Email:
          </p>

          <p className="text-blue-600 mb-6">
            shafreenshahnaz@gmail.com
          </p>

          <p className="text-xl">
            📱 Phone:
          </p>

          <p className="mb-6">
            +91 63797 87704
          </p>

          <p className="text-xl">
            📍 Location:
          </p>

          <p className="mb-6">
            Tamil Nadu, India
          </p>

          <p className="text-xl">
            💻 GitHub:
          </p>

          <a
            href="https://github.com/Shafreen7kadhija"
            target="_blank"
            className="text-blue-600"
          >
            github.com/Shafreen7kadhija
          </a>

        </div>

      </div>

    </section>
  );
}