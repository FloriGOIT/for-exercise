import { useState, useEffect, useRef, forwardRef,createContext, useContext } from "react";
import css from "./App.module.css"



//-------------Reference HooK-----------------
//-------------Basic Reference HooK-----------------
export const ReferenceHook = () => 
  {
    const [value, setValue] = useState(null);
    const btnRef = useRef();
    const valueRef = useRef(0);

  console.log("general:", btnRef.current); //montare si randare
  console.log("general:", valueRef.current); //montare si randare
  useEffect(() => {console.log("useEffect: ", btnRef.current, valueRef.current)}); //montare si randare

  const handleClick = () => {console.log("handleClick: ", btnRef.current);}; //nu genereaza useEffect sau console.log general

  const handleClickSecond = () => {console.log("handleClickSecond: ", valueRef.current)};

  return (
    <>
      <p className={css.title}> Basic Reference HooK </p>
      <button onClick={() => setValue(value + 1)}>
        Update {value} to trigger re-render 
      </button>
      <p><b>recunoaste la montare(1st undefine if no value) si randare</b></p>

      <br/><br/>

      <button ref={btnRef} onClick={handleClick}> 
        Button with ref 
      </button> 
      <p><b>nu genereaza useEffect sau console.log general, nu se aplica optiunea de montare si rerender al aceste componente</b></p>

      <br/><br/>


      <button onClick={handleClickSecond}>Click to update ref value</button>
    </>
  );
  }
//-------------Video Reference HooK-----------------
  export const PlayerApp = ({ source }) => {
    const playerRef = useRef();
    const play = () => playerRef.current.play();
    const pause = () => playerRef.current.pause();
  
    return (
      <div>
        <p className={css.title}> Video Reference HooK</p>
        <video ref={playerRef} src={source} style={{width:"320px", height:"240px"}} type="video/mp4" controls>
          Sorry, your browser does not support embedded videos.
        </video>
        <div>
          <p>added attribute   auto"controls"  to video</p>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
        </div>
      </div>
    );
  };

//-------------Video Reference HooK with forwardRef----------------- 
  export  const VideoApp = () => {
    const ref = useRef(null);
    return (
      <>
        <p className={css.title}> Video Reference HooK with forwardRef </p>
        <VideoPlayerApp ref={ref}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"  width="250" /> <br/>
        <button onClick={() => ref.current.play()}>Play</button>
        <button onClick={() => ref.current.pause()}>Pause</button>
      </>
    );
  }
  const VideoPlayerApp = forwardRef(function VideoPlayerApp({ src, type, width }, ref) {
    return (
      <video width={width} ref={ref}>
        <source
          src={src}
          type={type}
        />
      </video>
    );
  });

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
      <p className={css.title}>Working With Previos State</p>
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


// -------ShortVideoRepetedPlayPause----
export function ShortVideoRepetedPlayPause()
{
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlyaing = () => {setIsPlaying(isPlaying => !isPlaying)}

  return(<>
         <p className={css.title}>ShortVideoRepetedPlayPause</p>
         <button type="button" onClick={handlePlyaing}>
          {isPlaying ? "Pause" : "Play"}
         </button>
         <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
         </>)
}

function VideoPlayer({isPlaying, src})
{
  const ref = useRef(null);
  useEffect( () => 
                {
                  if(isPlaying){ref.current.play()}
                  else{ref.current.pause()}
                 });
  return <video ref={ref} src={src} style={{width: "200px", height:"200px"}} loop playsInline/>
}

// -------MountingAndUnmountingUseEffectOnConsoleLOG----
export function MountingAndUnmountingUseEffectOnConsoleLOG() {
  const [show, setShow] = useState(false);
  return (
    <>
      <p className={css.title}> MountingAndUnmountingUseEffectOnConsoleLOG </p>
      <button onClick={() => setShow(!show)}>
        {show ? 'Unmount' : 'Mount'} the component
      </button>
      {show && <hr />}
      {show && <ShowConsole />}
    </>
  );
}

