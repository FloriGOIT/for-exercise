import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Component1,Component1Second, ImageGallery,CustomHookToogle, CounterWithValueArrayDependency, TimerEmptyArrayDependency,TimerNoDependency, MountingAndUnmountingUseEffectOnConsoleLOG, ShortVideoRepetedPlayPause, WorkingWithPreviosState, ResetFormThroughKeyChange, Form, NestedForm, IncrementBasic, IncrementAsFunction, TextChange, UserProfile, UsingInitialState, TodoList, MyCheckbox } from "./components/App";
import {Toggle, ContextProvider,Logging}  from "./components/App";
import {VideoApp, ReferenceHook, PlayerApp}  from "./components/App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<StrictMode>
    <>
      <Component1/>  <br/><br/><br/><hr/> <hr/> 
      <Component1Second/>  <br/><br/><br/><hr/> <hr/> 
      <ImageGallery/>   <br/><br/><br/><hr/> <hr/> 
      <CustomHookToogle />   <br/><br/><br/><hr/> <hr/> 
      <CounterWithValueArrayDependency />   <br/><br/><br/><hr/> <hr/> 
      <TimerEmptyArrayDependency/>   <br/><br/><br/><hr/> <hr/> 
      <TimerNoDependency />   <br/><br/><br/><hr/> <hr/> 
      <MountingAndUnmountingUseEffectOnConsoleLOG/>  <br/><br/><br/><hr/> <hr/> 
      <ShortVideoRepetedPlayPause/>  <br/><br/><br/><hr/> <hr/> 
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

      <ContextProvider>
          <Logging />
      </ContextProvider> <br/><br/><br/><hr/> <hr/> 
      
      <Toggle /> <br/><br/><br/><hr/> <hr/> 
      <ReferenceHook /> <br/><br/><br/><hr/> <hr/>
      <PlayerApp/> <br/><br/><br/><hr/> <hr/>
      <VideoApp/> <br/><br/><br/><hr/> <hr/>
    </>
</StrictMode>
);
