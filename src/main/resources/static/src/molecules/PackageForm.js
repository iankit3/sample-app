import React from "react";

import { useFormik } from "formik";
import styled from "styled-components";

const Label = styled.label`
    display: block;
    font-weight: 900;
`

const PackageForm = (props) => {
  const formik = useFormik({
    initialValues: props.initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      let json = JSON.stringify(values, null, 2);
      console.log(json);
      props.addPackage(values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={props.className}>
      <Label htmlFor="name">Name</Label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br />
      <Label htmlFor="age">Age</Label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      <br />
      <Label htmlFor="duration_days">Duration</Label>
      
      Days:
      <br />
       <input
        id="duration_days"
        name="duration.days"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.duration.days}
        placeholder="days"
      />
      <br />
      Nights:
      <br />
       <input
        id="duration_nights"
        name="duration.nights"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.duration.nights}
        placeholder="nights"
      />
      <br />
      <Label htmlFor="validity">Validity</Label>
      <input
        id="validity"
        name="validity"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.validity}
      />
      <br />
      <Label htmlFor="description">Description</Label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export const StyledPackageForm = styled(PackageForm)`
    flex: 0 1 200px;
`

export default PackageForm;
