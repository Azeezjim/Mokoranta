import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, styling }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton  styling={styling} title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
   