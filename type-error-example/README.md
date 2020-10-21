
# TypeError: Class.yourStaticMethod is not a function Example

An example showing the danger of crossing your class dependencies

## How to use

```
$ npm start
```
## Example Routes
`http://localhost:3000/users/register` will result in a TypeError.

`http://localhost:3000/users/refactor` works, and will return JSON.

`http://localhost:3000/issues/save` will return JSON.

## Don't Give A Fork? (TL/DR)

- "TypeError: Not a function" can occur when a class requires a dependency that is, itself, dependent on that class

- To fix it, refactor so one of the two classes is not dependent on the other