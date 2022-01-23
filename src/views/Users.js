import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from "axios";

const Users = () => {
  
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get("http://localhost/SportsSiteAPI/api/user/getAll/");
    setUsers(data.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4 space-between">
        <PageTitle
          sm="4"
          title="All Users"
          subtitle="Users"
          className="text-sm-left"
        />
        <Button>Add User</Button>
      </Row>



      <Row>
        <Col>
          <Card small className="mb-4">
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      UID
                    </th>
                    <th scope="col" className="border-0">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.length !== 0 && users.map((user) => (
                    <tr key={user.uid}>
                      <td>{user.uid}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
