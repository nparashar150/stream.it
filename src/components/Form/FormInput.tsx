import React from "react"
import { useField } from "formik"
import { StyledInput, Error } from "./FormElements"

export const FormInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props)
  return (
    <>
      <StyledInput isError={meta.touched && meta.error} {...field} {...props} />
      <Error component="div" name={field.name} />
    </>
  )
}
