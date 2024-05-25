import { useState } from "react";
import css from "./App.module.css"


// ---------- IncrementBasic --------------------
export const IncrementBasic = () => 
{ const [value, setValue] = useState(0);
  const handleValue = () => {setValue(value + 1)};

  return (
    <div>
      <p className={css.title}>IncrementBasic</p>
      <span>You incremented {value} times</span><br/><br/>
       <button onClick={handleValue}>Increment</button>
    </div>
  );
};


// ---------- IncrementAsFunction--------------------
export function IncrementAsFunction() 
{
  const [age, setAge] = useState(42);
  function increment(){setAge(age => age + 1)}
  function increment5(){setAge(age => age + 5)}
  function incrementFun(){setAge(age => age + 10)} //updater function
  return (
    <>
      <p className={css.title}>IncrementAsFunction</p>
      <h1>Your age: {age}</h1>
      <button onClick={increment5}> +5 </button>
      <button onClick={increment}> +1 </button>
      <button onClick={() => { incrementFun(); incrementFun(); incrementFun();}}> +30 </button> 
    </>
  );
}


// ---------- TextChange--------------------
export function TextChange() 
{
  const [text, setText] = useState('hello');

  function handleChange(e) { setText(e.target.value) }

  return (
    <><p className={css.title}>TextChange</p>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}> Reset </button>
    </>
  );
}


// ---------- UserProfileObject--------------------
export function UserProfile() {
  // Initial state is an object
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  });

  return (
    <div>
      <p className={css.title}>UserProfileObject</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}

// ---------- UsingInitialState--------------------
export function UsingInitialState() {
    const initialState = () => { return calculateExpensiveValue()};
  
    const [value, setValue] = useState(initialState);
  
    return (
      <div>
        <p className={css.title}>UsingInitialState</p>
        <p>Value: {value}</p>
        <button onClick={() => setValue(value + 10)}>
          Increase Value
        </button>
      </div>
    );
  }
let x = 5; let y = 10;   function calculateExpensiveValue(){return x * y;}

// ---------- TodoList --------------------
function createInitialTodos() 
{const initialTodos = [];
  for (let i = 0; i < 5; i++) {initialTodos.push({id: i,text: 'Item ' + (i + 1)})}
  return initialTodos;}
export function TodoList() 
{
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');
  const handleChange = e => {setText(e.target.value)};
  const handleNewTodo = () => {setText(""); setTodos([...todos, {id: todos.length, text: `${text} ${todos.length + 1}`}])}

  return (<>
      <p className={css.title}>TodoList</p>
      <input value={text} onChange={handleChange} />
      <button onClick={handleNewTodo}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}

// ---------- CheckBoxBoolean --------------------
export function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {setLiked(e.target.checked)}

  return (
    <><p className={css.title}>CheckBoxBoolean</p>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </>
  );
}
// ---------- FormObject --------------------
export function Form() {
  const [form, setForm] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  return (
    <><p className={css.title}>FormObject</p>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{'    '}
        {form.lastName}{'    '}
        ({form.email})
      </p>
    </>
  );
}
// ---------- NestedForm --------------------
export function NestedForm() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <><p className={css.title}>NestedForm</p>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}

// ---------- ResetFormThroughKeyChange --------------------
export function ResetFormThroughKeyChange() {
  const [version, setVersion] = useState(0);

  function handleReset() {setVersion(version + 1);}

  return (
    <><p className={css.title}>ResetFormThroughKeyChange</p>
      <button onClick={handleReset}>Reset</button>
      <FormThroughKeyChange key={version} />
    </>
  );
}

function FormThroughKeyChange() {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hello, {name}.</p>
    </>
  );
}

// -------WorkingWithPreviosState----

export function WorkingWithPreviosState() {
  const [countX, setCountX] = useState(0);
  const [trendX, setTrendX] = useState("increse");

  const [count, setCount] = useState(0);
  return (
    <>
      <p className={css.title}>ResetFormThroughKeyChange</p>
      <p className={css.title}>Simple</p>
      <button onClick={() => {setCountX(countX + 1); setTrendX("increase")} }>
        Increment
      </button>
      <button onClick={() => {setCountX(countX - 1); setTrendX("decrease")}}>
        Decrement
      </button>
      <p>{countX}</p>
      {countX > 0 && <p>Hello {trendX}</p>}<br/><br/>

      <p className={css.title}>Complex</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <CountLabel count={count} />
    </>
  );
}

function CountLabel({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);
  if (prevCount !== count) {setPrevCount(count);  setTrend(count > prevCount ? 'increasing' : 'decreasing');}
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
}

