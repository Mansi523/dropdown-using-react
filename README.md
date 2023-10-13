# React Simple Dropdown Component

This is a simple dropdown component built using React. The dropdown displays a list of options when hovering over the button and closes the dropdown when an option is clicked.

## Usage

To use the dropdown component in your React application, follow these steps:

### Installation

First, make sure you have a React project set up. If not, you can create one using Create React App or any other method.

1. Clone or download this repository.

2. Copy the `Dropdown.js` component into your project.

### Props

The `Dropdown` component accepts a single prop:

- `items` (Array): An array of items to display in the dropdown list.

### Example Usage

```javascript
import React from 'react';
import Dropdown from './Dropdown';

const options = ['Option 1', 'Option 2', 'Option 3'];

function App() {
  return (
    <div className="App">
      <h1>Simple Dropdown Example</h1>
      <Dropdown items={options} />
    </div>
  );
}

export default App;

### Author
# Mansi Kumari

### Landing page
<a href="https://drop-down-33b95.web.app"><img src="https://i.ibb.co/qYtzyrw/Screenshot-26.png" alt="Screenshot-26" border="0" height="400" width="400"></a>

### Demo

 https://drop-down-33b95.web.app

