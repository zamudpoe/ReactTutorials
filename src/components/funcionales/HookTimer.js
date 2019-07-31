import React from 'react'

function HookTimer () {
  const [timer, setTimer] = React.useState(0)
  const intervalRef       = React.useRef()
  const inputEl           = React.useRef(null)

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus()
  }

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1)
      }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <hr/>
      <h3>Hook Timer: { timer } segs </h3>
      <button onClick={ () => clearInterval(intervalRef.current) } >Clear Hook Timer</button>
      <br/><br/>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  )
}

export default HookTimer
