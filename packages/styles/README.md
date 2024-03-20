# `@rarui/styles`

The style package that contains all the variables and rules necessary for the components to work.

## Installation

```sh
$ yarn add @rarui/styles
# or
$ npm install @rarui/styles
```

## Usage

We import the Design System component and the CSS styles file for our project, thus allowing the use of the component in the project.

```jsx
// App.tsx
import React from "react";
import "@rarui/styles/dist/index.css";

import { Button } from "@rarui/button";

const MyApp: React.FC = () => {
  const onClickButton = () => {
    alert("hello world!");
  }

  return (
    <Button appearance="primary" onClick={handleClick}>
      ...
    </Button>
  );
};

export default MyApp;
```
