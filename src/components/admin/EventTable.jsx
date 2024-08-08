import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
} from "@/components/ui/table";
import EventHeaderRow from "./EventHeaderRow";
import EventTableRow from "./EventTableRow";

const events = [
  {
    title: "Annual Company Picnic",
    startDate: "2024-08-01",
    endDate: "2024-08-02",
    description:
      "A day of fun and team-building activities for employees and their families.",
    status: "Upcoming",
    creator: "John Smith",
  },
  {
    title: "Quarterly Business Review",
    startDate: "2024-08-05",
    endDate: "2024-08-06",
    description:
      "Review of the company's performance and strategies for the next quarter.",
    status: "Ongoing",
    creator: "Peter Johnson",
  },
  {
    title: "Product Launch Event",
    startDate: "2024-08-10",
    endDate: "2024-08-11",
    description:
      "Launch event for the new product line with presentations and demonstrations.",
    status: "Completed",
    creator: "Mary Brown",
  },
  {
    title: "Annual Sales Conference",
    startDate: "2024-08-15",
    endDate: "2024-08-16",
    description:
      "Conference for the sales team to discuss targets, strategies, and success stories.",
    status: "Upcoming",
    creator: "Alice Davis",
  },
  {
    title: "Charity Gala",
    startDate: "2024-08-20",
    endDate: "2024-08-21",
    description:
      "A fundraising event with dinner, entertainment, and auctions to support local charities.",
    status: "Ongoing",
    creator: "Bob Wilson",
  },
];

function EventTable() {
  return (
    <div>
      <Table>
        <TableCaption className="mt-3"></TableCaption>
        <TableHeader>
          <EventHeaderRow />
        </TableHeader>
        <TableBody>
          {events.map((item, index) => (
            <EventTableRow key={index} item={item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default EventTable;
