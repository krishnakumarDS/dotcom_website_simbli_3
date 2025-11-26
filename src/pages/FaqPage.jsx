import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './GenericPage.css';
import './FaqPage.css';

const faqs = [
    {
        question: "What is Simbli AI?",
        answer: "Simbli AI is a suite of autonomous artificial intelligence agents designed to automate complex business processes, analyze data, and perform tasks without direct human supervision. Our platform allows you to deploy and manage these agents to improve efficiency and drive growth."
    },
    {
        question: "How do I get started with Simbli AI agents?",
        answer: "Getting started is simple. You can sign up for a demo through our contact page. Our team will guide you through the setup process, help you identify key areas for automation, and assist in deploying your first agents."
    },
    {
        question: "Is my data secure with Simbli AI?",
        answer: "Absolutely. Security is our top priority. We use enterprise-grade encryption for data at rest and in transit, and our platform is built on a secure infrastructure that complies with industry-standard security protocols to ensure your data is always protected."
    },
    {
        question: "Can Simbli AI agents integrate with my existing software?",
        answer: "Yes. Our agents are designed for seamless integration. We provide robust APIs and pre-built connectors for popular platforms like CRMs, ERPs, databases, and marketing automation tools."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer comprehensive support to all our clients. This includes 24/7 technical support, a dedicated account manager for enterprise clients, and an extensive knowledge base with tutorials and best practices."
    }
];

const FaqItem = ({ faq, index, toggleFAQ }) => {
    return (
        <div className={`faq-item ${faq.open ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
                <h4>{faq.question}</h4>
                <div className="faq-icon">
                    {faq.open ? <FaMinus /> : <FaPlus />}
                </div>
            </div>
            <div className="faq-answer">
                <p>{faq.answer}</p>
            </div>
        </div>
    )
}

const FaqPage = () => {
    const [faqList, setFaqList] = useState(faqs.map(f => ({ ...f, open: false })));

    const toggleFAQ = index => {
        setFaqList(faqList.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <div className="generic-page">
            <div className="generic-page-container">
                <h1 className="generic-page-title">Frequently Asked Questions</h1>
                <div className="faq-list">
                    {faqList.map((faq, i) => (
                        <FaqItem faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqPage;