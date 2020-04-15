# Bootbox React
bootbox-react is a wrapper of the **bootboxjs <[http://bootboxjs.com](http://bootboxjs.com)>** module for React. 
Fancy alerts, confirm and prompt dialogs built on top of Bootstrap. Check the website for more information.

## How To Install

- Install:
`npm i --save bootbox-react`

## How to Use

```
import  React, {useState} from  'react';
import  Bootbox  from  'bootbox-react';
...
function  App() {
	const [showConfirm, setShowConfirm] = useState(false);
	const [showAlert, setShowAlert] = useState(false)
	const [showPrompt, setShowPrompt] = useState(false)
	
	const handleConfirm = () => {
		console.log("You clicked Yes!");
		return setShowConfirm(false);
	}
	
	const handleCancel = () => {
		console.log("You clicked No!");
		return setShowConfirm(false);
	}

	const handleClose = () => {
		console.log("You closed Alert!");
		return setShowAlert(false);
	}

	const handlePrompt = (result) => {
		console.log(`User input: ${result}`);
		return setShowPrompt(false);
	}

	return(
		<>
			<button onClick={ () => setShowConfirm(true) } Confirm </button>
			<Bootbox show={showConfirm} 
				type={"confirm"}  
				message={"Do That?"}  
				onSuccess={handleYes}  
				onCancel={handleNo}  
				onClose={handleNo} 
			/>

			<button onClick={ () => setShowAlert(true) } Alert </button>
			<Bootbox show={showAlert} 
				type={"alert"}  
				message={"This is a simple alert"}  
				onClose={handleClose} 
			/>

			<button onClick={ () => setShowPrompt(true) } Prompt </button>
			<Bootbox show={showPrompt} 
				type={"prompt"}  
				message={"What's your name"}  
				onPrompt={handlePrompt} 
			/>
		</>
	)
}

export default App
	
```
## Props
| Name            | show        | type                         | message        | onSuccess                       | onCancel                       | onClose                                      | onPrompt                                 | cancelClassNames                      | successClassNames                      | cancelLabel                          | successLabel                          |
|-----------------|-------------|------------------------------|----------------|---------------------------------|--------------------------------|----------------------------------------------|------------------------------------------|---------------------------------------|----------------------------------------|--------------------------------------|---------------------------------------|
| PropType        | bool        | string                       | string         | function                        | function                       | function                                     | function                                 | string                                | string                                 | string                               | string                                |
| Is Required     | required    | required                     | required       | required for 'confirm'          | required for 'confirm'         | required for 'alert', optional for others    | required for 'prompt'                    | optional                              | optional                               | optional                             | optional                              |
| Accepted Values | true, false | "alert", "confirm", "prompt" | "Your message" | callback function to handle Yes | callback function to handle No | callback function to call when box is closed | callback function to handle user's input | classname(s) to apply to "No" button" | classname(s) to apply to "Yes" button" | Custom label to apply to "No" button | Custom label to apply to "Yes" button |
| Default         | false       | null                         | ""             | null                            | null                           | null                                         | null                                     | "btn-danger"                          | "btn-primary"                          | "No"                                 | "Yes"                                 |