function ShowConsole() {
  const [text, setText] = useState('a');

  useEffect(() => 
    {console.log('🔵 Schedule new test: ' + text);
     function onTimeout() {console.log('⏰ ' + text);}
     const timeoutId = setTimeout(onTimeout, 3000);
     return () => { console.log('🟡 Clean previous text ' + text );
                  clearTimeout(timeoutId);};}, [text]);

  return (
    <>
      <label>
        What to log:{' '}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  );
}

// -------UseEffectStages----

export function TimerNoDependency() 
{
  const [count, setCount] = useState(0);
  const increment = () => {setCount(count + 1)}
  useEffect(() => {let timer = setTimeout(increment, 60000); console.log("mounted")
                   return () => {clearTimeout(timer); console.log("cleared")}});
  return (<>
           <p className={css.title}>UseEffectStages: Timer NO array Dependency</p>
           <h1>I have rendered {count} times, at one minute interval</h1>
          </>)       
}

export function TimerEmptyArrayDependency() 
{
  const [count, setCount] = useState(0);
  
  useEffect(() => {let timer = setTimeout(() => {setCount((count) => count + 1);}, 1000);
                   console.log("mounted once")
                   return () => {clearTimeout(timer); console.log("cleared once")}
    }, []); // <- add empty brackets here
  return (<>
           <p className={css.title}>UseEffectStages: Timer Empty array Dependency</p>
           <h1>I have rendered {count} times  in 5 seconds.</h1>
          </>)       
}

export function CounterWithValueArrayDependency() 
{
  const [count, setCount] = useState(0)
  const [calc, setCalc] = useState(0)
  const handleCountCalc = () => setCount(count + 1)
 
  useEffect( () => {setCalc (calc => count * 2)}, [count])
  
  
  return(
        <>
          <p className={css.title}>UseEffectStages: Counter With Value Array Dependency</p>
          <p>Count: {count}</p>
          <button onClick={handleCountCalc}>Press me</button>
          <p>Count multiplied by 2: {calc}</p>
        </> 
         )
}

// -------CustomHookToogle----

