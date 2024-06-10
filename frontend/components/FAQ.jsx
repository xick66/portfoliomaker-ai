import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';

const faqData = [
  { question: 'How does PortfolioMakerAI work?', answer: 'Upload your resume and let our AI generate a personalized portfolio for you.' },
  { question: 'Is PortfolioMakerAI free?', answer: 'Yes, it is completely free to use.' },
  { question: 'Can I customize my portfolio?', answer: 'Yes, you can customize the generated portfolio to your liking.' },
];

const FAQ = () => (
  <div className="faq my-5" data-testid="faq">
    <h2 className="my-5 text-center" data-testid="faq-title">
      Frequently Asked Questions
    </h2>
    <Accordion>
      {faqData.map((item, i) => (
        <AccordionItem key={i}>
          <AccordionHeader targetId={`faq-${i}`}>
            {item.question}
          </AccordionHeader>
          <AccordionBody accordionId={`faq-${i}`}>
            {item.answer}
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default FAQ;