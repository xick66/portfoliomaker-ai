'use client';

import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';

const FAQSection = () => (
  <div className="faq-section my-5" data-testid="faq-section">
    <h2 className="my-5 text-center" data-testid="faq-section-title">
      Frequently Asked Questions
    </h2>
    <Accordion>
      <AccordionItem>
        <AccordionHeader targetId="1">What is portfoliomaker.ai?</AccordionHeader>
        <AccordionBody accordionId="1">
          Portfoliomaker.ai is an AI-powered tool that transforms your resume into a stunning portfolio website.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="2">How does it work?</AccordionHeader>
        <AccordionBody accordionId="2">
          Simply upload your resume, customize your portfolio, and publish it.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="3">Is it free?</AccordionHeader>
        <AccordionBody accordionId="3">
          Yes, you can create and publish your portfolio for free.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  </div>
);

export default FAQSection;