import emailjs from '@emailjs/browser';
import useDocumentTitle from '@src/hooks/use-document-title';

import { useState } from 'react';

import Button from '../components/atoms/button/button';

export default function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = 'service_3uf4pjf';
  const TEMPLATE_ID = 'template_1wa0pcu';
  const PUBLIC_KEY = '11lPnglnBN8FXElMe';

  useDocumentTitle('Contact | Enactus UNSW');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: `${firstName} ${lastName}`,
          email: email,
          message: message,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );
      setSubmitted(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <header className="pb-10 pt-20">
        <h1 className="mb-8 text-5xl font-bold">Contact Us</h1>
        <h3 className="text-2xl font-semibold">
          Email:
          <span className="font-normal"> it@enactusunsw.org</span>
        </h3>
      </header>
      <div className="flex justify-center">
        <form
          className="w-full max-w-lg rounded-xl bg-white bg-opacity-10 p-8 shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-6 flex gap-4">
            <div className="flex-1">
              <label
                className="mb-2 block text-left text-lg font-semibold"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                disabled={loading}
              />
            </div>
            <div className="flex-1">
              <label
                className="mb-2 block text-left text-lg font-semibold"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
                disabled={loading}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-left text-lg font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-left text-lg font-semibold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="min-h-[120px] w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            />
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {submitted ? (
            <div className="mb-4 text-xl font-semibold text-green-600">
              Thank you for contacting us! We'll get back to you soon.
            </div>
          ) : (
            <Button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
