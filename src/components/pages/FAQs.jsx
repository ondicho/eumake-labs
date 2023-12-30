import React, { useState } from 'react';
import down from '../../assets/images/down-arrow.png';
import faq from '../../assets/images/faq.png'
import '../../assets/css/faq.css';

const faqData = [
    {
        id: 1,
        question: 'How do I get a test done?',
        answer: 'You can get a test done by visiting our testing centers or initiating a home sample collection.',
    },
    {
        id: 2,
        question: 'How do I initiate home sample collection?',
        answer: 'To initiate home sample collection, log in to your account, go to the "Home Collection" section, and follow the instructions.',
    },
    {
        id: 3,
        question: 'What tests do you offer?',
        answer: 'We offer a wide range of tests, including but not limited to HIV tests, endoscopy, thyroid tests, hematology, and liver/pancreas tests.',
    },
    {
        id: 4,
        question: 'Can I/my doctor receive my results online?',
        answer: 'Yes, you and your doctor can access your test results online through our secure portal.',
    },
];

const FAQs = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleAnswer = (id) => {
        console.log("Toggling answer for ID:", id);
        setExpandedId((prevId) => (prevId === id ? null : id));
    };




    return (
        <>
            <div className="main-container faqs">
                <div className="faq-header">
                    <img className="faq-top" src={faq} alt="faq-icon" />
                </div>
                <ul className="faq-list">
                    {faqData.map((faq) => (
                        <li key={faq.id} className="faq-item">
                            <div className="faq-question">
                                <div className="faq-question-text">{faq.question}</div>
                                <div className="faq-toggle" onClick={() => toggleAnswer(faq.id)}>
                                    <img
                                        className={`faq-toggle-icon ${expandedId === faq.id ? 'expanded' : ''}`}
                                        src={down}
                                        alt="toggle"
                                    />

                                </div>
                            </div>
                            {expandedId === faq.id && (
                                <div className="faq-answer">
                                    <div className="faq-answer-text">{faq.answer}</div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FAQs;
