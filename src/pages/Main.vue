<template>
    <my-dialog v-model:show="dialogVisible"></my-dialog>
    <div>
      <h2><img class="img" src="1.png"></h2>
      <div class="welcometext"><strong>
        НАЧНИТЕ ИЗУЧЕНИЕ<br>  АНГЛИЙСКОГО ЯЗЫКА<br> 
        ВМЕСТЕ С WordWide
      </strong></div>
    
      <div class="regform">
        <h2 style="
        position: absolute;
            font-family: 'Comfortaa', sans-serif;
            font-size: 33px;
            margin-left:5%;
            margin-top:30px;
        ;"
        >
        Записаться на пробное занятие
        </h2>
        <div class="regforminputs">
          <my-input id="name_main"
          style="position: absolute;
          font-family: 'Comfortaa', sans-serif;
          font-size: 23px;
          margin-left:5%;
          margin-top:12vh;
          ;"
          placeholder="Имя*">
          </my-input>
          <my-input id="phone_main"
          style="position: absolute;
          font-family: 'Comfortaa', sans-serif;
          font-size: 23px;
          margin-left:5%;
          margin-top:22vh;
          ;"
          placeholder="+7(___)-___-__-__*">
          </my-input>
          <my-input id="email"
          style="position: absolute;
          font-family: 'Comfortaa', sans-serif;
          font-size: 23px;
          margin-left:5%;
          margin-top:32vh;
          ;"
          placeholder="вашапочта@mail.ru">
          </my-input>
        </div>
        <div>
          <input type="checkbox" id="policy_chb_main" style="
          width:60vh;
          margin-top:42vh !important;
          margin-left:-19vh !important;
          ">
          <div style="margin-left:13vh;margin-top:-4vh">
            <label for="policy_chb" style="font-family: 'Comfortaa', sans-serif;
            color: black;
            font-size: 1.5vh!important; margin-left:0vh !important;">Нажимая на кнопку, вы соглашаетесь c политикой<br> конфиденциальности и даете согласие на обработку<br> персональных данных</label>  
          
          </div>
          <div id="policy_button" class="button" style="cursor: pointer;color: blue;font-family: 'Comfortaa', sans-serif;margin-left:10vh;margin-top:2vh" @click="$router.push('/policy'),this.$emit('update:show', false)">Политика Конфиденциальности</div>
        </div>
        <my-button id="s_a_a_main" class="regformbutton" @click = "sendEmail">Оставить Заявку</my-button>
        <div class="promises" style="
          font-family: 'Comfortaa', sans-serif;
          
        ">
        <h1 class="promisestext"><strong>
          На нём вы:<br><br>
          -Познакомитесь с преподавателями<br><br>
          -Ознакомитесь с программой обучения<br><br>
          -Пройдете тест на знание английского языка<br>
        </strong></h1>
        </div>
      </div>
    </div>
    <div class="centertext"><strong>Помощь с получением визы и <br>трудоустройством в англоговорящих странах</strong></div>
    <h2 style="
      position:absolute;
      display:inline-block;
      font-family: 'Comfortaa', sans-serif;
      font-size: 3vh;
      margin-left:29vh;
      margin-top:12vh;

      ;"
      >
      Для нас очень важно, чтобы наши ученики <br>смогли использовать полученные знания <br>на практике, поэтому
      после окончания <br>курса - мы помогаем с трудоустройством<br> в англоговорящих странах.<br>
      Таким образом вы закрепите свои знания в<br>разговоре с носителями языка в<br> естественной обстановке
    </h2>
    <img src="5.jpg" style="
    margin-left:112vh;
    margin-top:10vh;;
    display:inline-block;
    width:28%;
    border-radius: 20px;
    height: auto">
  <div>
    </div>
    <div class="allcources">
      <div class="centertext"> 
        <strong>Курсы на все случаи жизни</strong>
      </div>
      <div class="cource1">
        <strong class="courcetext">
          Свободное общение<br>
        </strong>
        <div class="courcetext">
          <br>Уверенное общение <br> в любых ситуациях<br><br><br><br>
          9 000 рублей в месяц
        </div>
        <my-button id="btn_course1" class="coursebtn" @click="$router.push('/courses') ">ПОДРОБНЕЕ</my-button>
      </div>
      <div class="cource2">
        <strong class="courcetext">
        Деловое общение<br>
        </strong>
        <div class="courcetext">
          <br>Универсальный курс <br>для работы и <br>бизнеса<br><br><br>
          11 000 рублей в месяц
        </div>
        <my-button id="btn_course2" class="coursebtn" @click="$router.push('/courses')">ПОДРОБНЕЕ</my-button>
      </div>
      <div class="cource3">
        <strong class="courcetext">
        Путешествия<br>
        </strong>
        <div class="courcetext">
          <br>Общение за <br>границей без <br>словарей и <br>переводчиков<br><br>
          10 000 рублей в месяц
        </div>
        <my-button id="btn_course3" class="coursebtn" @click="$router.push('/courses') ">ПОДРОБНЕЕ</my-button>
      </div>
    </div>
    <div style="height:fit-content;padding-top:1vh;padding-bottom:5vh; margin-top:10vh;background-color: rgb(226, 226, 226);">
      <div>
        <div style="" class="centertext">
          <strong>Преподаватели, которые прошли <br>долгий путь становления профессионалами </strong>
        </div>
        <div>
          <div  style="margin-top:10vh;margin-left:30vh;display: inline-block;">
            <img style="width: 20vh; height: auto; margin-left:2vh" src="victor.png">
            <div class="t_text"
            >Виктор
            </div>
            <div class="t_age">
              Стаж 14 лет
            </div>
          </div>
          <div  style="margin-left:7%;display: inline-block;">
            <img style="width: 20vh; height: auto; margin-left:3vh" src="nikita.png">
            <div class="t_text"
            >Никита
            </div>
            <div class="t_age">
              Стаж 21 год
            </div>
          </div>
          <div  style=";margin-left:7%;display: inline-block;">
            <img style="width: 20vh; height: auto; margin-left:6vh" src="valentina.png">
            <div class="t_text">Валентина
            </div>
            <div class="t_age">
              Стаж 17 лет
            </div>
          </div>
          <div  style=";margin-left:7%;display: inline-block;">
            <img style="width: 20vh; height: auto" src="petr.png">
            <div class="t_text">Петр
            </div>
            <div class="t_age">
              Стаж 12 лет
            </div>
          </div>
          <my-button id="tchr_btn" style="width:50vh;margin-left:72vh;margin-top:10vh;border-radius: 30px;;font-size: 2vh;background-color:rgb(144, 113, 255);" @click="$router.push('/teachers'); ">ПОДРОБНЕЕ О ПРЕПОДАВАТЕЛЯХ</my-button>
        </div>
        
      </div>
      <div style="" class="centertext">
        <strong>Более 200 000 учеников выучили английский в WordWide, станьте и вы одним из них </strong>
      </div>
      <div class="comment1">
        <img style="margin-top:4vh;margin-left:4vh;width: 17vh; height: auto" src="nikcom.png">
        <div style="
        margin-left:25vh;
        margin-top:-17vh;
        font-family: 'Comfortaa', sans-serif;
        font-size: 3vh;
        ">
          Николай Гордеев 24 октября 2023
        </div>
        <div style="
          margin-left:25vh;
          margin-top:3vh;
          font-family: 'Comfortaa', sans-serif;
          font-size: 3vh;;
          ">
          <strong>После обучения не обманули и действительно помогли с визой и трудоустройством на работу, в общем - класс.</strong>
        </div>
      </div>
      <div class="comment2">
        <img style="margin-top:4vh;margin-left:4vh;width: 17vh; height: auto" src="anncom.png">
        <div style="
        margin-left:25vh;
        margin-top:-17vh;
        font-family: 'Comfortaa', sans-serif;
        font-size: 3vh;
        ">
        Анна Вивицкая 9 июля 2023
        </div>
        <div style="
        margin-left:25vh;
          margin-top:3vh;
          font-family: 'Comfortaa', sans-serif;
          font-size: 3vh;;
          ">
          <strong>Закончила обучение год назад , я посоветовала эту школу двум своим подругам, они так-же как и я довольны обучением.</strong>
        </div>
      </div>
      <div class="comment3">
        <img style="margin-top:4vh;margin-left:4vh;width: 17vh; height: auto" src="viccom.png">
        <div style="
        margin-left:25vh;
        margin-top:-17vh;
        font-family: 'Comfortaa', sans-serif;
        font-size: 3vh;
        ">
        Виктор Длиноухов 22 апреля 2023
        </div>
        <div style="
        margin-left:25vh;
          margin-top:3vh;
          font-family: 'Comfortaa', sans-serif;
          font-size: 3vh;;
          ">
          <strong>Хорошая школа, преподаватели очень хорошо и интересно объясняют материал.
            Помощь с оформлением визы вообще неоценимая, устройство на работу было без проблем.</strong>
        </div>
      </div>
    </div>
    <div id="footer" class="footer">
      <div style="
      position:absolute;
      margin-left:2%;
      margin-top:2%;
      font-family: 'Comfortaa', sans-serif;
      font-size: 25px;
      color:white
      ">
        Телефон: +7 999 999 99 99<br>
        Email: wordwide@study.com<br>
        Группа ВКонтакте: WordWideStudy<br><br><br>



        © WordWide 2024 Курсы английского языка
      </div>
  </div>
  </template>
  
