import React, { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../constant/config";
import HashLoading from "react-spinners/HashLoader";

import { motion as m } from "framer-motion";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ from: "", subject: "", text: "" });

  const handleSendGmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(URL + "/gmail/send", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.errors);
      }

      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <m.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="heading text-center">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-para">
            Got a technical issue? Want to send feedback about beta feature? Let
            us know
          </p>
        </m.div>
        <form onSubmit={handleSendGmail} className="space-y-8">
          <m.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              name="from"
              placeholder="example@gmail.com"
              className="form-input"
              value={formData.from}
              onChange={handleInputChange}
            />
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="subject" className="form-label">
              Your Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Let us know how can help you"
              className="form-input"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="sm:col-span-2"
          >
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              rows={6}
              type="text"
              id="message"
              name="text"
              value={formData.text}
              onChange={handleInputChange}
              placeholder="Leave a comment..."
              className="form-input"
            />
          </m.div>
          <m.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            type="submit"
            disabled={loading}
            className="btn rounded sm:w-fit"
          >
            {loading ? <HashLoading size={18} color="#ffffff" /> : " Submit"}
          </m.button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
