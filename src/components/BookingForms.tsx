import { Formik } from 'formik';
import React, { ReactElement, useState } from 'react'
import { Button, Col, Input, Label, Row } from 'reactstrap'
import { object as YupObject, string as YupString } from 'yup'
import DataTable from './DataTable/DataTable';
import FormikValidationError from './FormikValidationError/FormikValidationErrot';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateFrom: "",
    dateTo: "",
    numberOfPeople: "",
};

const initalValidationSchema = YupObject().shape({
    firstName: YupString().required("First Name is required"),
    lastName: YupString().required("Last Name is required"),
    email: YupString().required("E-mail is required"),
    phoneNumber: YupString().required("Phone Number is required"),
    dateFrom: YupString().required("Date From is required"),
    dateTo: YupString().required("Date To is required"),
    numberOfPeople: YupString().required("Number of people is required"),
});

export interface SubmitData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateFrom: string;
  dateTo: string;
  numberOfPeople: string;
}

interface Props { }


function BookingForms(props: Props): ReactElement {
    const [submittedData, setSubmittedData] = useState<SubmitData[]>([])


    const handleSubmitData = (data: SubmitData, resetForm: any) => {
        const value = {

        }
        setSubmittedData((prev) => [...prev,data] )
        resetForm()
    }

    const columns = [
        {
            Header: "First Name",
            accessor: "firstName"
        },
        {
            Header: "Last Name",
            accessor: "lastName"
        }, {
            Header: "Email",
            accessor: "email"
        }, {
            Header: "Phone Number",
            accessor: "phoneNumber"
        },
        {
            Header: "Date From",
            accessor: "dateFrom"
        }, {
            Header: "Date To",
            accessor: "dateTo"
        }, {
            Header: "Number of people",
            accessor: "numberOfPeople"
        }
    ]

    return (
      <>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={initalValidationSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmitData(values, resetForm);
          }}
        >
          {({ values, handleChange, handleSubmit, touched, errors }) => (
            <div className="container">
              <form className="form" onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <Label>First Name</Label>
                    <Input
                      type="text"
                      name="firstName"
                      className="form-control h-50 w-50"
                      value={values.firstName}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name="firstName"
                      touched={touched}
                      errors={errors}
                    />
                  </Col>
                  <Col md="6">
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      name="lastName"
                      className="form-control h-50 w-50"
                      value={values.lastName}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name="lastName"
                      touched={touched}
                      errors={errors}
                    />
                  </Col>
                  <Col md="6">
                    <Label>E-mail</Label>
                    <Input
                      type="text"
                      name="email"
                      className="form-control h-50 w-50"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name="email"
                      touched={touched}
                      errors={errors}
                    />
                  </Col>
                  <Col md="6">
                    <Label>Phone number</Label>
                    <Input
                      type="text"
                      name="phoneNumber"
                      className="form-control h-50 w-50"
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name="phoneNumber"
                      touched={touched}
                      errors={errors}
                    />
                  </Col>
                  <Col md="6">
                    <Label>Date From</Label>
                    <Input
                      type="date"
                      data-date-inline-picker="true"
                      name="dateFrom"
                      className="form-control h-50 w-50"
                      value={values.dateFrom}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name="dateFrom"
                      touched={touched}
                      errors={errors}
                    />
                  </Col>
                  <Col md="6">
                    <Label>Date To</Label>
                    <Input
                      type="date"
                      data-date-inline-picker="true"
                      name="dateTo"
                      className="form-control h-50 w-50"
                      value={values.dateTo}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name="dateTo"
                      touched={touched}
                      errors={errors}
                    />
                  </Col>
                  <Col md="6">
                    <Label>Number of people</Label>
                    <Input
                      type="text"
                      name="numberOfPeople"
                      className="form-control h-50 w-50"
                      value={values.numberOfPeople}
                      onChange={handleChange}
                    />
                    <FormikValidationError
                      name="numberOfPeople"
                      touched={touched}
                      errors={errors}
                    />
                  </Col>
                  <Button type="submit" className="btn btn-success mt-4">
                    submit
                  </Button>
                </Row>
              </form>
            </div>
          )}
        </Formik>
        {submittedData.length > 0 && (
          <div className="mt-4 container">
            <DataTable columns={columns} data={submittedData || []} />
          </div>
        )}
      </>
    );
}

export default BookingForms
