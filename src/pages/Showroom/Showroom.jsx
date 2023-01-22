import React from 'react'
import ReactPlayer from 'react-player'
import Questions from '../../Components/Questions'

const ShowRoom = () => {
  return (
    <div className='Showroom'>
      <div className="container">
        <h2 class="showroom-title title">
          <span>
            НАШ ШОУРУМ
          </span>
        </h2>
        <div>
          <img className="secondImg" src="https://eleanboutique.ru/image/cache/catalog/novinki2021/6r4a0376-450x530.jpg" alt="" />
          <img className="fristImg" src="https://eleanboutique.ru/image/cache/catalog/novinki2021/6r4a0346-450x530.jpg" alt="" />
          <img src="https://eleanboutique.ru/image/cache/catalog/novinki2021/6r4a0253-450x530.jpg" alt="" />
        </div>
        <div className="allTitlesabout">
          <div className="showroomtitles">
            <div className="showroomabout">
              Насладитесь уютной атмосферой пространства шоурума ELEAN, с Вами индивидуально поработает стилист бренда, поможет с выбором образа и проконсультирует.
            </div>
            <div className="showroomabout">
              Угоститесь чашкой кофе или бокалом игристого, пока мы упакуем Вашу покупку.
            </div>
            <div className="showroomabout">
              Визит в шоурум ELEAN - возможность побаловать себя и инвестировать время в свою уверенность и красоту.
            </div>
          </div>
          <div className='lishki'>
            <ul l className="titlesaboutshowroom">
              <li className="lishki">Оплата банковской картой или наличными</li>
              <li className="lishki">Заказ изделий других цветов</li>
              <li className="lishki">Корректировка длины изделия</li>
              <li className="lishki">Подбор готового образа</li>
            </ul>
          </div>
        </div>
        <div className="showroomvideos">
          <h2 className="headervideo">
            ВИДЕО ПРИМЕРОК В ШОУРУМЕ
          </h2>
          <div className='reactPlayers'>
            <div className="reactblockplayers">
              <ReactPlayer style={{ width: "200px" }} url="https://youtu.be/5yG_JHH4Fyg" />
            </div>
            <div className="reactblockplayers">
              <ReactPlayer style={{ width: "200px" }} url="https://youtu.be/09mQTJZGOq8" />
            </div>
            <div className="reactblockplayers">
              <ReactPlayer style={{ width: "200px" }} url="https://youtu.be/Z7O1TldAeVg" />
            </div>
            <div className="reactblockplayers">
              <ReactPlayer style={{ width: "200px" }} url="https://youtu.be/gxNaftEOE0E" />
            </div>
          </div>
        </div>
        <div className="querstion">
          <Questions className="Questions" />
        </div>
      </div>
    </div>
  )
}

export default ShowRoom