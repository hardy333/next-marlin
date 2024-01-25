"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./accordion1.css";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

const Accordion1 = () => (
  <Accordion.Root className="AccordionRoot" type="multiple">
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>How does it work?</AccordionTrigger>
      <AccordionContent>
        First, a disclaimer – the entire process of writing a blog post often
        takes more than a couple of hours, even if you can type eighty words as
        per minute and your writing skills are sharp.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>
        Do I need a designer to use Admin Theme ?
      </AccordionTrigger>
      <AccordionContent>
        First, a disclaimer – the entire process of writing a blog post often
        takes more than a couple of hours, even if you can type eighty words as
        per minute and your writing skills are sharp.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>
        What do I need to do to start selling?
      </AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          First, a disclaimer – the entire process of writing a blog post often
          takes more than a couple of hours, even if you can type eighty words
          as per minute and your writing skills are sharp.
        </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger>How much does Extended license cost?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          First, a disclaimer – the entire process of writing a blog post often
          takes more than a couple of hours, even if you can type eighty words
          as per minute and your writing skills are sharp.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

type TriggerProps = {
  children?: React.ReactNode;
  className?: string;
};

const AccordionTrigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  function x({ children, className, ...props }: TriggerProps, forwardedRef) {
    return (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className={classNames("AccordionTrigger", className)}
          {...props}
          ref={forwardedRef}
        >
          <span className="accordion-plus-span">
            <FiPlus stroke-width={3} size={17} className="plus" />
            <FiMinus stroke-width={3} size={17} className="minus" />
          </span>
          <span>{children}</span>

          {/* <ChevronDownIcon className="AccordionChevron" aria-hidden /> */}
        </Accordion.Trigger>
      </Accordion.Header>
    );
  }
);

type ContentType = {
  children?: React.ReactNode;
  className?: string;
};

const AccordionContent = React.forwardRef<HTMLDivElement, ContentType>(
  function y({ children, className, ...props }, forwardedRef) {
    return (
      <Accordion.Content
        className={classNames("AccordionContent", className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="AccordionContentText">{children}</div>
      </Accordion.Content>
    );
  }
);

export default Accordion1;
