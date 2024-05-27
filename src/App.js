import React, { useEffect } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import CustomSelect from './CustomSelect';
import './App.css';

function App() {
  const methods = useForm({ mode: "onBlur" });

  const options = ["one", "two", "three"];

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((d) => console.log(d))}>
        <h1>FormContext Renders</h1>
        <label>Input</label>
        <input type="number" {...methods.register("test")} />
        <CustomSelect name="test" options={options} />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default App;

