"use client";

import { motion } from "framer-motion";
import MouseGlow from "../Hero/MouseGlow";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

import {
  MdPerson,
  MdEmail,
} from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative h-screen flex items-center overflow-hidden border-t border-blue-100 bg-[radial-gradient(circle_at_top_left,#dbeafe,white_45%,#eff6ff_75%,white)]"
    >
      {/* Mouse Glow */}
      <MouseGlow />

      {/* Floating Blobs */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[180px]"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-sky-300/20 blur-[170px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Me
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>

          <p className="mt-3 text-gray-600 text-base">
            Let's build something amazing together.
          </p>

        </motion.div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-4 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center h-full"
          >

          <div className="relative flex justify-center items-center">

  {/* Main Blue Glow */}
  <div className="absolute w-[360px] h-[360px] rounded-full bg-blue-500/15 blur-[100px]"></div>

  {/* Secondary Glow */}
  <div className="absolute w-[260px] h-[260px] rounded-full bg-sky-300/20 blur-[70px]"></div>

  {/* Image */}
  <img
    src="/images/contact.png"
    alt="Contact Illustration"
    className="relative z-10 w-[300px] lg:w-[330px] object-contain transition-all duration-500 hover:scale-105"
  />

</div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >

            <form
              action="https://formsubmit.co/shafreenshahnaz@gmail.com"
              method="POST"
              className="bg-white/90 backdrop-blur-md rounded-3xl border border-blue-100 p-6 shadow-[0_15px_35px_rgba(37,99,235,0.12)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)] transition-all duration-300"
            >

              {/* Name */}

              <label className="font-semibold text-gray-800">
                Name
              </label>

              <div className="relative mt-2 mb-6">

                <MdPerson className="absolute left-4 top-4 text-blue-600 text-xl" />

                <input
  type="text"
  name="name"
  required
  placeholder="Enter your name"
  className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-blue-600 outline-none transition"
/>

              </div>

              {/* Email */}

              <label className="font-semibold text-gray-800">
                Email Address
              </label>

              <div className="relative mt-2 mb-6">

                <MdEmail className="absolute left-4 top-4 text-blue-600 text-xl" />

                <input
  type="email"
  name="email"
  required
  placeholder="Enter your email"
  className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-blue-600 outline-none transition"
/>

              </div>

              {/* Message */}

              <label className="font-semibold text-gray-800">
                Message
              </label>

            <textarea
  rows={3}
  name="message"
  required
  placeholder="Write your message..."
  className="w-full mt-2 rounded-xl border border-gray-300 p-4 resize-none focus:border-blue-600 outline-none transition"
></textarea>
                            {/* Send Button */}

              <div className="mt-5">

                <button
  type="submit"
  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg shadow-lg hover:shadow-[0_15px_35px_rgba(37,99,235,0.35)] hover:scale-[1.02] transition-all duration-300"
>
  Let's Connect 🚀
</button>

              </div>

              {/* Contact Buttons */}

              <div className="grid grid-cols-2 gap-3 mt-5">

                <a
                  href="tel:+916379787704"
                  className="flex items-center justify-center gap-3 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaPhoneAlt />
                  Phone
                </a>

                <a
                  href="https://wa.me/916379787704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-2.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>

                <a
                  href="mailto:shafreenshahnaz@gmail.com"
                  className="flex items-center justify-center gap-3 py-2.5 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaEnvelope />
                  Email
                </a>

                <a
                  href="https://github.com/Shafreen7kadhija"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-2.5 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black hover:-translate-y-1 transition-all duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}