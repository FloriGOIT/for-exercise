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
  


  