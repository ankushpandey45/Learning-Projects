import React from "react";

const Userdata = ({ user }) => {
  return (
    <>
      <div>
        {user.map((curruser) => {
          const { id, title, description } = curruser;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{description}</td>
            </tr>
          );
        })}
      </div>
    </>
  );
};

export default Userdata;
