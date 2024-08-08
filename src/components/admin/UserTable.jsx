import React, { useState } from "react";
import { Table, TableBody, TableHeader } from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import UserHeaderRow from "./UserHeaderRow";
import UserTableRow from "./UserTableRow";
import { UsersData } from "@/constants";
import EditUserForm from "@/pages/Admin/UserManagement/EditUserForm";
import { CreateUserForm } from "@/pages/Admin/UserManagement/CreateUserForm";

const ITEMS_PER_PAGE = 7;

function UserTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState(null);
  const [users, setUsers] = useState(UsersData);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const handleCreate = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSaveEdit = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };
  return (
    <div>
      <div className="flex justify-between  items-center px-3 py-5">
        <h1 className="text-2xl  font-semibold">User Management</h1>
        <CreateUserForm onCreate={handleCreate} />
      </div>
      <div className="flex flex-col h-[73vh] justify-between">
        <Table>
          <TableHeader>
            <UserHeaderRow />
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <UserTableRow
                key={item.id}
                item={item}
                onEdit={() => {
                  handleEdit(item);
                }}
                onDelete={() => handleDelete(item.id)}
              />
            ))}
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        {editingUser && (
          <EditUserForm
            user={editingUser}
            onClose={() => setEditingUser(null)}
            onSave={handleSaveEdit}
          />
        )}
      </div>
    </div>
  );
}

export default UserTable;
