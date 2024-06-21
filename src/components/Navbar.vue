<template>
    <div id="navbar" class="navbar">
        <div>
        </div>  
        <div id="wwname1" class="wwname" @click="$router.push('/');sitepath='/';"><img 
        style="height: 10vh;width:auto;margin-top:-3vh;" src="logo.png"
        >
             <div style="margin-top:-7vh ;margin-left:9vh ;">WordWide</div>
        </div>
        <div id="navbar__btns" class="navbar__btns">
            <my-button id="navbar__btn1" style="margin-left:0vh" @click="$router.push('/teachers'); ">ПРЕПОДАВАТЕЛИ</my-button>
            <my-button id="navbar__btn2" style="margin-left:0vh" @click="$router.push('/courses');">КУРСЫ</my-button>
            <my-button id="navbar__btn5" style="margin-left:0vh" @click="$router.push('/about');">О НАС</my-button>
            <my-button id="navbar__btn6" style="margin-left:0vh" @click="$router.push('/onlinetest');">ОНЛАЙН ТЕСТ</my-button>
        </div>
            <my-button-gray id="navbar__btn4" class="appl_btn" style="margin-left:auto" @click='dialogVisible=true'>ОСТАВИТЬ ЗАЯВКУ</my-button-gray>
    </div>
    <my-dialog v-model:show="dialogVisible">
    </my-dialog>
</template>

<script language="JavaScript">
import detectChangeUrl from 'detect-url-change'; 

export default {
    mounted(){
    window.addEventListener("load", () => this.onloadfunction_navbar());
    window.addEventListener("click", () => this.onloadfunction_navbar());
    detectChangeUrl.on('change', (newUrl) => {window.scrollTo(0, 0);});
    },
    create() {
        
    },
    data(){
        return{
            dialogVisible:false,
            
        }
    },
    methods:{
        onloadfunction_navbar(){ 
            const navbarelem = document.getElementById("navbar");
            const wwnameelem = document.getElementById("wwname1");
            const navbar__btnelem1 = document.getElementById("navbar__btn1");
            const navbar__btnelem2 = document.getElementById("navbar__btn2");
            const navbar__btnelem4 = document.getElementById("navbar__btn4");
            const navbar__btnelem5 = document.getElementById("navbar__btn5");
            const navbar__btnelem6 = document.getElementById("navbar__btn6");
            let page_addr=window.location.href;

            function navbarnormal(){ 

                navbarelem.style.background = "NONE"
                wwnameelem.style.color = "white"
                navbar__btnelem1.className = "btn"
                navbar__btnelem2.className = "btn"
                navbar__btnelem5.className = "btn"
                navbar__btnelem4.className = "btn_two"
                navbar__btnelem6.className = "btn"

            }       

            function navbarscrolled(){

                navbarelem.style.background = "white"
                wwnameelem.style.color = "black"
                navbar__btnelem1.className = "btnscrolled"
                navbar__btnelem2.className = "btnscrolled"
                navbar__btnelem5.className = "btnscrolled"
                navbar__btnelem4.className = "btn_twoscrolled"
                navbar__btnelem6.className = "btnscrolled"
            }
            function scrollcheck() {
                if (scrollY > 100) {
                    navbarnormal()
                    window.scrollTo(0, 0);
                }
                if (scrollY == 0){
                    navbarnormal()
                }
            }
            
            wwnameelem.onclick = scrollcheck

            navbar__btnelem1.onclick = navbarscrolled
            navbar__btnelem2.onclick = navbarscrolled
            navbar__btnelem5.onclick = navbarscrolled
            navbar__btnelem6.onclick = navbarscrolled


            function checker(){
                if (page_addr.indexOf('teachers') > -1 || page_addr.indexOf('about') > -1 || page_addr.indexOf('courses') > -1 || page_addr.indexOf('reviews') > -1 || page_addr.indexOf('policy') > -1 || page_addr.indexOf('onlinetest') > -1 || page_addr.indexOf('result') > -1)
                {
                    
                    navbarscrolled()
                }
            }
            window.addEventListener('scroll', () => {
                if (page_addr.indexOf('teachers') == -1 || page_addr.indexOf('about') == -1 || page_addr.indexOf('courses') == -1 || page_addr.indexOf('reviews') == -1 || page_addr.indexOf('policy') == -1 || page_addr.indexOf('onlinetest') == -1)
                {
                    
                    if (scrollY > 100 ) {
                    navbarscrolled()
                    }
                    if (scrollY == 0 ){
                        navbarnormal()
                        checker()
                    }
                }
            
            })
            checker()       
        }
    }
}










</script>



<style scoped>
.navbar {
    height: 80px;
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    align-items: center;
    padding: 0 15px;
    position:fixed;
    width: 100%;
    transition: background  0.25s;
    z-index: 500;
}


.navbar__btns{
    
    margin-top: 1vh;
}
.wwname{
    
    padding: 10px 15px;
    background: none;
    color: rgb(255, 255, 255);
    border: 0px solid rgb(255, 255, 255);
    font-family: 'Comfortaa', sans-serif;
    font-size: 30px;
    margin-left:-1vh;
    letter-spacing: 0.0625em;
    cursor:pointer;
}
.btnscrolled {
    padding: 10px 15px;
    background: none;
    color: rgb(0, 0, 0);
    border: 0px solid rgb(255, 255, 255);
    font-family: 'Comfortaa', sans-serif;
    font-size: 2vh !important;
    -webkit-text-stroke-width: 0.25px;
    -webkit-text-stroke-color: rgb(0, 0, 0);
    letter-spacing: 0.0625em;
    cursor:pointer;
}
.btn {
    
    padding: 10px 15px;
    background: none;
    color: rgb(255, 255, 255);
    border: 0px solid rgb(255, 255, 255);
    font-family: 'Comfortaa', sans-serif;
    font-size: 2vh !important;
    -webkit-text-stroke-width: 0.25px;
    -webkit-text-stroke-color: rgb(255, 255, 255);
    letter-spacing: 0.0625em;
    cursor:pointer;
}
.btn_two {
    padding: 0px 0px;
    background: rgb(153, 151, 151,77%);
    color: rgb(255, 255, 255);
    border: 0px solid rgb(255, 255, 255);
    font-family: 'Comfortaa', sans-serif;
    font-size: 2vh !important;
    letter-spacing: 0.0625em;
    border-radius: 30px;
    height: 30px;
    width: 15%;

    cursor:pointer;
    margin-right: 0vh !important;
}
.btn_twoscrolled {
    padding: 0px 0px;
    background: aqua;
    color: rgb(0, 0, 0);
    border: 0px solid rgb(255, 255, 255);
    font-family: 'Comfortaa', sans-serif;
    font-size: 2vh !important;
    letter-spacing: 0.0625em;
    border-radius: 30px;
    height: 30px;
    width: 15%;

    cursor:pointer;
    margin-right: 0vh !important;
}
</style>