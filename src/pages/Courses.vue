<template>
    
    <div style="padding-top:13vh;padding-botton:0vh;">
        <div class="crs1" style="">
            <div class="crs_name" style="font-family: 'Comfortaa', sans-serif;
            font-size: 3vh;
            color:rgb(0, 0, 0)">
                <strong>Свободное общение</strong>
            </div>
            <div class="crs_desc" style="font-family: 'Comfortaa', sans-serif;
            font-size: 3vh;
            color:rgb(0, 0, 0);margin-top:2vh">
                Курс, для людей, которые хотят свободно общаться с носителями языка и понимать английскую речь на слух<br><br>
                9 000 рублей в месяц
            </div>
            <my-button  class="btn_crs" @click='dialogVisible=true'>ОСТАВИТЬ ЗАЯВКУ</my-button>
        </div>
        <div class="crs1" >
            <div class="crs_name" style="font-family: 'Comfortaa', sans-serif;
            font-size: 3vh;
            color:rgb(0, 0, 0)">
                <strong>Деловое общение</strong>
            </div>
            <div class="crs_desc" style="font-family: 'Comfortaa', sans-serif;
            font-size: 3vh;
            color:rgb(0, 0, 0);margin-top:2vh">
                Курс, для людей, которые хотят освоить все необходимые навыки и получить знания о деловых разговорах<br><br>
                11 000 рублей в месяц
            </div>
            <my-button  class="btn_crs" @click='dialogVisible=true'>ОСТАВИТЬ ЗАЯВКУ</my-button>
        </div>
        <div class="crs1" >
            <div class="crs_name" style="font-family: 'Comfortaa', sans-serif;
            font-size: 3vh;
            color:rgb(0, 0, 0)">
                <strong>Путешествия</strong>
            </div>
            <div class="crs_desc" style="font-family: 'Comfortaa', sans-serif;
            font-size: 3vh;
            color:rgb(0, 0, 0);margin-top:2vh">
                Курс, для людей, которые хотят отработать ситуации возникающие во время путешествий и заграничных поездок<br><br>
                10 000 рублей в месяц
            </div>
            <my-button style="" class="btn_crs" @click='dialogVisible=true'>ОСТАВИТЬ ЗАЯВКУ</my-button>
        </div>
    </div>
    <my-dialog v-model:show="dialogVisible"></my-dialog>
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

<script>
    export default {
        data(){
            return{
                dialogVisible:false
            }
        }
    }
</script>

<style scoped>
.crs1{
    margin: 0 auto;
    margin-bottom: 2vh ;
    padding:3vh;
    background-color:rgb(212, 212, 212);
    height:fit-content;
    width:75vh;
    border-radius: 30px;
}
.btn_crs{
    
    width:40vh;
    margin-top:2vh;
    margin-left:14vh;
    border-radius: 30px;
    font-size: 2vh;
    background-color:rgb(144, 113, 255);
}
.footer{
    height:40vh;
    background-color: rgb(0, 0, 0);
    z-index: 501;
}
</style>