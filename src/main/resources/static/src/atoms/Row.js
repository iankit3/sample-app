import React from "react";

const Row = ({
  id,
  name,
  age,
  duration,
  validity,
  description,
  setCurrentId,
  deletePackage,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{duration.days} days and {duration.nights} nights</td>
      <td>{validity}</td>
      <td>{description}</td>
      <td>
        <button onClick={(e) => setCurrentId(id)}>Edit</button>
        <button onClick={(e) => deletePackage(id)}>delet</button>
      </td>
    </tr>
  );
};

export default Row;
