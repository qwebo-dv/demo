const directions = [
  {
    title: "Природный камень",
    label: "Камень",
    text: "Фасады, интерьеры, террасы и лестницы из натурального камня с точной подгонкой и авторским подбором фактур.",
    meta: "травертин · известняк · мрамор",
    className: "stone",
  },
  {
    title: "Художественная роспись",
    label: "Фрески",
    text: "Интерьерная и монументальная роспись мастером с академической подготовкой — от эскиза до финального слоя.",
    meta: "стены · купола · панно",
    className: "fresco",
  },
  {
    title: "Ландшафт",
    label: "Ландшафт",
    text: "Композиция участка, озеленение, маршруты, дворики и террасы как единая среда вокруг архитектуры.",
    meta: "сады · дворы · террасы",
    className: "garden",
  },
  {
    title: "Архитектурный свет",
    label: "Свет",
    text: "Световые сценарии для фасадов, интерьеров и сада с подбором оборудования через профильных подрядчиков.",
    meta: "фасады · интерьер · вечерний сад",
    className: "light",
  },
];

const steps = ["Знакомство и бриф", "Эскизная концепция", "Подбор материалов", "Реализация мастерами"];

export default function Home() {
  return (
    <main>
      <header className="topbar" aria-label="Главная навигация">
        <div className="line" />
        <a className="brand" href="#hero" aria-label="ArchTerra на главную">
          ArchTerra
        </a>
        <div className="line" />
      </header>

      <section className="hero" id="hero">
        <nav className="nav" aria-label="Разделы сайта">
          <a href="#about">О нас</a>
          <a href="#portfolio">Проекты</a>
          <a href="#services">Услуги</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="hero__art" aria-hidden="true">
          <div className="mountains" />
          <div className="fresco-figure" />
          <div className="villa" />
          <div className="stairs" />
        </div>
        <div className="hero__content">
          <p className="eyebrow">Москва · Эстетика природы и пространства</p>
          <h1>Природный камень и архитектура без времени</h1>
          <p>
            ArchTerra объединяет камень, авторскую роспись, ландшафт и свет в
            цельные решения для резиденций, интерьеров и дворовых территорий.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contacts">Заказать консультацию</a>
            <a className="button button--ghost" href="#portfolio">Смотреть портфолио</a>
          </div>
        </div>
      </section>

      <section className="philosophy" id="about">
        <p className="section-kicker">Философия бренда</p>
        <h2>Архитектура в природном материале</h2>
        <p>
          Мы проектируем не набор услуг, а авторскую среду: слышим архитектуру,
          раскрываем фактуру камня, добавляем ручную работу художника, живую
          зелень и мягкие вечерние сценарии света.
        </p>
      </section>

      <section className="masters" aria-labelledby="masters-title">
        <div>
          <p className="section-kicker">Мастера ArchTerra</p>
          <h2 id="masters-title">Команда ремесла, дизайна и точной реализации</h2>
        </div>
        <div className="masters__grid">
          <article>
            <span>01</span>
            <h3>Мастер камня</h3>
            <p>Ведёт подбор породы, раскладку и монтаж с вниманием к швам, углам и природному рисунку.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Художник</h3>
            <p>Создаёт фрески, панно и монументальные композиции с академической пластикой и мягкой палитрой.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Ландшафтный архитектор</h3>
            <p>Собирает сад, двор и террасы в спокойный маршрут вокруг дома и ключевых видовых точек.</p>
          </article>
        </div>
      </section>

      <section className="directions" id="services" aria-labelledby="services-title">
        <p className="section-kicker">Направления</p>
        <h2 id="services-title">Материалы, живопись, сад и свет в единой композиции</h2>
        <div className="cards">
          {directions.map((item) => (
            <article className={`service-card ${item.className}`} key={item.title}>
              <div className="service-card__overlay" />
              <div className="service-card__content">
                <p>{item.meta}</p>
                <h3>{item.label}</h3>
                <span>{item.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div>
          <p className="section-kicker">Портфолио</p>
          <h2>Проекты с выразительной фактурой и спокойной роскошью</h2>
        </div>
        <div className="portfolio__list">
          <article>
            <span>Частная резиденция</span>
            <strong>Каменный фасад и терраса у воды</strong>
          </article>
          <article>
            <span>Интерьер</span>
            <strong>Авторская фреска в гостиной</strong>
          </article>
          <article>
            <span>Дворовая территория</span>
            <strong>Сад, дорожки и вечерний свет</strong>
          </article>
        </div>
      </section>

      <section className="process" aria-labelledby="process-title">
        <p className="section-kicker">Этапы работы</p>
        <h2 id="process-title">От первого разговора до готового пространства</h2>
        <div className="process__steps">
          {steps.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="contacts">
        <p className="section-kicker">Контакты</p>
        <h2>Расскажите о вашем доме, участке или интерьере</h2>
        <p>ООО «АрхТерра Групп» · archterra.ru</p>
        <form className="lead-form">
          <label>
            Имя
            <input name="name" placeholder="Как к вам обращаться" />
          </label>
          <label>
            Телефон
            <input name="phone" placeholder="+7" inputMode="tel" />
          </label>
          <label>
            Задача
            <textarea name="message" placeholder="Камень, роспись, ландшафт или свет" rows={4} />
          </label>
          <button type="submit">Отправить заявку</button>
        </form>
      </section>
    </main>
  );
}
