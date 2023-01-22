import React from 'react'

const ShowroomQuestion = () => {
  return (
   <>
       <div>
        <div class="mainPromo-wrapper"/>
         <img class="mainPromo-icon" src="catalog/view/theme/default/assets/img/promo-icon.svg" alt=""/>
         <h2 class="mainPromo-title title">ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h2>
         <form class="mainPromo__form" method="post" role="form" data-toggle="validator" enctype="multipart/form-data" id="form-sobfeedback37" novalidate="true"/>
            <div class="mainPromo__form-input form-group required has-error"/>
               <input type="text" name="sob_input[1][Введите Имя]" id="sobInput37-1" data-minlength="3" required="" placeholder="Введите Имя" autocomplete="off"/>
               <div class="help-block with-errors"><ul class="list-unstyled"><li>Заполните это поле.</li></ul></div>
               <input type="hidden" class="form-control" name="sob_input[1][required]" id="sobInputHiddden37-1" value="input"/>
            <div/>
            <div class="mainPromo__form-input form-group required has-error"/>
               <input type="text" name="sob_input[2][Введите телефон]" id="sobInput37-2" data-minlength="3" required="" placeholder="Введите телефон" autocomplete="off"/>
               <div class="help-block with-errors"><ul class="list-unstyled"><li>Заполните это поле.</li></ul></div>
               <input type="hidden" class="form-control" name="sob_input[2][required]" id="sobInputHiddden37-2" value="input"/>
            <div/>
            <div class="mainPromo__form-input form-group required border has-error"/>
               <input type="text" name="sob_input[3][Введите удобное время]" id="sobInput37-3" data-minlength="3" required="" placeholder="Введите удобное время" autocomplete="off"/>
               <div class="help-block with-errors"><ul class="list-unstyled"><li>Заполните это поле.</li></ul></div>
               <input type="hidden" class="form-control" name="sob_input[3][required]" id="sobInputHiddden37-3" value="input"/>
            <div/>
            <textarea name="sob_input[4][Добавить комментарий]" id="sobInputText37-4" rows="3" placeholder="Добавить комментарий"></textarea>
<div class="hidden-inputs"/>
               <input type="hidden" name="link_page" value="https://eleanboutique.ru/showroom.html"/>
               <input type="hidden" name="module_name" value="ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ"/>
               <input type="hidden" name="module_id" value="37"/>
               <input type="hidden" name="form_success" value="Спасибо, запись на примерку успешно оформлена!"/>
            <div/>
            <button type="submit" class="mainPromo__form-btn disabled">ОТПРАВИТЬ</button>
         <form/>
         <div class="mainPromo-bottom">Поля отмеченные “*” обязательны для заполнения</div>
         <div class="mainPromo-bottom-privacy">Нажимая на кнопку "отправить", вы соглашаетесь с условиями <a href="/terms.html" target="_blank">политики конфиденциальности<a>.<div/>
      <div/>
    <div/>
   </>
  )
}

export default ShowroomQuestion