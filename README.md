# Documents, Please

A game that requires you to identify inconsistences and make a decision accordingly.

## Design Patterns Used

In this game, five design patterns are used. 

- Proxy
- Observer
- State
- Decorator
- Singleton

There are some characteristics similar to other design patterns, but we mainly focused on the five.

### Proxy

For proxy, the idealogy behind the usuage of this design pattern was to implement the use of a database, through the means of communication using PHP, HTML, and JavaScript. This proxy class uses its function from the extended class, which therefore acts as a gateway to the main class.

### Observer

Observer behavioural design patterns define a notification mechanism that alerts the user about the action they have choosen, this is in regards to the buttons of approve and deny, and the text in the lower canvas screen shows the descision.

### State

Behavioural state design pattern was implemented in the game that allowed the object to alter its behavioural when the internal state changes, in this case depending on the gate state, the user can or can not interact with the approve and deny buttons.

### Decorator

Decorator is a pattern that allows behaviour to be added in a object (canvas). In the game, circle class acted as the decorator allowing to add drawn on onclick events to the canvas. It also allows it to draw shapes on the canvas for clearer and better structure.

### Singleton

Singleton design pattern is responsible for creating an object that involves a single class while making sure, only a single object get created. In relation to this, the canvas class acts as a single class while creates the object from multiple classes, it acts as the main organiser for the seperated classes.


## Installation

Before installing certain criterias need to met, they include;
- PHP 8.0+
- PHPStorm (Recommended)

## <b>IMPORTANT!</b>

<b>Make sure to update your .env file when you intially create it in the IDE. Then change DB_DATABASE=documentsplease</b>

```bash
DB_DATABASE=documentsplease
```
<b>After you've done this, open up your xampp and open phpmyadmin, add a database called docuemntsplease. When you're creating the database, it should remain empty. On the first running of the game, the tables and columns should create by itself when you first initially log.</b>

Download and extract the folder containing the game.
Open up PHPStorm or any other IDE that can read JS/PHP/HTML/CSS all in one.
Use the below in terminal to open a local server from your machine by using the command below.

```bash
php artisan serve
```

When the command has been entered, click on the IP of your local server and Enjoy!

## Usage

To play the game, there are two buttons, red and green. These buttons determine if the person at the counter can pass the inspection or fail it.

The determining of a pass or a fail depends on the documents they provide. The documents have certain dates, names and pictures, this information has to be checked in order to make a decision using the buttons.

## Contributing

Even after this assignment, we will be working on it further so that the game can be more polished.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Documents, Please UML Class Diagram

![alt text](https://github.com/skitzke/DocumentsPlease/blob/main/UML%20Class%20Diagram/Design%20Patterns%20UML%20.jpeg?raw=true)
