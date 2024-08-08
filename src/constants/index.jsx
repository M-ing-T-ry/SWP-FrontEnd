import { Ticket, Users } from "lucide-react";
import { Routers } from "@/config/RouterConfig";

export const AdminLinks = [
  {
    icon: <Users className="h-5 w-5" />,
    label: Routers.admin.userManagement.label,
    route: Routers.admin.userManagement.route,
  },
  {
    icon: <Ticket className="h-5 w-5" />,
    label: Routers.admin.events.label,
    route: Routers.admin.events.route,
  },
];

export const UsersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "********",
    status: "Active",
    role: "Visitor",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "********",
    status: "Inactive",
    role: "Sponsor",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "********",
    status: "Active",
    role: "Event Operator",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    password: "********",
    status: "Pending",
    role: "Checking Staff",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    password: "********",
    status: "Active",
    role: "Visitor",
  },
  {
    id: 6,
    name: "Daniel Edwards",
    email: "daniel@example.com",
    password: "********",
    status: "Inactive",
    role: "Sponsor",
  },
  {
    id: 7,
    name: "Ella Fitzgerald",
    email: "ella@example.com",
    password: "********",
    status: "Active",
    role: "Event Operator",
  },
  {
    id: 8,
    name: "Frank Green",
    email: "frank@example.com",
    password: "********",
    status: "Pending",
    role: "Checking Staff",
  },
  {
    id: 9,
    name: "Grace Harris",
    email: "grace@example.com",
    password: "********",
    status: "Active",
    role: "Visitor",
  },
  {
    id: 10,
    name: "Henry Ivy",
    email: "henry@example.com",
    password: "********",
    status: "Inactive",
    role: "Sponsor",
  },
];