<script language="JavaScript">
 
import emailjs from '@emailjs/browser';

export default {
  mounted(){
    window.addEventListener("load", () => this.onloadfunction_main());
    window.addEventListener("click", () => this.onloadfunction_main());

    
  },
  data(){
    return{
        dialogVisible:false
    }
  },
  methods:{
        onloadfunction_main(){ 
          const policy_chb_main_elem = document.getElementById("policy_chb_main");
          const s_a_a_main_elem = document.getElementById("s_a_a_main");
          const name_main_elem = document.getElementById('name_main');
          const phone_main_elem = document.getElementById("phone_main");
          try{
            function fill_checker(){
            if(name_main_elem.value !== "" & phone_main_elem.value !== "" & policy_chb_main_elem.checked){
              s_a_a_main_elem.className = "regformbutton"
            }
            else{ 
              s_a_a_main_elem.className = "regformbutton_deact"
            }
          }
          fill_checker()
          }catch(e){
            stoperror(e);
          }
          function stoperror() {
            return true;
          }
        },
        sendEmail() {
          var templateParams = {
            name: document.getElementById('name_main').value,
            phone: document.getElementById('phone_main').value,
            email: document.getElementById('email').value,
          };
          emailjs
            .send('service_fsf4f3p', 'template_5x4ylmi', templateParams, {
              publicKey: 'KXwrBIeOZ8uoleXFf',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            )   
        }
    }
}

</script>
  
<style scoped>
.footer{
  height:40vh;
  background-color: rgb(0, 0, 0);
  z-index: 501;
}
.img{
  width: 100%;
  height: 100%;
}
.img2{
  width: 100%;
  height: 96vh;
}
.welcometext{
  position: absolute;
  top: 30%;
  left: 30%;

  transform: translate(-50%, -50%);

  background: none;
  color: rgb(255, 255, 255);
  border: 0px solid rgb(255, 255, 255);
  font-family: 'Comfortaa', sans-serif;
  font-size: 56px;
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: white;

}
.regform{
  margin: 0 auto;
  margin-top: 2%;
  max-width: 70%;
  height: 100px;
  background-color: rgb(224, 224, 224);
  border-radius: 20px;
  height:65vh; 
  margin-bottom: 2%;
}
.regformbutton{
  background-color: aqua !important;
  padding: 10px 15px;
  letter-spacing: 0.0625em;
  width: 27%;
  height:auto;
  border-radius: 30px;
  border: 0px solid rgb(255, 255, 255);
  position: absolute;
  font-family: 'Comfortaa', sans-serif;
  color: black;
  cursor:pointer;
  font-size: 23px;
  margin-left:5%!important;
  margin-top:4vh !important;

  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: black;
}
.regformbutton_deact{
  background-color: rgb(153, 151, 151,77%) !important;
  padding: 10px 15px;
  letter-spacing: 0.0625em;
  width: 27%;
  height:auto;
  border-radius: 30px;
  border: 0px solid rgb(255, 255, 255);
  position: absolute;
  font-family: 'Comfortaa', sans-serif;
  color: rgb(255, 255, 255);
  font-size: 23px;
  margin-left:5%!important;
  margin-top:4vh !important;
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
}
.promises{
  
  position: absolute;
  padding: 5vh 3vh;
  border: solid black 2px;
  margin: 0 auto;
  margin-top: -39vh;
  margin-left: 35%;
  width: 32%;
  height: 47%;
  background-color: rgb(224, 224, 224);
  border-radius: 20px;
}
.promisestext{
  font-size: 3vh;
  margin-top: 10px;
  margin-left: 20px;
}
.specialstext{
  position: absolute;
  top: 213%;
  left: 25%;
  transform: translate(-50%, -50%);
  padding: 10px 15px;
  background: none;
  color: rgb(255, 255, 255);
  border: 0px solid rgb(255, 255, 255);
  font-family: 'Comfortaa', sans-serif;
  font-size: 46px;
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: white;

}
.specialsbtn{
  position: absolute; 
  background-color: rgb(253, 93, 0);
  top: 240%;
  left: 4%;
  width: 40%;
  height: 8%;
  border-radius: 50px;
  font-family: 'Comfortaa', sans-serif;
  font-size: 23px;
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: white;

}
.centertext{
  margin-top:5vh;
  text-align: center;
  font-family: 'Comfortaa', sans-serif;
  font-size: 40px;
}
.courcetext{
  
  display: flex;
  font-family: 'Comfortaa', sans-serif;
  font-size: 3vh;
}
.cource1{
  padding: 3vh 3vh 3vh 3vh;
  margin-top: 7vh;
  margin-left:32vh;
  width: 42vh;
  height: 40vh;
  background-color: rgb(212, 212, 212);
  border-radius: 30px;
  display: inline-block;

}
.cource2{
  padding: 3vh 3vh 3vh 3vh;
  margin-left:4vh;
  width: 42vh;
  height: 40vh;
  background-color: rgb(212, 212, 212);
  border-radius: 30px;
  display: inline-block;

}
.cource3{
  padding: 3vh 3vh 3vh 3vh;
  margin-left:4vh;
  width: 42vh;
  height: 40vh;
  background-color: rgb(212, 212, 212);
  border-radius: 30px;
  display: inline-block;
}
.coursebtn{
  background-color: rgb(144, 113, 255)!important;
  width: 30vh;
  border-radius: 30px;
  position: absolute;
  font-family: 'Comfortaa', sans-serif;
  color: black;
  font-size: 1.5vh!important;
  margin-left:3vh;
  margin-top:3vh;
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: black;
}
.comment1{
  margin: 0 auto;
  margin-top: 5vh;

  max-width: 100vh;
  height: 30vh;
  background-color: rgb(212, 212, 212);
  border-radius: 30px;
  margin-bottom: 2%;
}
.comment2{
  margin: 0 auto;
  margin-top: 5vh;

  max-width: 100vh;
  height: 30vh;
  background-color: rgb(212, 212, 212);
  border-radius: 30px;

  margin-bottom: 2%;
}
.comment3{
  margin: 0 auto;
  margin-top: 5vh;
 
  max-width: 100vh;
  height: 30vh;
  background-color: rgb(212, 212, 212);
  border-radius: 30px;


  margin-bottom: 2%;
}
.t_text{
  margin-left:1vh;
  margin-top:5vh;
  font-family: 'Comfortaa', sans-serif;
  font-size: 5vh;
}
.t_age {
  margin-left:1vh;
  margin-top:5vh;
  font-family: 'Comfortaa', sans-serif;
  font-size: 3vh;
  
}
</style>