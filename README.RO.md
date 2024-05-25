Hooks

<== useState =>
* do not store an object with several proprieties that are not related to eachother. Is better to separte them if they are unrelated.
* The convention is to name state variables like [something, setSomething] using array destructuring.
* You can’t call it inside loops or conditions.
*If you pass a function to useState, React will only call it during initialization.
  function TodoList() {💥  the createInitialTodos function runs on every render, such as when you type into the input 🚩 Wrong: less efficient
  const [todos, setTodos] = useState(createInitialTodos());
  // ...

  function TodoList() {✅ check function createInitialTodos()
  const [todos, setTodos] = useState(createInitialTodos); 💥 createInitialTodos function runs on initialization not on re-render. ✅ Correct: More efficient check function createInitialTodos() 
  // ...

*
return <button onClick={handleClick()}>Click me</button>  🚩 Wrong: calls the handler during render
return <button onClick={handleClick}>Click me</button>// ✅ Correct: passes down the event handler
return <button onClick={(e) => handleClick(e)}>Click me</button> // ✅ Correct: passes down an inline function

setTodos(prevTodos => {prevTodos.push(createTodo())}); // 🚩 Mistake: mutating state
setTodos(prevTodos => {return [...prevTodos, createTodo()]});  // ✅ Correct: replacing with new state

*store a function in useState

const [fn, setFn] = useState(() => someFunction);

function handleClick(){setFn(() => someOtherFunction);}
  
<== useEffect ==>
The useEffect hook in React is a powerful tool for handling side effects in functional components. Side effects include data fetching, subscriptions, manually changing the DOM, and more. 
*without dependency = >effect will run on every render of all components
*  [] dependency => the callback will run at the component's mounting stage
* [value] => the callback will run in the  mounting and rerendering of specific component

useEffect(() => {
  //Runs on every render
});
Component Did Mount:
useEffect(() => {console.log('Component mounted')}, []); // Runs only on the first render
Component Did Update:
useEffect(() => {console.log('Component changed')}, [valus]); // Runs only on the first render and change
Cleanup Function:
useEffect(() => { console.log('Setting up');// Set up a subscription or event listener
                  return () => {console.log('Cleaning up');}}, [someValue]); 
Cleanup: Implement cleanup functions to prevent memory leaks, especially with subscriptions and event listeners