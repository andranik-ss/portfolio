import styles from './divider.module.scss'

type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
}

export function Divider({ orientation }: DividerProps) {
  return (
    <>
      <hr
        className={`${styles.divider} ${orientation === 'vertical' ? styles.vertical : ''}`}
        role='separator'
        aria-orientation={orientation}
      />
    </>
  )
}
