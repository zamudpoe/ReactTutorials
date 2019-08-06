import React from 'react'
import useDocumentTitle from '../CustomHooks/useDocumentTitle'

function DocTitleOne () {
  const [count, setCount] = React.useState(0)

  useDocumentTitle(count)

  return (
    <div>
      <button onClick={ () => setCount(count + 1) } >count - { count }</button>
    </div>
  )

}

export default DocTitleOne
