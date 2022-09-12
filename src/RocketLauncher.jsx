import React, { useEffect } from 'react'

const RocketLauncher = (props) => {
  let counter = 300000

  useEffect(() => {
    const countdown = () => console.log(counter -= 1)
    console.log('Rocket launcher mounted')
    let interval = setInterval(countdown, 1000)
  })

  return (
    <p>Rocket launcher is counting down</p>
  )
}

export default RocketLauncher