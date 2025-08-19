
import React from 'react';

const WaitlistPage: React.FC = () => {
  const interests = ['Price Tracking', 'AI Recommendations', 'Deal Alerts', 'Comparison Tool'];

  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Join the <span className="gradient-text">Future of Shopping</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Be the first to experience Soomoja. Sign up for our waitlist to get early access and exclusive updates.
        </p>
      </div>

      <div className="max-w-xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name-waitlist" className="block text-sm font-medium text-gray-300">Full Name</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name-waitlist"
                  autoComplete="name"
                  className="block w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email-waitlist" className="block text-sm font-medium text-gray-300">Email</label>
              <div className="mt-1">
                <input
                  id="email-waitlist"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">What are you most interested in?</label>
              <fieldset className="mt-2">
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest} className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id={interest}
                          name="interests"
                          type="checkbox"
                          className="focus:ring-[#00d4aa] h-4 w-4 text-[#00d4aa] bg-white/10 border-white/30 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor={interest} className="font-medium text-gray-300">
                          {interest}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#00d4aa] to-[#ff6b35] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[#00d4aa]"
              >
                Join the Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;
