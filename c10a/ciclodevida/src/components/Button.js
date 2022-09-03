import '..//App.css';

export default function Button({click}) {
  return (
    <button onClick={(e)=>{click(e, "hola mundo")}}>Click</button>
  );
}

