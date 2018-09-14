
![Pair class - banner](images/heading-image.png?raw=true "Pair - simple class for pairing values")

# Pair

"Pair" is a **simple pairing class**. This module is easy to use, light, small and has **no dependencies**.

The module is written in TypeScript and compiled into commonJS. 

**This is not any high-tech code. It is not dependent on 666666 modules and does not offer unseen JavaScript magic. Download this, save a minute of your time and use it to make some coffee. We #keepItSimple.**

## Download

You can download the module on [GitHub/value-pair](https://github.com/drozdik-m/value-pair) or using [npm/value-pair](https://www.npmjs.com/package/value-pair) service.

```
npm install value-pair --save
```

## Pair - What is that? (skip if you know)

**Pair is super simple and intuitive class for merging two values.** It may be objects, strings, object and string, array and number, booleans, really whatever you need. 

These types of classes are most often used to store a key and a value. **If you need to save more than two values and keep them together, it is highly recommended to create new and custom class. **

```javascript

//HOW TO STORE KEY AND ITS VALUE?
//Let's show an example. We want to store numbers and their "string form".

//-----One possible solution without objects - two arrays-----
var keys = [
	"zero",
	"one",
	"two",
	"three"
];
var values = [
	0,
	1,
	2,
	3
];

//There are several problems with this one. For example, sorting, moving and the worst one: difficult modification and adding new features.

//-----Well, that is just stupid, let's don't do that. Try objects:-----

var keysAndValue = [
	{ key: "zero", value: 0 },
	{ key: "one", value: 1 },
	{ key: "two", value: 2 },
	{ key: "three", value: 3 }
];

//-----Yes, that is better, but what if we didn't have to write those annoying "key" and "value" words? What if we add some elegance?-----

var pairs = [
	new Pair("zero", 0),
	new Pair("one", 1),
	new Pair("two", 2),
	new Pair("three", 3);
];

//Yes, I love it. Do you?

//-----It goes without saying, but if you need to save more than two values, DON'T DO THIS-----
var numbers = new Pair("one", new Pair("two", new Pair("three", "four"))); //DON'T
//PLEASE DON'T, really, I am serious :D

```

The style is up to you. I like the Pair class and that is why I share it with you. The "unnamed objects style" is also not bad, but under no circumstances, do not use two arrays for handling keys and values. Trust me, I know.

Summary: **The Pair class is useful and elegant for pairing keys and values or just some two values**, but there are more solutions and alternatives. It is up to you to choose one. 

## Usage

### Import and create new Pair

You can import the module using __import__ keyword or __require__ function. In TypeScript, the Pair class is a generic class ("<>" thingies).

```javascript
import { Pair } from "value-pair";

//Instantiate new and empty Pair
var pair = new Pair(); // Both values are now null

//Instantiate new pair with values
var pair = new Pair("key", 1);

//For TypeScript programmers: Pair is a generic class, so declaration in TypeScript would look like:
let pair = new Pair<string, number>("key", 1); //<string, number> or whatever data type you want to store and work with

```

```javascript
var P = require("value-pair");

//Instantiate new Pair
var pair = new P.Pair("key", 1);

```

### Pair

Working with the Pair is easy. Here are all the implemented methods:

```javascript

//Instantiate new Pair
var pair = new Pair("key", 1); //If no constructor parameters provided, the values are null

//Get first (key) value
var key = pair.first;

//Get second ("value") value
var value = pair.second;

//If you store string, boolean or number, you can print those values (debug)
pair.Print();

```

I used "first" and "second" instead of "key" and "value" for general purpose. You can use the Pair class anywhere, not just as a storage for keys and values. I also developed this based on C++ STD.

___

Sorry for my English, I hope it's readable.