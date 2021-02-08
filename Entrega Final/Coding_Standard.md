# Code Conventions for the JavaScript Programming Language

This is a set of coding conventions and rules that we used in this project.


### Naming
All properties, functions and method we used are camelCase.

### Variable:
```javascript
let editStatus = false;
let id = '';
```

### Functions
We declared the functions before we used it.

```javascript
const getEvents = () => db.collection('events').get();

const getEvent = (id) => db.collection('events').doc(id).get();

const onGetEvents = (callback) => db.collection('events').onSnapshot(callback);

const deleteEvent = id => db.collection('events').doc(id).delete();

const updateEvent = (id, updatedEvent) => db.collection('events').doc(id).update(updatedEvent);
```

### Constants
We declared all the constants at the top of the page.
```javascript
const db = firebase.firestore();
const eventForm = document.getElementById('event-form');
const informationContainer = document.getElementById('information-container');
```

### Identation

We used 4 spaces for identation. Unlike in idiomatic whitespace must not be used _inside_ parentheses between the parentheses and their Contents
```javascript
if (!editStatus) {
        await saveEvent(title.value, description.value, date.value, place.value, build.value);
    } else {
        await updateEvent(id, {
            title: title.value,
            description: description.value,
            date: date.value,
            place: place.value,
            build: build.value
        })
```


### Comments


Comments come before the code they refer to and must always be preceded by a blank line. Capitalize the first letter of the comment and include a period at the end when writing complete sentences. There must be a single space between the comment token (//) and the comment text.
```javascript
//Function to request all data from firebase
const getEvents = () => db.collection('events').get();

//Function that an event returns us, not to be confused with the one above
const getEvent = (id) => db.collection('events').doc(id).get();

//It updates the data every time an action is performed
const onGetEvents = (callback) => db.collection('events').onSnapshot(callback);
```

### Event handlers
When using event handlers to listen for browser events it’s a common requirement to want to cancel the default browser action. This should be done by calling the event.preventDefault() method:
```javascript
eventForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = eventForm['event-title'];
    const description = eventForm['event-description'];
    const date = eventForm['event-date'];
    const place = eventForm['event-place'];
    const build = eventForm['event-build'];
```

### Semicolon
We used this advice:

Semicolon, use them, use them. Never rely on automatic semicolon insertion (ASI).


### Spacing
Use spaces generously throughout your code. "When in doubt, separate it."

These rules encourage free space to improve developer readability. The minification process creates a file that is optimized for browsers to read and process.

+ Tabbed indentation.
+ No blanks at the end of the line or blank lines.
+ Generally, lines should not be longer than 80 characters and should not exceed 100 (counting tabs as 4 spaces). This is a "soft" rule, but long lines generally indicate unreadable or disorganized code.
+ if / else / for / while / Tryblocks must always use braces and must always go on multiple lines.
+ Unary operators special characters (for example, ++, -) must not have a space next to their operand.
+ Any, and; must not have a preceding space.
+ Whichever is; used as a statement terminator must be at the end of the line.
+ Any: after a property name in an object definition must not have a leading space.
+ The? And: in a ternary conditional must have space on both sides.
+ No padding spaces in empty constructs (for example, {}, [], fn ()).
+ There should be a new line at the end of each file.
+ Any! Negation operator must have a following space. *
+ All function bodies are indented by a tab, even if the entire file is wrapped in a closure. *
+ Spaces can align code within documentation blocks or within a line, but only tabs should be used at the beginning of a line. *


|[ :arrow_left: 5. Development Process](Development.md)|[ 7. Api Frameworks :arrow_right:](Apis_Frameworks.md)|
|---|---|