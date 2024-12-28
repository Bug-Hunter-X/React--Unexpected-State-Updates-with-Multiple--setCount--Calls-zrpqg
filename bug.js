```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
  }, [count]); // Only re-run if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); //This will lead to a wrong result 
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```