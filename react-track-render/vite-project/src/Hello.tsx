import React, {useState} from 'react'

export default function Hello({
  text
}) {
  console.log('text', text)
  const [str, setStr] = useState(text)
  return (
    <div>
      {str}
    </div>
  )
}
