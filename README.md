# Bootbox React
bootbox-react is a wrapper of the **bootboxjs <[http://bootboxjs.com](http://bootboxjs.com)>** module for React. 
Fancy alerts and confirm dialogs built on top of Bootstrap. Check the website for more information.

## How To Install

- Install:
`npm i --save bootbox-react`

## How to Use

```
import  React, {useState} from  'react';
import  Bootbox  from  'bootbox-react';
...
function  App() {
	const [show, setShow] = useState(false);
	
	const  handleYes = () => {
		console.log("You clicked Yes!");
		return setIsShow(false);
	}
	
	const  handleNo = () => {
		console.log("You clicked No!");
		return  setIsShow(false);
	}
	return(
		<>
		<button onClick={ () => setShow(true) } Confirm </button>
		<Bootbox  show={show}  type={"confirm"}  message={"Do That?"}  onSuccess={handleYes}  onCancel={handleNo}  />
		</>
	)
}

export default App
	
```
## Props
| #               | show        | type               | message        | onSuccess                       | onCancel                       |
|-----------------|-------------|--------------------|----------------|---------------------------------|--------------------------------|
| PropType        | bool        | string             | string         | function                        | function                       |
| Is Required     | required    | required           | required       | optional                        | optional                       |
| Accepted Values | true, false | "alert", "confirm" | "Your message" | callback function to handle Yes | callback function to handle No |
| Default         | false       | null               | ""             | null                            | null                           |