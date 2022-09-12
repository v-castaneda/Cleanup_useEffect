# 7.2.7 Activity : Component Lifecycle

## Getting Started
- Hit run
- Explore the code you currently have
- Open the devtools console in your browser (recommended to open the app in a new tab by clicking the button to the right of the Repl.it internal URL bar)

## Mounting
- Import the `RocketLauncher` component on **App.jsx**, then render it underneath `<h1>Learning Cleanup!</h1>`
- At this point, you should notice that the console printed "Rocket launcher mounted" and started counting down from 300000.

```js
  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <RocketLauncher />
    </main>
  )
```

## Unmounting
- To trigger an unmount, conditionally render `<RocketLauncher />` based on the state of `launch`. 
- We will also need a button that inverts the state of launch on a click event: `onClick`.

```js
  return (
    <main>
      <h1>Learning Cleanup!</h1>
           <button onClick={() => setLaunch(!launch)}>
             { launch ? "Abort Rocket Launch" : "Start Rocket Launch" }
           </button>
      { launch ? <RocketLauncher/> : null }
    </main>
  )
```

- Next, in the app browser, click the button a few times to toggle the rocket launcher on and off. We should see the "Rocket launcher mounted" console log when it enters the screen. We should also see multiple counters counting down at the same time.

- It may now be obvious why we need a cleanup, which we will implement next.


## Cleanup
- Inside of the `useEffect` callback in **RocketLauncher.jsx**, return an anonymous function.
- This function should first `console.log('Rocket launcher unmounted')`, then `clearInterval(interval)`.
```js
useEffect(() => {
    const countdown = () => console.log(counter -= 1)
    console.log('Rocket launcher mounted')
    let interval = setInterval(countdown, 1000)

    return () => {
      console.log('Rocket launcher unmounted')
      clearInterval(interval)
    }
  })
```
- Once that is done, try toggling your timer again. Much better!

## Let's see an example of an update
- Add a state variable called `rocketName` to your app. Instantiate the variable with `'Apollo'`.
- Next, we will define a function that handles changing the `rocketName` state variable, so we can specify what rocket is launching. 
```js
  let [rocketName, setRocketName] = useState('Apollo')

  const handleChange = (e) => {
    setRocketName(e.target.value)
  }
```
- To use this function, render a text input and have it call the function `onChange`.
```js
  <input type="text" onChange={handleChange} />
```
- To see the change happen, we have to use the `rocketName` variable somewhere. Replace the "Learning Cleanup!" text with the variable. 
```js
<h1>{rocketName}</h1>
```
- Now try typing in your input while the rocket launcher is on. Watch what happens in the console. Because the App-level is re-rendering every time the state variable `rocketName` changes, we are completely resetting the countdown, updating the component, each time we press a key.

## Taking it further...

- Currently, the `rocketName` change causes the countdown to completely reset. Try to come up with a way to prevent this behavior from happening! *hint: you will need to move existing elements into a new component!*
- Consider how one could dynamically render the value of `counter` to the screen. What changes would we need to make in order to cause that render?