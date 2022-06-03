import React from 'react'

import classes from './Input.module.css'

// forwardRef 로 컴포넌트를 감싸서 사용자 지정 컴포넌트에서 ref 가 작동할 수 있게끔 한다.
const Input = React.forwardRef((props, ref) => {  
  return (
      <div className={classes.input}>
          <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} id={props.input.id} {...props.input}/>
    </div>
  )
})

export default Input