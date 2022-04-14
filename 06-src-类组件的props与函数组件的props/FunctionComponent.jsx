import React from 'react'
import PropTypes from 'prop-types'
export default function FunctionComponent(props) {
  /* 函数式组件你直接通过参数props来拿父组件传递的数据 */
  console.log(props);
  const { games, flag } = props
  return (
    <div>
      <h2>我是函数式组件</h2>
      <ul>
        {
          games.reverse().map(item => {
            return (
              <li key={item.id}>{item.name}--{flag ? '!' : '22'}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
FunctionComponent.defaultProps = {
  flag: true
}
FunctionComponent.propTypes = {
  games: PropTypes.array,
  flag: PropTypes.bool
}