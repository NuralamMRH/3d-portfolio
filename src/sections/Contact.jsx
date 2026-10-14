import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_7ilzpz7",
        "template_fh0aerp",
        {
          from_name: formData.name,
          to_name: "MD Nuralam",
          from_email: formData.email,
          to_email: "nuralammrh2@gmail.com",
          message: formData.message,
        },
        { publicKey: "2oWYMZBv6nuDrVyRb" }
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showAlertMessage("danger", "Something went wrong! Please email directly at nuralammrh2@gmail.com");
    }
  };

  return (
    <section id="contact" className="relative flex flex-col items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Contact Info Column */}
        <div className="md:col-span-2 flex flex-col gap-6 p-6 rounded-2xl bg-primary/80 border border-white/10 backdrop-blur-md">
          <div>
            <h2 className="text-heading">Let&apos;s Talk</h2>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              Whether you&apos;re looking to build a new platform, integrate AI models, or deliver high-performance cross-platform mobile apps, I&apos;m ready to help.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <a
              href="mailto:nuralammrh2@gmail.com"
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-lavender/50 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-lavender/20 text-lavender group-hover:scale-110 transition-transform">
                ✉
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-neutral-400">Direct Email</p>
                <p className="text-xs sm:text-sm font-semibold text-white truncate">
                  nuralammrh2@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/md-nuralam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-lavender/50 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-royal/20 text-royal group-hover:scale-110 transition-transform">
                💼
              </div>
              <div>
                <p className="text-xs text-neutral-400">LinkedIn Profile</p>
                <p className="text-sm font-semibold text-white">
                  linkedin.com/in/md-nuralam
                </p>
              </div>
            </a>

            <a
              href="https://www.rancoded.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-lavender/50 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-mint/20 text-mint group-hover:scale-110 transition-transform">
                🌐
              </div>
              <div>
                <p className="text-xs text-neutral-400">Software Brand & Works</p>
                <p className="text-sm font-semibold text-white">
                  rancoded.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sand/20 text-sand">
                📍
              </div>
              <div>
                <p className="text-xs text-neutral-400">Location</p>
                <p className="text-sm font-semibold text-white">
                  Dhaka, Bangladesh (Remote Worldwide)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="md:col-span-3 flex flex-col p-6 sm:p-8 border border-white/10 rounded-2xl bg-primary/80 backdrop-blur-md">
          <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
          <p className="text-xs text-neutral-400 mb-6">
            Fill out the form below and I&apos;ll get back to you within 24 hours.
          </p>

          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="field-label text-neutral-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="field-label text-neutral-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="johndoe@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="field-label text-neutral-300">
                Project Details / Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Tell me about your project, goals, and timeline..."
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 text-base font-semibold text-center text-white rounded-xl cursor-pointer bg-gradient-to-r from-royal to-lavender hover:shadow-[0_0_20px_rgba(122,87,219,0.5)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50"
            >
              {!isLoading ? "Send Message 🚀" : "Sending Message..."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
