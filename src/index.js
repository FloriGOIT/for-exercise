import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {WorkingWithPreviosState, ResetFormThroughKeyChange, Form, NestedForm, IncrementBasic, IncrementAsFunction, TextChange, UserProfile, UsingInitialState, TodoList, MyCheckbox } from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <WorkingWithPreviosState/> <br/><br/><br/><hr/> <hr/> 
      <ResetFormThroughKeyChange/> <br/><br/><br/><hr/> <hr/> 
      <Form/> <br/><br/><br/><hr/> <hr/> 
      <NestedForm/> <br/><br/><br/><hr/> <hr/> 
      <IncrementBasic /> <br/><br/><br/><hr/> <hr/> 
      <IncrementAsFunction /> <br/><br/><br/><hr/> <hr/> 
      <TextChange /> <br/><br/><br/><hr/> <hr/> 
      <UserProfile /> <br/><br/><br/><hr/> <hr/> 
      <UsingInitialState /> <br/><br/><br/><hr/> <hr/> 
      <TodoList /> <br/><br/><br/><hr/> <hr/>
      <MyCheckbox /> <br/><br/><br/><hr/> <hr/>

  </StrictMode>
);
