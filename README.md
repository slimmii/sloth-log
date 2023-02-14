# sloth-log

## What is sloth-log?

sloth-log is a logging library for node.js. It is designed to simulate a human being writing logs in a slowed down fashion. It is possible to configure the speed at which the logs are written, and the library will write the logs at that speed.

## Installation

```bash
npm install sloth-log
```

## Usage

You can use sloth-log in a synchronous or asynchronous manner. The asynchronous manner is recommended, as it will not block the event loop.

### Synchronous

```javascript
const slothLog = require('sloth-log');

slowthLog.log('Hello World!');
```

### Asynchronous

```javascript

const slothLog = require('sloth-log');

await slothLog.logAsync('Hello World!');
```

### Configuration

You can configure the speed at which the logs are written by passing a second argument to the log function. The second argument is an object with the following properties:
- speed: The speed at which the logs are written in milliseconds
- maxWordsAtOnce: The maximum number of words that can be written at once. This is to simulate a human being writing the logs.

```javascript
const slothLog = require('sloth-log');

slotLog.log('Hello World!', { speed: 1000, maxWordsAtOnce: 2 });
```

