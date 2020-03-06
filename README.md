# ameno-ipsum
Lorem Ipsum generator based on Era's music Ameno

## Instalation

```
npm i ameno-ipsum
```
or
```
yarn add ameno-ipsum
```

## How to use

#### Object creation

To use it in your project you need to import the class `AmenoIpsum` and create the object for the generation of the words, sentences or paragraphs.

In the object constructor you have the following properties:

|Property|Description|Values|
|---|---|---|
|textFormat|In order to choose the format of the output|'plain'(default), 'html'|
|minWordsPerSentence|Minimum quantity of words that a generated setence should have|number(default:3)|
|maxWordsPerSentence|Maximum quantity of words that a generated setence should have|number(default:10)|
|minSentencesPerParagraph|Minimum quantity of setences that a generated paragraph should have|number(default:3)|
|maxSentencesPerParagraph|Maximum quantity of setences that a generated paragraph should have|number(default:7)|

#### Methods


|Method|Parameters|
|---|---|
|generateWords|quantity: number|
|generateSentences|quantity: number|
|generateParagraphs|quantity: number|

## Example of use

```
const AmenoIpsum = require('ameno-ipsum').AmenoIpsum;
// import { AmenoIpsum } from 'ameno-ipsum';

const amenoObject = new AmenoIpsum();
console.log(amenoObject.generateWords(3));
console.log(amenoObject.generateSentences(5));
console.log(amenoObject.generateParagraphs(4));
```
