import { useEffect } from 'react'

function useDocumentTitle (count) {
  useEffect(() => {
    console.log('Custom Hook useDocumentTitle')
    document.title = `Count ${count}`
  }, [count])
}

export default useDocumentTitle