export function CustomHookToogle() {
  const {isOpen, toggleFunc} = useToggle(true);

  return (
    <div>
      <p className={css.title}>Custom Hook useToogle</p>
      <p>The toggle is <strong>{isOpen ? 'ON' : 'OFF'}</strong></p>
      <button onClick={toggleFunc}>
        {isOpen ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}
function useToggle(initialValue = false) {//mandatory initialstate in order to set true DOWN
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggleFunc = () => {setIsOpen(isOpen => !isOpen)}

  return {isOpen, toggleFunc};
}


// -------CustomHookImage----
function useImages(initialImages = []) {
  const [images, setImages] = useState(initialImages);

  const addImage = (url) => {
    setImages(images => [...images, url]);
  };

  const removeImage = (url) => {
    setImages(images => images.filter((image) => image !== url));
  };

  return [images, addImage, removeImage];
}
const initialImages = [
  'https://pixabay.com/get/g4d357cf435d8926216676c76cf03fca3963cf60d57e04e6c1979bd54cf18f0864fc9243befc2999af65d72988a0a57843520315a0b79d62739f8b7f7afae30d7_1280.jpg',
  'https://pixabay.com/get/g4b195c856a5a5cb86b589e720eee6b0ccd6a737db0942ac27e32445436b491b03c2cd6d69ff4c042a3880a02eb1b7b9acb795b039ae54de2bb637c2a955bd9e6_1280.jpg',
  "https://pixabay.com/get/g802baf599379ecdcb955a63cdb6fa376b34f4e36696a67130154f775f5a015f127869a2591640a8a4bb83a611ed69b2515bb02b2f02d7456997e72b5603c961e_1280.jpg",
  "https://pixabay.com/get/gc54fe04e13c7fe1b556e4f22891eb6329f84213ec0d1fa712e3c4987043ac017ec12f00694ada204227c49b7fa2e8f3140245750d68611cd71c897cc68385795_1280.jpg"
];

export function ImageGallery() {
  const [images, addImage, removeImage] = useImages(initialImages);
  const [newImageUrl, setNewImageUrl] = useState('');

  const handleAddImage = () => {
    if (newImageUrl) {
      addImage(newImageUrl);
      setNewImageUrl('');
    }
  };

  return (
    <div>
      <p className={css.title}>Custom Hook Image</p>
      <h1>Image Gallery</h1>
      <input
        type="text"
        value={newImageUrl}
        onChange={(e) => setNewImageUrl(e.target.value)}
        placeholder="Enter image URL"
      />
      <button onClick={handleAddImage}>Add Image</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {images.map((url, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img src={url} alt="" style={{ width: '200px', height: 'auto' }} />
            <button
              onClick={() => removeImage(url)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------useContext----first
const UserContext = createContext();

export function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <p className={css.title}>Custom Use Context first exemple</p>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (<> <h1>Component 2</h1> 
             <Component3 />
          </>);}


function Component3() {
  const {user, setUser} = useContext(UserContext);
  
  return (
    <>
      <h1>Component 3</h1>
      <button onClick={() => setUser(`to you Flory`)}>click</button>
      <h2>{`Hello ${user} !`}</h2>
    </>
  );
}

// -------useContext----second

const UserContextSecond = createContext();

export function Component1Second () {
  const [user] = useState("Jesse Hall");
  
  return (
    <UserContextSecond.Provider value={user}>
      <p className={css.title}>Custom Use Context second exemple</p>
      <h1>{`Hello ${user}!`}</h1>
      <Component2Second  />
    </UserContextSecond.Provider>
  );
}

function Component2Second () {
  return (
    <>
      <h1>Component 2</h1>
      <Component3Second  />
    </>
  );
}


function Component3Second () {
  const defaultUserName = useContext(UserContextSecond); // Get the default user from context
  const [localUser, setLocalUser] = useState(defaultUserName); // Local state for displayed user

  return (
    <>
      <h1>Component 3</h1>
      <button onClick={() => setLocalUser('Flory')}>Click</button>
      <h2>{`Hello ${localUser}!`}</h2>
    </>
  );
}


//-------------  Logging useContext----------------------
//1 provider -> sohn -> Enkel
export const Logging = () => {return <div><p className={css.title}>Logging useContext</p> <Menu /> </div>}

//------------- 2 UserMenu ----------------------
const Menu = () => 
  {
    const {isLogged,handleIN,handleOUT} = UseSetContext();
    return(<>
         {isLogged ? <Details/> : (<p>Please LOG IN! </p>) }
         {isLogged ? (<button onClick = {handleOUT}>Logged OUT</button>) :(<button onClick = {handleIN}>Logged IN</button>) }
           </>)
  }

const Details = () => 
  {
    const {userName} = UseSetContext();
                       return <p>Hello {userName}. How are you today?</p> 
  }  
//------------- 3 Context ----------------------

const SetContext = createContext();
const UseSetContext = () => useContext(SetContext);

export const ContextProvider = ({children}) => 
  {const [userName, setuserName] = useState("Please LOG IN!");
   const [isLogged, setisLogged] = useState(false);
   const handleIN = () => {setuserName("Florentina Vachente"); setisLogged(true)};
   const handleOUT = () => {setuserName("Please LOG IN! "); setisLogged(false)}; 

    return(<SetContext.Provider value = {{userName, isLogged,handleIN, handleOUT}}>
              {children}
           </SetContext.Provider>)
  }

//-------------  Toggle Modal----------------------

export const useTogglefunc = () => 
{ 
  const [visible, isVisible] = useState(false)
   const handleModalVisibility = () => {isVisible(visible => !visible)};
   return {visible, handleModalVisibility}
}

export const Toggle  = () => 
  { const {visible, handleModalVisibility} = useTogglefunc();
    return( <div>
              <p className={css.title}>useToggle for Modal - custome hook</p>
              {visible && < Modal handleClose={handleModalVisibility} visibility={visible}/>}
              {!visible && <button onClick={handleModalVisibility}>Open the Modal</button>}
            </div>)
  }

const Modal = ({visibility, handleClose}) => 
  { 
    return(<div className={css.modaloverlay}>
              <div className={css.modalcontent} >
                <h2>This is the Modal</h2>
                <p>Hello Flori! The modal is visible</p>
                <h3>{`${visibility}`}</h3>
                <button onClick={handleClose}>Close Modal</button>
              </div>
           </div>)
  }

  