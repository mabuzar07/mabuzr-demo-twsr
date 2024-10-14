import React from "react";
import Marquee from "react-fast-marquee";
import { Ticket, TicketVariant } from "./Ticket";

const tickets = [
  { title: "gregregymreviews.com", variant: "danger" },
  { title: "capitalone.com", variant: "success" },
  { title: "chase.com", variant: "danger" },
  { title: "citi.com", variant: "success" },
  { title: "costco.com", variant: "success" },
  { title: "amex.com", variant: "danger" },
  { title: "youtube.com", variant: "danger" },
  { title: "figma.com", variant: "success" },
  { title: "google.com", variant: "success" },
  { title: "microsoft.com", variant: "success" },
  { title: "youtube.com", variant: "danger" },
  { title: "microsoft.com", variant: "success" },
  { title: "youtube.com", variant: "danger" },
  { title: "microsoft.com", variant: "success" },
  { title: "youtube.com", variant: "danger" },
  { title: "microsoft.com", variant: "success" },
];

const TickerBar = () => {
  return (
    <div className="w-full py-2">
      <Marquee
        speed={10}
        play={true}
        gradient={false}
        autoFill={true}
        pauseOnHover={true}
        className="text-white text-center"
      >
        {tickets.map((ticket, index) => {
          return (
            <Ticket
              key={index}
              title={ticket.title}
              variant={ticket.variant as TicketVariant}
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default TickerBar;
