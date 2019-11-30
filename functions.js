// const hello = () => {
//   console.log('hello')
// }

// const add = (a, b) => {
//   return a + b
// }

// log a message with a prefix to the console
function message(prefix, name) {
  console.log('[MSG]',prefix, name)
}

function hello(name) {
  message('hello', name)
}

function goodbye(name) {
  message('goodbye', name)
}

function add(a, b) {
  return a + b
}

hello('nancy')

const x = 4
const y = 5

console.log('x=',x,'y=',y)

const sum = add(x, y)

console.log('sum=', sum)

goodbye('nancy')
