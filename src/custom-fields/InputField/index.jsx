import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

InputField.propTypes = {
  //props do formik truyen vao
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  //props tu dinh nghia them
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  // de su dung form can co gia tri ban dau


  const { field, type, label, placeholder, disabled } = props;
  const { name } = field;
  /*
  4 cac quan trong can bind vao 1 custom field, control
  const {name,value,onChange,onBlur} = field;
*/

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}
        /*
        name = {name}
        value={value}
        onChange={onChange}
        onBlur={onBlure}

      = {...field} ---> can xac dinh trong filed co bao nhieu props, trong truong hop nay chi co 4 props

      */

        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default InputField;
