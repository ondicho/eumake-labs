import question from '../../assets/images/question.png'
import answer from '../../assets/images/answer.png'
import faq from '../../assets/images/faq.png'
import '../../assets/css/faq.css';

const FAQs = () => {
    return (
        <>
            <div className="main-container faqs">
                <div className="faq-header">
                    <img className="faq-top" src={faq} alt="faq-icon" />
                </div>
                <div className="faq-text-area">
                    <div className="faq">
                        <div className="faq-question">
                            <div className="faq-question-icon">
                                <img className="faq-modal-icon" src={question} alt="close" />
                            </div>
                            <div className="faq-question-text">
                                Can i self test for HIV?
                            </div>
                        </div>
                        <div className="faq-answer">

                            <div className="faq-answer-text">Yes you can self test for HIV. This can be done by use of an oral or saliva test kit which can be purchased from our webiste.</div>
                            <div className="faq-answer-icon">
                                <img className="faq-modal-icon" src={answer} alt="close" />
                            </div>
                        </div>
                    </div>

                    <div className="faq">
                        <div className="faq-question">
                            <div className="faq-question-icon">
                                <img className="faq-modal-icon" src={question} alt="close" />
                            </div>
                            <div className="faq-question-text">
                                Can I eat before an endoscopy?
                            </div>
                        </div>
                        <div className="faq-answer">

                            <div className="faq-answer-text"> You shouldn’t eat or drink anything after midnight the night before the procedure. This includes gum or mints. However, you can usually have clear liquids after midnight up to six hours before the endoscopy if your procedure is in the afternoon.</div><img className="faq-modal-icon" src={answer} alt="close" />
                        </div>
                    </div>

                    <div className="faq">
                        <div className="faq-question">
                            <div className="faq-question-icon">
                                <img className="faq-modal-icon" src={question} alt="close" />
                            </div>
                            <div className="faq-question-text">
                                This is a sample question?
                            </div>
                        </div>
                        <div className="faq-answer">

                            <div className="faq-answer-text"> This is a brilliant answer.</div>  <div className="faq-answer-icon">
                                <img className="faq-modal-icon" src={answer} alt="close" />
                            </div>
                        </div>
                    </div>
                    <div className="faq">
                        <div className="faq-question">
                            <div className="faq-question-icon">
                                <img className="faq-modal-icon" src={question} alt="close" />
                            </div>
                            <div className="faq-question-text">
                                This is a sample question?
                            </div>
                        </div>
                        <div className="faq-answer">

                            <div className="faq-answer-text"> This is a brilliant answer.</div>  <div className="faq-answer-icon">
                                <img className="faq-modal-icon" src={answer} alt="close" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQs;