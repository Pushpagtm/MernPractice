import React from "react";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
function Users() {
  return (
    <div className="overflow-x-auto flex justify-center align-middle">
      <Link to="/create">
        <Button>Create</Button>
      </Link>
      <Table>
        <Table.Head>
          <Table.HeadCell> Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Age</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>
              <a
                href="/update"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
              <a
                href="/delete"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                delete
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default Users;
