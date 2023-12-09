import style from './index.module.scss'
function Article({title}) {
  return (
    <article className={style.section}>
        <h3 className={style.section__title}>{title}</h3>
        <button className={style.section__button}>
            Submit to <span>{title}</span>
        </button>
    </article>
  )
}

export default Article