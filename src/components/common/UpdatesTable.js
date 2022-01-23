import React from "react";
import { Card, CardBody, Col } from "shards-react";

const UpdatesTable = ({ updates, handleDelete, handleEdit }) => {
  return (
    <Col>
      <Card small className="mb-4">
        <CardBody className="p-0 pb-3">
          <table className="table mb-0">
            <thead className="bg-light">
              <tr style={{ width: "100%" }}>
                <th scope="col" className="border-0" >
                  #
                </th>
                <th scope="col" className="border-0" style={{width:"40%"}} >
                  Text
                </th>
                <th scope="col" className="border-0" style={{width:"40%"}} >
                  Link
                </th>
                <th scope="col" className="border-0" >
                  Edit
                </th>
                <th scope="col" className="border-0" >
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {updates && updates.length > 0 &&
                updates.map((update, i) =>
                  <tr key={update.id}>
                    <td>
                      {i + 1}
                    </td>
                    <td>
                      {update.text}
                    </td>
                    <td>
                      <a
                        href={update.link}
                        alt={update.text}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {update.link}
                      </a>
                    </td>
                    <td>
                      <div>
                        <span 
                          className="material-icons"
                          onClick={() => handleEdit(update)}
                          style={{ cursor: "pointer" }}
                        >
                          edit
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span
                        className="material-icons"
                        onClick={() => handleDelete(update.id)}
                        style={{ cursor: "pointer" }}
                        >
                          delete_outline
                        </span>
                      </div>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </Col>
  );
}

export default UpdatesTable;
