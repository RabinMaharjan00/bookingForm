import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";

interface Props {
  name: string;
  touched: { [key: string]: any | undefined };
  errors: { [key: string]: any | undefined };
  index?: number;
  keyName?: string;
}
const FormikValidationError = (props: Props) => {
  const { name, touched, errors } = props;
  return touched[name] && !!errors[name] ? (
    <span className="error text-danger" style={{ fontStyle: "normal" }}>
      {" "}
      <AiFillExclamationCircle />
      <span className="fa fa-exclamation-circle"></span>{" "}
      {errors[name] ? errors[name] : ""}
    </span>
  ) : (
    <></>
  );
};

export default FormikValidationError;
