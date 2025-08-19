
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`dark:bg-white/5 bg-white/80 backdrop-blur-md border dark:border-white/10 border-gray-200/50 rounded-2xl p-6 transition-all duration-300 hover:dark:border-white/20 hover:border-gray-300 hover:dark:bg-white/10 ${className}`}>
    {children}
  </div>
);

const Section: React.FC<{ children: React.ReactNode, id: string, className?: string }> = ({ children, id, className = '' }) => (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </section>
);

const HeroSection: React.FC = () => (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col">
        <div className="flex-grow flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left animate-fadeInUp">
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tighter">
                            Empowering<br/>
                            <span className="text-[#00d4aa]">Seamless</span>—<br/>
                            Shopping Experience
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-gray-600 dark:text-gray-300">
                            Save <span className="text-[#00d4aa] font-medium">Money</span>, <span className="text-[#00d4aa] font-medium">Time</span> and <span className="text-[#00d4aa] font-medium">Energy</span> with our intelligent shopping assistant.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start gap-4">
                            <Link to="/blog" className="px-6 py-3 bg-[#00d4aa] text-black font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                                Learn from our Articles
                            </Link>
                            <Link to="/contact" className="px-6 py-3 bg-transparent text-gray-800 dark:text-white font-semibold rounded-lg border border-black/20 dark:border-white/40 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <GlassCard className="p-6">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#00d4aa]"></span>
                                    <h2 className="font-semibold text-gray-900 dark:text-white">Development Status</h2>
                                </div>
                                <span className="text-xs bg-[#00d4aa]/10 text-[#00d4aa] font-medium px-2 py-1 rounded-full">Early Development</span>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                                    <span>Overall Progress</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">19%</span>
                                </div>
                                <div className="mt-1 bg-black/10 dark:bg-white/10 rounded-full h-2 w-full">
                                    <div className="bg-[#00d4aa] h-2 rounded-full" style={{width: '19%'}}></div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="bg-black/10 dark:bg-black/30 p-4 rounded-lg text-center md:text-left">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Development Phase</p>
                                    <p className="font-bold text-gray-900 dark:text-white mt-1">Foundation</p>
                                </div>
                                 <div className="bg-black/10 dark:bg-black/30 p-4 rounded-lg text-center md:text-left">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Next Milestone</p>
                                    <p className="font-bold text-gray-900 dark:text-white mt-1">Core Features</p>
                                </div>
                            </div>

                            <Link to="/wait-list" className="mt-6 block w-full text-center py-3 bg-black/10 dark:bg-black/30 font-semibold rounded-lg hover:bg-black/20 dark:hover:bg-black/50 transition-colors">
                                Join the waitlist
                            </Link>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
                    <div className="flex items-center gap-3 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <i className="fas fa-clipboard-list text-xl text-yellow-500"></i>
                        <span className="font-medium text-gray-700 dark:text-gray-200">Smart Product Tracking</span>
                    </div>
                    <div className="flex items-center gap-3 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                        <i className="fas fa-bell text-xl text-yellow-500"></i>
                        <span className="font-medium text-gray-700 dark:text-gray-200">Real-time Price Alerts</span>
                    </div>
                    <div className="flex items-center gap-3 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                        <i className="fas fa-chart-line text-xl text-yellow-500"></i>
                        <span className="font-medium text-gray-700 dark:text-gray-200">Price History Analytics</span>
                    </div>
                    <div className="flex items-center gap-3 animate-fadeInUp" style={{animationDelay: '0.7s'}}>
                        <i className="fas fa-star text-xl text-yellow-500"></i>
                        <span className="font-medium text-gray-700 dark:text-gray-200">Deal Recommendations</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const FeatureCard = ({ icon, title, children }) => (
    <div className="border-l-4 border-[#00d4aa] bg-gray-500/5 dark:bg-white/5 p-6 rounded-lg rounded-l-none transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center gap-3">
            <i className={`fas ${icon} text-[#00d4aa] text-2xl`}></i>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">{children}</p>
    </div>
);


const FeaturesShowcaseSection: React.FC = () => {
    return (
        <Section id="solutions" className="bg-gray-100/50 dark:bg-[#050505]">
            <div className="text-center space-y-4">
                <span className="text-sm font-medium border border-gray-400/50 dark:border-white/20 px-4 py-1 rounded-full">Welcome to Soomoja</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Revolutionize Your <span className="text-[#00d4aa]">Shopping Experience</span>
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
                    Soomoja leverages cutting-edge AI to deliver a shopping experience like no other—intuitive, personalized, and effortless. Discover, analyze, and purchase with unmatched ease.
                </p>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
                <FeatureCard icon="fa-crosshairs" title="AI Discovery">
                    Uncover products tailored to your taste with intelligent search and recommendations.
                </FeatureCard>
                <FeatureCard icon="fa-chart-bar" title="Smart Insights">
                    Gain deep insights with AI-driven analytics on pricing, trends, and more.
                </FeatureCard>
                <FeatureCard icon="fa-credit-card" title="Effortless Purchases">
                    Streamline your shopping with one-tap purchases and secure checkout.
                </FeatureCard>
            </div>

            <div className="mt-28 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#00d4aa]">Intelligent Product Discovery</h3>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Find What You Love, Instantly</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                       Soomoja's AI engine dives deep into your preferences, browsing history, and trends to surface products that match your unique style. From visual search to voice commands, discovery is seamless and intuitive.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 pt-4">
                        <div className="flex items-start gap-4">
                            <i className="fas fa-user-check text-2xl text-[#00d4aa] mt-1"></i>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Tailored Recommendations</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Personalized picks based on your unique taste and behavior.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <i className="fas fa-camera text-2xl text-[#00d4aa] mt-1"></i>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Visual Search</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Upload an image to find similar products instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative animate-float">
                    <img src="/ai.jpg" alt="Intelligent Product Discovery" className="rounded-2xl shadow-2xl" />
                    <div className="absolute top-1/4 -left-12">
                        <span className="text-xs bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-lg shadow-lg animate-float" style={{animationDelay: '0.5s'}}>AI-Driven Precision</span>
                    </div>
                    <div className="absolute bottom-1/4 -right-12">
                        <span className="text-xs bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-lg shadow-lg animate-float" style={{animationDelay: '1s'}}>Real-Time Suggestions</span>
                    </div>
                     <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-black/50 backdrop-blur-md p-2 rounded-full shadow-lg">
                        <div className="flex items-center gap-2">
                             <i className="fas fa-shopping-cart text-xl text-[#00d4aa]"></i>
                            <span className="text-gray-900 dark:text-white text-lg font-bold">Soomoja</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-24">
                <Link to="/wait-list" className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-white/10 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                    <i className="fas fa-arrow-right"></i>
                    Join the Waitlist
                </Link>
            </div>
        </Section>
    );
};

const tabsData = [
    {
        id: 'personalized',
        name: 'Personalized',
        icon: 'fa-user-tag',
        image: '/ai-b.jpg',
        tags: [
            { text: 'Learns your style over time', position: 'top-1/4 -left-10' },
            { text: 'Suggests complementary items', position: 'bottom-1/4 -right-10' }
        ],
        features: [
            {
                icon: 'fa-robot',
                title: 'Smart Product Recommendations',
                description: 'Our AI analyzes your browsing patterns to understand your taste and preferences, suggesting products that align perfectly with your unique style.'
            },
            {
                icon: 'fa-brain',
                title: 'Preference Learning',
                description: 'Every interaction enhances our understanding of your preferences, creating an increasingly personalized shopping experience that evolves with you.'
            },
            {
                icon: 'fa-shirt',
                title: 'Style Matching',
                description: 'Discover products that complement your existing wardrobe and personal style, with visually coherent suggestions that enhance your collection.'
            }
        ]
    },
    {
        id: 'comparison',
        name: 'Comparison',
        icon: 'fa-balance-scale',
        image: '/comparison.jpg',
        tags: [
            { text: 'Side-by-side analysis', position: 'top-1/4 -right-10' },
            { text: 'Historical price data', position: 'bottom-1/4 -left-10' }
        ],
        features: [
            {
                icon: 'fa-store',
                title: 'Multi-Store Comparison',
                description: 'Compare prices, shipping times, and reviews for the same product across multiple online retailers to find the absolute best offer.'
            },
            {
                icon: 'fa-chart-line',
                title: 'Price History Visualization',
                description: 'Track price trends over time with intuitive graphs, helping you decide whether to buy now or wait for a better deal.'
            },
            {
                icon: 'fa-calculator',
                title: 'Total Cost Analysis',
                description: 'Our AI automatically calculates the total cost, including shipping, taxes, and potential import fees, so there are no surprises at checkout.'
            }
        ]
    },
    {
        id: 'deals',
        name: 'Deals',
        icon: 'fa-tags',
        image: '/deals.jpg',
        tags: [
            { text: 'Never miss a discount', position: 'top-1/4 -left-10' },
            { text: 'Automatic coupon codes', position: 'bottom-1/4 -right-10' }
        ],
        features: [
            {
                icon: 'fa-bell',
                title: 'Smart Deal Alerts',
                description: 'Set up alerts for your favorite products and get instantly notified when the price drops or a special promotion is available.'
            },
            {
                icon: 'fa-ticket-alt',
                title: 'Automated Coupon Finder',
                description: 'Soomoja automatically scours the web for and applies the best available coupon codes at checkout, ensuring you always save the most.'
            },
            {
                icon: 'fa-bolt',
                title: 'Flash Sale Detection',
                description: 'Our AI monitors thousands of retailers for limited-time flash sales and lightning deals, giving you a heads-up on the best opportunities.'
            }
        ]
    }
];

const SmartAIFeaturesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('personalized');
    const currentTab = tabsData.find(tab => tab.id === activeTab);

    return (
        <Section id="learn">
            <div className="text-center space-y-4">
                 <span className="text-sm font-medium border border-gray-400/50 dark:border-white/20 px-4 py-1 rounded-full">Revolutionize Your Shopping</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Smart <span className="text-[#00d4aa]">AI Features</span> for Smart Shopping
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
                    Experience shopping reimagined with personalized AI recommendations, smart price comparisons, and automated deal-finding that adapts to your preferences and budget.
                </p>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
                <div className="flex justify-center items-center p-1 bg-gray-200/50 dark:bg-white/10 rounded-full">
                    {tabsData.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`${activeTab === tab.id ? 'bg-white dark:bg-[#00d4aa] text-black' : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/20'} w-1/3 py-2.5 text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2`}
                        >
                            <i className={`fas ${tab.icon}`}></i>
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative animate-fadeInUp">
                    <img src={currentTab.image} alt={currentTab.name} className="rounded-2xl shadow-2xl aspect-[4/3] object-cover" />
                    {currentTab.tags.map((tag, index) => (
                         <div key={index} className={`absolute ${tag.position}`}>
                            <span className="text-xs bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-lg shadow-lg animate-float" style={{animationDelay: `${index * 0.5}s`}}>{tag.text}</span>
                        </div>
                    ))}
                     <button className="absolute bottom-4 right-4 h-12 w-12 flex items-center justify-center bg-[#00d4aa]/80 backdrop-blur-md text-black rounded-full shadow-lg hover:bg-[#00d4aa] transition-colors">
                        <i className="fas fa-lightbulb text-xl"></i>
                    </button>
                </div>
                <div className="space-y-6">
                    {currentTab.features.map((feature, index) => (
                        <div key={index} className="dark:bg-white/5 bg-gray-100 p-6 rounded-2xl border dark:border-white/10 border-gray-200 animate-fadeInUp" style={{animationDelay: `${index * 0.2 + 0.2}s`}}>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-[#00d4aa]/10 dark:bg-white/10 text-[#00d4aa]">
                                    <i className={`fas ${feature.icon} text-lg`}></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{feature.title}</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
};

const FutureShoppingSection: React.FC = () => (
    <Section id="future">
        <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                The Future of <span className="text-[#00d4aa]">Shopping</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Save money, time, and energy with Soomoja's AI-driven shopping revolution.
            </p>
        </div>

        <div className="mt-12 relative max-w-3xl mx-auto animate-fadeInUp">
            <img 
                src="/shopping.jpg" 
                alt="The Future of Shopping" 
                className="rounded-2xl shadow-xl border dark:border-white/10 border-gray-200" 
            />
            <div className="absolute bottom-4 left-4">
                <span className="text-xs bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-lg shadow-lg">
                    Next-Gen Shopping
                </span>
            </div>
        </div>

        <div className="max-w-3xl mx-auto">
            <hr className="my-16 border-gray-400/30 dark:border-white/10" />
        </div>

        <div className="text-center space-y-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Join the Waitlist
            </h3>
            <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400">
                Be among the first to experience the Soomoja Shopping Tool.
            </p>
            <div className="pt-4">
                <Link to="/blog" className="inline-block px-8 py-3 bg-white text-[#00d4aa] font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    Learn How to Shop Like a Pro
                </Link>
            </div>
        </div>
    </Section>
);

const HomePage: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.state?.scrollTo) {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
            setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <FeaturesShowcaseSection />
      <SmartAIFeaturesSection />
      <FutureShoppingSection />
    </>
  );
};

export default HomePage;
