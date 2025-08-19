
import React, { useState, useEffect } from 'react';
import { getArticles } from '../services/devtoService';
import { DevToArticle } from '../types';

const BlogHero: React.FC = () => (
    <div className="py-24 bg-cover bg-center" style={{backgroundImage: "url('/bg.jpg')"}}>
        <div className="bg-black/60 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                    Smart <span className="gradient-text">Shopping Tips</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                    Discover insights, strategies, and tips to make smarter shopping decisions.
                </p>
            </div>
        </div>
    </div>
);

const Categories: React.FC = () => {
    const categories = ['Shopping Tips', 'Price Tracking', 'Discount Hunting', 'Product Reviews', 'Deal Alerts'];
    return (
        <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map(category => (
                        <button key={category} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ArticleCard: React.FC<{ article: DevToArticle }> = ({ article }) => (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:border-[#00d4aa] hover:shadow-2xl hover:shadow-[#00d4aa]/10 h-full flex flex-col">
            <img src={article.cover_image || '/article1.jpeg'} alt={article.title} className="rounded-lg w-full h-48 object-cover" />
            <div className="pt-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00d4aa] transition-colors">{article.title}</h3>
                <p className="mt-2 text-gray-400 text-sm flex-grow">{article.description}</p>
                <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
                    <span>{article.readable_publish_date}</span>
                    <span>{article.reading_time_minutes} min read</span>
                </div>
            </div>
        </div>
    </a>
);


const BlogPage: React.FC = () => {
    const [articles, setArticles] = useState<DevToArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            const fetchedArticles = await getArticles();
            setArticles(fetchedArticles);
            setLoading(false);
        };
        fetchArticles();
    }, []);

    return (
        <>
            <BlogHero />
            <Categories />
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="text-center">
                            <div className="w-12 h-12 border-4 border-[#00d4aa] border-t-transparent rounded-full animate-spin mx-auto"></div>
                            <p className="mt-4">Loading articles...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map(article => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    )}
                     {(!loading && articles.length === 0) && (
                         <div className="text-center text-gray-400">
                             <p>No articles found. Check back later!</p>
                         </div>
                     )}
                </div>
            </section>
        </>
    );
};

export default BlogPage;
