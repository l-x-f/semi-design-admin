import type { FC } from 'react'
import styles from './style.module.scss'

interface PropsType {
  // svg名字
  iconClass: string
  // 填充颜色
  fill?: string
}

const SvgIcon: FC<PropsType> = props => {
  const { iconClass, fill } = props

  return (
    <i aria-hidden="true" className="anticon">
      <svg className={styles['svg-class']}>
        <use xlinkHref={'#icon-' + iconClass} fill={fill} />
      </svg>
    </i>
  )
}

SvgIcon.defaultProps = { fill: 'currentColor' }

export default SvgIcon
