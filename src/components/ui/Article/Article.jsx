import style from './index.module.scss'
function Article({title,photo}) {
  return (
    <article className={style.section} style={{background:`url(${photo}) no-repeat top center/cover`}} >
        <h3 className={style.section__title}>{title}</h3>
        <button className={style.section__button}>
            Submit to <span className={style.section__button_title}>{title}</span>
        </button>
    </article>
  )
}

export default Article