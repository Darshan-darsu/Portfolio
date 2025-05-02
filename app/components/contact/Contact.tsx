import React, { useState } from "react";
import Button from "@/app/ui-component/Button";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactInfo({ ...contactInfo, [name]: value });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!contactInfo.email || !contactInfo.name || !contactInfo.message) {
      setToast({
        message: "Please fill all mandatory fields.",
        type: "error",
      });
      RemoveToast();
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_je8yaz9",
        "template_tk2f1y9",
        {
          name: contactInfo.name,
          email: contactInfo.email,
          message: contactInfo.message,
        },
        "iG-IVPUUnGlDTj-z-"
      )
      .then(() => {
        console.log("Email sent successfully!");
        setToast({
          message: "Thanks for reaching out! I'll get back to you soon.",
          type: "success",
        });
        setContactInfo({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        setToast({
          message: "Oops! Something unexpected happened.",
          type: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });

    RemoveToast();
  };

  // Hide the toast after 3 seconds
  function RemoveToast() {
    return setTimeout(() => {
      setToast(null);
    }, 3000);
  }
  return (
    <section id="contact" className="bg-background">
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center gap-2 px-6 py-2 rounded-md shadow-lg text-white transition transform ease-in-out duration-300
    ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          <div className="bg-white p-2 rounded-full">
            {toast.type === "success" ? (
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>

          {/* Message */}
          <span className=" font-normal text-sm">{toast.message}</span>
        </div>
      )}

      <h1 className="text-fontcolor text-center text-2xl font-extrabold py-2">
        Contact Me
      </h1>
      <p className="text-fontcolor">
        I am always open to new opportunities and discussions. Please reach out
        with any questions or project proposals, and I will respond as soon as
        possible.
      </p>

      <div className="flex flex-col gap-6 my-2">
        <input
          type="text"
          name="name"
          className="bg-background border-2 border-foreground  px-4 py-3 opacity-95  shadow-lg rounded-lg outline-none focus:border-x-8 focus:border-y-2 focus:border-lightcolor"
          placeholder="Name *"
          value={contactInfo.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="bg-background border-2 border-foreground px-4 py-3 opacity-95  shadow-lg rounded-lg outline-none focus:border-x-8 focus:border-y-2 focus:border-lightcolor"
          placeholder="Email *"
          value={contactInfo.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          className="bg-background border-2 border-foreground px-4 py-3 opacity-95  shadow-lg rounded-lg outline-none focus:border-x-8 focus:border-y-2 focus:border-lightcolor"
          placeholder="Message *"
          rows={3}
          value={contactInfo.message}
          onChange={handleChange}
        />
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-white animate-spin"></div>
            </div>
          </div>
        ) : (
          <Button
            className="px-6 py-2 text-fontcolor rounded-lg border-2 border-bordercolor  hover:bg-lightcolor "
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
      </div>
    </section>
  );
};
export default Contact;
