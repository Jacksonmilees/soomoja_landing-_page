
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400">Last updated: July 25, 2024</p>
        </div>

        <div className="mt-12 space-y-8 text-gray-300 prose prose-invert prose-lg max-w-none">
            <section>
                <h2>Who We Are</h2>
                <p>
                    Our website address is: soomoja.com. We are developing an AI-powered smart shopping assistant platform designed to provide a seamless shopping experience.
                </p>
            </section>
            
            <section>
                <h2>Data Collection and Usage</h2>
                <p>
                    We collect information that you provide to us directly. For example, we collect information when you sign up for our waitlist, fill out a contact form, or otherwise communicate with us. The types of information we may collect include your name, email address, and any other information you choose to provide.
                </p>
                <p>
                    We use the information we collect to:
                </p>
                <ul>
                    <li>Provide, maintain, and improve our services;</li>
                    <li>Respond to your comments, questions, and requests;</li>
                    <li>Communicate with you about products, services, offers, and events offered by Soomoja;</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                </ul>
            </section>

            <section>
                <h2>Your Rights</h2>
                <p>
                    You have certain rights regarding the personal information we hold about you. These may include the right to access, correct, delete, or restrict the processing of your personal data.
                </p>
            </section>
            
            <section>
                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us through our contact form.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
