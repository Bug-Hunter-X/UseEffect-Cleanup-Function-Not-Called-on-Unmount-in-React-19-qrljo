```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(true);

  useEffect(() => {
    console.log('Effect running');
    const cleanup = () => {
      console.log('Cleanup function running');
    };
    return () => {
      if (shouldCleanup) {
          cleanup();
      }
    };
  }, [shouldCleanup]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleUnmount = () => {
    setShouldCleanup(false);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}

export default MyComponent;
```