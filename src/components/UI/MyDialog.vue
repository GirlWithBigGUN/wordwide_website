<template>
  <form action="mail.php" method="post">
  <div class="dialog" v-if="show === true" @click.stop="hideDialog">
    <button id="hide_dial_btn_one" style="
      position: absolute; 
      color:none; 
      background: none; 
      width:100%; 
      height:100%;
      outline: none;
      z-index: 498;
      border: solid 0px #c5c5c5;">
    </button>
    
      <div @click.stop >
        <div class="regform">
          <h2 style="
          position: absolute;
          font-family: 'Comfortaa', sans-serif;
          font-size: 4vh;
          margin-left:5vh;
          margin-top:3vh;
          z-index: 501
          ;"
          >
          Быстрая запись на курс
          </h2>
          <form action="mail.php" method="post"></form>
          <div class="regforminputs">
            <my-input  v-on:input = "fill_checker" id="name_main"
            style="position: absolute;
            font-family: 'Comfortaa', sans-serif;
            font-size: 23px;
            width:60vh;
            margin-left:5vh;
            margin-top:15vh;
            z-index: 501
            ;"
            placeholder="Имя*" type="text" name="name">
            </my-input>
            <my-input  v-on:input = "fill_checker" id="phone_main"
            style="position: absolute;
            font-family: 'Comfortaa', sans-serif;
            font-size: 23px;
            width:60vh;
            margin-left:5vh;
            margin-top:25vh;
            z-index: 501
            ;"
            placeholder="+7(___)-___-__-__*" type="text" name="phone">
            </my-input>
            <my-input  v-on:input = "fill_checker" id="email"
            style="position: absolute;
            font-family: 'Comfortaa', sans-serif;
            font-size: 23px;
            width:60vh;
            margin-left:5vh;
            margin-top:35vh;
            z-index: 501
            ;"
            placeholder="вашапочта@mail.ru" type="text" name="email">
            </my-input>
            <div>
              <input v-on:click = "fill_checker" type="checkbox" id="policy_chb_main" style="
              width:60vh;
              margin-top:47vh !important;
              margin-left:-23vh !important;
              ">
              <div style="margin-left:10vh;margin-top:-7vh">
                <label for="policy_chb" style="font-family: 'Comfortaa', sans-serif;
                color: black;
                font-size: 1.5vh!important; margin-left:vh !important;">Нажимая на кнопку, вы соглашаетесь c политикой конфиденциальности и даете согласие на обработку<br> персональных данных</label>  
              
              </div>
              </div>
            </div>
          <div id="policy_button" class="button" style="cursor: pointer;color: blue;font-family: 'Comfortaa', sans-serif;margin-left:10vh;margin-top:2vh" @click="$router.push('/policy'),this.$emit('update:show', false)">Политика Конфиденциальности</div>
          <my-button id="s_a_a_main" class="regformbutton_deact" style="
            width:60vh;
            margin-top:4vh !important;
          " type="submit" name="submit" value="Submit">Оставить Заявку</my-button>
        
        </div>
        
        
    </div>
      
  </div>
  </form>
</template>



<script>

import toggleMixin from '@/mixins/toggleMixin'
import emailjs from '@emailjs/browser';

export default {
    name:'my-dialog',
    mixins: [toggleMixin],
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    data(){
    
    },
    methods:{
      fill_checker(){
        let policy_chb_main_elem = document.getElementById("policy_chb_main")
        let s_a_a_main_elem = document.getElementById("s_a_a_main")
        let name_main_elem = document.getElementById('name_main')
        let phone_main_elem = document.getElementById("phone_main")

        if(name_main_elem.value !== "" & phone_main_elem.value !== "" & policy_chb_main_elem.checked){
          s_a_a_main_elem.className = "regformbutton"
        }
        else{ 
          s_a_a_main_elem.className = "regformbutton_deact"
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
        );
    },

        
    }
}


</script>

<style scoped>
.dialog{
    top:0;
    bottom: 0;
    right: 0;
    left:0%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 499
}   
.regform{
    
    position: absolute;
    margin-left: 64vh ;
    margin-top: 10%;
    width: 70vh;
    height: 70vh;
    background-color: rgb(224, 224, 224);
    border-radius: 20px;
    margin-bottom: 2%;

    z-index: 501 !important
  }
.dialog_content{
  top:0;
  bottom: 0;
  right: 0;
  left:0%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 501
}
  .regformbuttondialog{ 
    
    background-color: aqua !important;
    width: 20vh;
    border-radius: 30px;
    position: absolute;
    font-family: 'Comfortaa', sans-serif;
    color: black;
    font-size: 3vh!important;
    margin-left:5vh!important;
    margin-top:28% !important;
    z-index: 501;
    -webkit-text-stroke-width: 0.25px;
    -webkit-text-stroke-color: black;
  }
  .promises{
    position: absolute;
    border: solid black 2px;
    padding: 5vh 3vh;
    margin: 0 auto;
    margin-top: 7%;
    margin-left: 70vh;
    width: 63vh;
    height: 50vh;
    background-color: rgb(224, 224, 224);
    border-radius: 20px;
    z-index: 501
  }
  .promisestext{
    font-size: 3vh;
    margin-top: 10px;
    margin-left: 20px;
    z-index: 501
  }
.regforminputs{
  z-index: 501 ;
  font-size: 3vh!important;
}
.btn_normal {
  background: aqua;

  cursor:pointer;
}
.btn_nonactive {
  background: rgb(153, 151, 151,77%);
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
  font-size: 23px;
  margin-left:5vh!important;
  margin-top:4vh !important;
  cursor:pointer;
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
  margin-left:5vh!important;
  margin-top:4vh !important;
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
}
.header_style{
  position: absolute;
  font-family: 'Comfortaa', sans-serif;
  font-size: 4vh;
  margin-left:5vh;
  margin-top:3vh;
  z-index: 501  
}
.policy_button_style{
  cursor: pointer;
  color: blue;
  font-family: 'Comfortaa', sans-serif;
  margin-left:10vh;
  margin-top:2vh
}
</style>