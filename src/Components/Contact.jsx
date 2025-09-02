import React from "react";

const Contact = () => {
  const email = "manaskhude5@gmail.com";
  const phone = "919702700849"; // With country code, no +

  // Default message
  const defaultMessage =
    "Hello 👋, I visited your portfolio and would like to connect with you.";

  // Generate links
  const emailLink = `mailto:${email}?subject=Portfolio Contact&body=${encodeURIComponent(
    defaultMessage
  )}`;
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
        Contact Me
      </h1>

      {/* Contact Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <p className="text-gray-600 mb-6">
          Reach out easily via Email or WhatsApp for any inquiries or
          collaborations.
        </p>

        <div className="flex flex-col gap-4">
          {/* Email Button */}
          <a
            href={emailLink}
            className="bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition font-medium"
          >
            Send Email
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-medium"
          >
            Send WhatsApp Message
          </a>
        </div>

        {/* Extra contact info */}
        <div className="mt-6 text-gray-700 space-y-2">
          <p>
            Email:{" "}
            <a
              href={`mailto:${email}`}
              className="text-green-700 hover:underline"
            >
              {email}
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href={whatsappLink}
              className="text-green-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +{phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
