<template>
  <section class="cta section-pad" id="request">
    <div>
      <p class="eyebrow">Заявка</p>
      <h2>Расскажите о пространстве, которое хотите создать</h2>
      <p>Мы свяжемся, уточним задачу и предложим первичный маршрут: камень, роспись, ландшафт, свет или комплексное решение.</p>
    </div>
    <form name="archterra-request" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="archterra-request">
      <label>Имя<input name="name" autocomplete="name" placeholder="Как к вам обращаться"></label>
      <label>Телефон<input name="phone" autocomplete="tel" placeholder="+7"></label>
      <label>Задача<textarea name="message" rows="4" placeholder="Кратко опишите проект"></textarea></label>
      <button class="btn dark" type="submit">Отправить заявку</button>
    </form>
  </section>
</template>
