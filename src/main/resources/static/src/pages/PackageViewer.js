import React, { useContext, useEffect, useState } from "react";
import FlexContainer from "../atoms/FlexContainer";
import Row from "../atoms/Row";
import Table, { FormField } from "../atoms/Table";
import { StyledPackageForm } from "../molecules/PackageForm";
import { PackageContext } from "./context";

const PackageViewer = () => {
  const { packages, getPackages, addPackage, deletePackage } = useContext(PackageContext);
  const [currentValue, setCurrentValue] = useState({
    name: "",
    age: 0,
    duration: {
      days: 0,
      nights: 0,
    },
    validity: 0,
    description: "",
  });
  const [currentId, setCurrentId] = useState(-1);

  useEffect(() => {
    getPackages();
  }, []);

  useEffect(() => {
    if (currentId != -1) {
      let field = packages.filter((p) => p.id === currentId);
      if (field.length > 0) {
        setCurrentValue(field[0]);
      }
    }
  }, [currentId]);

  return (
    <>
      <h2>Packages</h2>
      <FlexContainer>
        <StyledPackageForm
          initialValues={currentValue}
          addPackage={addPackage}
        />
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Duration</th>
              <th>Validity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((p) => {
              return (
                <Row
                  {...p}
                  key={p.id}
                  setCurrentId={setCurrentId}
                  deletePackage={deletePackage}
                ></Row>
              );
            })}
          </tbody>
        </Table>
      </FlexContainer>
    </>
  );
};

export default PackageViewer;
