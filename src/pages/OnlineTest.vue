<template>
    <div style="padding-top:10vh;">

    </div>
    <div style="padding-left:40vh;padding-right:40vh">
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">1. ___________________your name?</legend>
                
                <div class="answ_style">
                    <input type="radio" id="1-1" name="answer1" value="1-1" v-on:change="remove_right_answers_func(1) " />
                    <label for="1-1">a) Who’s</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="1-2" name="answer1" value="1-2" v-on:change="add_right_answers_func(1) "  />
                    <label for="1-2">b) What’s</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="1-3" name="answer1" value="1-3" v-on:change="remove_right_answers_func(1) "  />
                    <label for="1-3">c) How’s</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="1-4" name="answer1" value="1-4" v-on:change="remove_right_answers_func(1) "  />
                    <label for="1-4">d) Why’s</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">2. _________ old are you?</legend>
                
                <div class="answ_style">
                    <input type="radio" id="2-1" name="answer2" value="2-1" v-on:change="remove_right_answers_func(2) "  />
                    <label for="2-1">a) Who</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="2-2" name="answer2" value="2-2" v-on:change="remove_right_answers_func(2) "  />
                    <label for="2-2">b) What</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="2-3" name="answer2" value="2-3" v-on:change="add_right_answers_func(2) "  />
                    <label for="2-3">c) How</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="2-4" name="answer2" value="2-4" v-on:change="remove_right_answers_func(2) "  />
                    <label for="2-4">d) When</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">3. Выберите верное</legend>
                
                <div class="answ_style">
                    <input type="radio" id="3-1" name="answer3" value="3-1" v-on:change="add_right_answers_func(3) "  />
                    <label for="3-1">a) I’m 17 years old.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="3-2" name="answer3" value="3-2" v-on:change="remove_right_answers_func(3) "  />
                    <label for="3-2">b) I’ve 17 years old</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="3-3" name="answer3" value="3-3" v-on:change="remove_right_answers_func(3) "  />
                    <label for="3-3">c)  I are 17 years old.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="3-4" name="answer3" value="3-4" v-on:change="remove_right_answers_func(3) "  />
                    <label for="3-4">d) I have 17 years old</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">4. ______a bicycle?</legend>
                
                <div class="answ_style">
                    <input type="radio" id="4-1" name="answer4" value="4-1" v-on:change="remove_right_answers_func(4) "  />
                    <label for="4-1">a) You have</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="4-2" name="answer4" value="4-2" v-on:change="remove_right_answers_func(4) "  />
                    <label for="4-2">b) Has you</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="4-3" name="answer4" value="4-3" v-on:change="add_right_answers_func(4) "  />
                    <label for="4-3">c) Do you have</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="4-4" name="answer4" value="4-4" v-on:change="remove_right_answers_func(4) "  />
                    <label for="4-4">d) You’ve got</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">5. John___________ a tennis racket.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="5-1" name="answer5" value="5-1" v-on:change="add_right_answers_func(5) "  />
                    <label for="5-1">a) hasn’t got</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="5-2" name="answer5" value="5-2" v-on:change="remove_right_answers_func(5) "  />
                    <label for="5-2">b) haven’t</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="5-3" name="answer5" value="5-3" v-on:change="remove_right_answers_func(5) "  />
                    <label for="5-3">c) not has</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="5-4" name="answer5" value="5-4" v-on:change="remove_right_answers_func(5) "  />
                    <label for="5-4">d) haven’t got</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">6. Give it to______.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="6-1" name="answer6" value="6-1" v-on:change="remove_right_answers_func(6) " />
                    <label for="6-1">a) he</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="6-2" name="answer6" value="6-2" v-on:change="remove_right_answers_func(6) " />
                    <label for="6-2">b) I</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="6-3" name="answer6" value="6-3" v-on:change="remove_right_answers_func(6) " />
                    <label for="6-3">c) she</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="6-4" name="answer6" value="6-4" v-on:change="add_right_answers_func(6) "  />
                    <label for="6-4">d) her</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">7. Выберите верное</legend>
                
                <div class="answ_style">
                    <input type="radio" id="7-1" name="answer7" value="7-1" v-on:change="remove_right_answers_func(7) "  />
                    <label for="7-1">a) He no can speak Spanish.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="7-2" name="answer7" value="7-2" v-on:change="add_right_answers_func(7) "  />
                    <label for="7-2">b) He can’t speak Spanish.</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="7-3" name="answer7" value="7-3" v-on:change="remove_right_answers_func(7) "  />
                    <label for="7-3">c) He can’t to speak Spanish.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="7-4" name="answer7" value="7-4" v-on:change="remove_right_answers_func(7) "  />
                    <label for="7-4">d) He no speak Spanish.</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">8. ______________on the left in America.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="8-1" name="answer8" value="8-1" v-on:change="remove_right_answers_func(8) "  />
                    <label for="8-1">a) You mustn’t to drive.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="8-2" name="answer8" value="8-2" v-on:change="remove_right_answers_func(8) "  />
                    <label for="8-2">b) You not must drive.</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="8-3" name="answer8" value="8-3" v-on:change="remove_right_answers_func(8) "  />
                    <label for="8-3">c) You mustn’t driving.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="8-4" name="answer8" value="8-4" v-on:change="remove_right_answers_func(8) "  />
                    <label for="8-4">d) You mustn’t drive.</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">9. Whose desk is this?___________</legend>
                
                <div class="answ_style">
                    <input type="radio" id="9-1" name="answer9" value="9-1" v-on:change="remove_right_answers_func(9) "  />
                    <label for="9-1">a) It’s of Robert.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="9-2" name="answer9" value="9-2" v-on:change="remove_right_answers_func(9) "  />
                    <label for="9-2">b) It’s Robert.</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="9-3" name="answer9" value="9-3" v-on:change="add_right_answers_func(9) "  />
                    <label for="9-3">c) It’s Robert’s</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="9-4" name="answer9" value="9-4" v-on:change="remove_right_answers_func(9) "  />
                    <label for="9-4">d) It’s to Robert.</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">10. Выберите верное</legend>
                
                <div class="answ_style">
                    <input type="radio" id="10-1" name="answer10" value="10-1" v-on:change="remove_right_answers_func(10) "  />
                    <label for="10-1">a) He don’t smoke.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="10-2" name="answer10" value="10-2" v-on:change="remove_right_answers_func(10) "  />
                    <label for="10-2">b) He not smoke.</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="10-3" name="answer10" value="10-3" v-on:change="remove_right_answers_func(10) "  />
                    <label for="10-3">c) He doesn’t smokes.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="10-4" name="answer10" value="10-4" v-on:change="add_right_answers_func(10) "  />
                    <label for="10-4">d) He doesn’t smoke.</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">11. Выберите верное</legend>
                
                <div class="answ_style">
                    <input type="radio" id="11-1" name="answer11" value="11-1" v-on:change="remove_right_answers_func(11) "  />
                    <label for="11-1">a) What means this word?</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="11-2" name="answer11" value="11-2" v-on:change="remove_right_answers_func(11) "  />
                    <label for="11-2">b) What does mean this word?</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="11-3" name="answer11" value="11-3" v-on:change="add_right_answers_func(11) "  />
                    <label for="11-3">c) What does this word mean?</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="11-4" name="answer11" value="11-4" v-on:change="remove_right_answers_func(11) "  />
                    <label for="11-4">d) What is this word mean?</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">12. Walk!</legend>
                
                <div class="answ_style">
                    <input type="radio" id="12-1" name="answer12" value="12-1" v-on:change="remove_right_answers_func(12) "  />
                    <label for="12-1">a) Run not.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="12-2" name="answer12" value="12-2" v-on:change="remove_right_answers_func(12) "  />
                    <label for="12-2">b) Not run.</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="12-3" name="answer12" value="12-3" v-on:change="add_right_answers_func(12) "  />
                    <label for="12-3">c) Don’t run.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="12-4" name="answer12" value="12-4" v-on:change="remove_right_answers_func(12) "  />
                    <label for="12-4">d) No run.</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">13. Listen! I________________to you.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="13-1" name="answer13" value="13-1" v-on:change="add_right_answers_func(13) "  />
                    <label for="13-1">a) am talking</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="13-2" name="answer13" value="13-2" v-on:change="remove_right_answers_func(13) "  />
                    <label for="13-2">b) talk</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="13-3" name="answer13" value="13-3" v-on:change="remove_right_answers_func(13) "  />
                    <label for="13-3">c) do talk</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="13-4" name="answer13" value="13-4" v-on:change="remove_right_answers_func(13) "  />
                    <label for="13-4">d) am talk</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">14. Выберите верное</legend>
                
                <div class="answ_style">
                    <input type="radio" id="14-1" name="answer14" value="14-1" v-on:change="add_right_answers_func(14) "  />
                    <label for="14-1">a) What you are doing?</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="14-2" name="answer14" value="14-2" v-on:change="remove_right_answers_func(14) "  />
                    <label for="14-2">b) What’s you doing?</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="14-3" name="answer14" value="14-3" v-on:change="remove_right_answers_func(14) "  />
                    <label for="14-3">c) What are you doing?</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="14-4" name="answer14" value="14-4" v-on:change="remove_right_answers_func(14) "  />
                    <label for="14-4">d) What are you do?</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">15. ________________ people over there are German.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="15-1" name="answer15" value="15-1" v-on:change="remove_right_answers_func(15) "  />
                    <label for="15-1">a) This</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="15-2" name="answer15" value="15-2" v-on:change="remove_right_answers_func(15) "  />
                    <label for="15-2">b) That</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="15-3" name="answer15" value="15-3" v-on:change="add_right_answers_func(15) "  />
                    <label for="15-3">c) These</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="15-4" name="answer15" value="15-4" v-on:change="remove_right_answers_func(15) "  />
                    <label for="15-4">d) Those</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">16. How many chairs are there?</legend>
                
                <div class="answ_style">
                    <input type="radio" id="16-1" name="answer16" value="16-1" v-on:change="add_right_answers_func(16) "  />
                    <label for="16-1">a) There are five.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="16-2" name="answer16" value="16-2" v-on:change="remove_right_answers_func(16) "  />
                    <label for="16-2">b) There is five.</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="16-3" name="answer15" value="16-3" v-on:change="remove_right_answers_func(16) "  />
                    <label for="16-3">c) It is five.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="16-4" name="answer16" value="16-4" v-on:change="remove_right_answers_func(16) "  />
                    <label for="16-4">d) They are five.</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">17. I haven’t got__________________money.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="17-1" name="answer17" value="17-1" v-on:change="remove_right_answers_func(17) "  />
                    <label for="17-1">a) no</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="17-2" name="answer17" value="17-2" v-on:change="remove_right_answers_func(17) "  />
                    <label for="17-2">b) none</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="17-3" name="answer17" value="17-3" v-on:change="remove_right_answers_func(17) "  />
                    <label for="17-3">c) some</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="17-4" name="answer17" value="17-4" v-on:change="add_right_answers_func(17) "  />
                    <label for="17-4">d) any</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">18. There are_______________people here already.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="18-1" name="answer18" value="18-1" v-on:change="add_right_answers_func(18) "  />
                    <label for="18-1">a) a few</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="18-2" name="answer18" value="18-2" v-on:change="remove_right_answers_func(18) "  />
                    <label for="18-2">b) a little</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="18-3" name="answer18" value="18-3" v-on:change="remove_right_answers_func(18) "  />
                    <label for="18-3">c) a lot</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="18-4" name="answer18" value="18-4" v-on:change="remove_right_answers_func(18) "  />
                    <label for="18-4">d) much</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">19. Were there many people at the party?</legend>
                
                <div class="answ_style">
                    <input type="radio" id="19-1" name="answer19" value="19-1" v-on:change="remove_right_answers_func(19) "  />
                    <label for="19-1">a) Yes, they were.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="19-2" name="answer19" value="19-2" v-on:change="add_right_answers_func(19) "  />
                    <label for="19-2">b) Yes, there were.</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="19-3" name="answer19" value="19-3" v-on:change="remove_right_answers_func(19) "  />
                    <label for="19-3">c) Yes, there was.</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="19-4" name="answer19" value="19-4" v-on:change="remove_right_answers_func(19) "  />
                    <label for="19-4">d) Yes, they was.</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">20. Sarah__________out last night.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="20-1" name="answer20" value="20-1" v-on:change="add_right_answers_func(20) "  />
                    <label for="20-1">a) didn’t went</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="20-2" name="answer20" value="20-2" v-on:change="remove_right_answers_func(20) "  />
                    <label for="20-2">b) didn’t goes</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="20-3" name="answer20" value="20-3" v-on:change="remove_right_answers_func(20) "  />
                    <label for="20-3">c) didn’t go</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="20-4" name="answer20" value="20-4" v-on:change="remove_right_answers_func(20) "  />
                    <label for="20-4">d) no went</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">21. I went to America _____________English.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="21-1" name="answer21" value="21-1" v-on:change="remove_right_answers_func(21) "  />
                    <label for="21-1">a) for learning</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="21-2" name="answer21" value="21-2" v-on:change="remove_right_answers_func(21) "  />
                    <label for="21-2">b) for to learn</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="21-3" name="answer21" value="21-3" v-on:change="add_right_answers_func(21) "  />
                    <label for="21-3">c) to learn</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="21-4" name="answer21" value="21-4" v-on:change="remove_right_answers_func(21) "  />
                    <label for="21-4">d) to learning</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">22. She’s___________than I am.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="22-1" name="answer22" value="22-1" v-on:change="add_right_answers_func(22) "  />
                    <label for="22-1">a) older</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="22-2" name="answer22" value="22-2" v-on:change="remove_right_answers_func(22) "  />
                    <label for="22-2">b) more old</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="22-3" name="answer22" value="22-3" v-on:change="remove_right_answers_func(22) "  />
                    <label for="22-3">c) more older</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="22-4" name="answer22" value="22-4" v-on:change="remove_right_answers_func(22) "  />
                    <label for="22-4">d) most older</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">23. He’s ____________ at tennis than football.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="23-1" name="answer23" value="23-1" v-on:change="remove_right_answers_func(23) "  />
                    <label for="23-1">a) more good</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="23-2" name="answer23" value="23-2" v-on:change="remove_right_answers_func(23) "  />
                    <label for="23-2">b) more better</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="23-3" name="answer23" value="23-3" v-on:change="add_right_answers_func(23) "  />
                    <label for="23-3">c) better</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="23-4" name="answer23" value="23-4" v-on:change="remove_right_answers_func(23) "  />
                    <label for="23-4">d) best</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">24. You’re not___________I am.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="24-1" name="answer24" value="24-1" v-on:change="remove_right_answers_func(24) "  />
                    <label for="24-1">a) as tall than</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="24-2" name="answer24" value="24-2" v-on:change="add_right_answers_func(24) "  />
                    <label for="24-2">b) as tall as</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="24-3" name="answer24" value="24-3" v-on:change="remove_right_answers_func(24) "  />
                    <label for="24-3">c) as taller as</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="24-4" name="answer24" value="24-4" v-on:change="remove_right_answers_func(24) "  />
                    <label for="24-4">d) tall as</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">25. I_________________TV this evening.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="25-1" name="answer25" value="25-1" v-on:change="add_right_answers_func(25) "  />
                    <label for="25-1">a) am going to watch</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="25-2" name="answer25" value="25-2" v-on:change="remove_right_answers_func(25) "  />
                    <label for="25-2">b) go to watch</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="25-3" name="answer25" value="25-3" v-on:change="remove_right_answers_func(25) "  />
                    <label for="25-3">c) watch</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="25-4" name="answer25" value="25-4" v-on:change="remove_right_answers_func(25) "  />
                    <label for="25-4">d) watching</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">26. Выберите верное</legend>
                
                <div class="answ_style">
                    <input type="radio" id="26-1" name="answer26" value="26-1" v-on:change="add_right_answers_func(26) "  />
                    <label for="26-1">a) What time does the train leave?</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="26-2" name="answer26" value="26-2" v-on:change="remove_right_answers_func(26) "  />
                    <label for="26-2">b) What time is the train leave?</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="26-3" name="answer26" value="26-3" v-on:change="remove_right_answers_func(26) "  />
                    <label for="26-3">c) What time the train leave?</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="26-4" name="answer26" value="26-4" v-on:change="remove_right_answers_func(26) "  />
                    <label for="26-4">d) What time leave the train?</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">27. I enjoy________________early.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="27-1" name="answer27" value="27-1" v-on:change="remove_right_answers_func(27) "  />
                    <label for="27-1">a) get up</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="27-2" name="answer27" value="27-2" v-on:change="add_right_answers_func(27) "  />
                    <label for="27-2">b) getting up</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="27-3" name="answer27" value="27-3" v-on:change="remove_right_answers_func(27) "  />
                    <label for="27-3">c) to get up</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="27-4" name="answer27" value="27-4" v-on:change="remove_right_answers_func(27) "  />
                    <label for="27-4">d) to getting up</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">28. Выберите верное</legend>
                
                <div class="answ_style">
                    <input type="radio" id="28-1" name="answer28" value="28-1" v-on:change="remove_right_answers_func(28) "  />
                    <label for="28-1">a) You will come with me tomorrow?</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="28-2" name="answer28" value="28-2" v-on:change="remove_right_answers_func(28) "  />
                    <label for="28-2">b) Do you come with me tomorrow?</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="28-3" name="answer28" value="28-3" v-on:change="remove_right_answers_func(28) "  />
                    <label for="28-3">c) Come you with me tomorrow?</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="28-4" name="answer28" value="28-4" v-on:change="add_right_answers_func(28) "  />
                    <label for="28-4">d) Will you come with me tomorrow?</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">29. Oh no!______________ my key.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="29-1" name="answer29" value="29-1" v-on:change="remove_right_answers_func(29) "  />
                    <label for="29-1">a) I lose</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="29-2" name="answer29" value="29-2" v-on:change="remove_right_answers_func(29) "  />
                    <label for="29-2">b) I’m lost</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="29-3" name="answer29" value="29-3" v-on:change="remove_right_answers_func(29) "  />
                    <label for="29-3">c) I’ve lose</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="29-4" name="answer29" value="29-4" v-on:change="add_right_answers_func(29) "  />
                    <label for="29-4">d) I’ve lost</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">30. _____________English since I was 12.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="30-1" name="answer30" value="30-1" v-on:change="remove_right_answers_func(30) "  />
                    <label for="30-1">a) I’m studied</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="30-2" name="answer30" value="30-2" v-on:change="add_right_answers_func(30) "  />
                    <label for="30-2">b) I’ve been studying</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="30-3" name="answer30" value="30-3" v-on:change="remove_right_answers_func(30) "  />
                    <label for="30-3">c) I learn</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="30-4" name="answer30" value="30-4" v-on:change="remove_right_answers_func(30) "  />
                    <label for="30-4">d) I’ve studying</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">31. I spoke to a girl________ was from Barcelona.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="31-1" name="answer31" value="31-1" v-on:change="remove_right_answers_func(31) "  />
                    <label for="31-1">a) what</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="31-2" name="answer31" value="31-2" v-on:change="remove_right_answers_func(31) "  />
                    <label for="31-2">b) which</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="31-3" name="answer31" value="31-3" v-on:change="add_right_answers_func(31) "  />
                    <label for="31-3">c) who</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="31-4" name="answer31" value="31-4" v-on:change="remove_right_answers_func(31) "  />
                    <label for="31-4">d) whose</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">32. I was in America____________two weeks.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="32-1" name="answer32" value="32-1" v-on:change="remove_right_answers_func(32) "  />
                    <label for="32-1">a) during</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="32-2" name="answer32" value="32-2" v-on:change="add_right_answers_func(32) "  />
                    <label for="32-2">b) for</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="32-3" name="answer32" value="32-3" v-on:change="remove_right_answers_func(32) "  />
                    <label for="32-3">c) in</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="32-4" name="answer32" value="32-4" v-on:change="remove_right_answers_func(32) "  />
                    <label for="32-4">d) on</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">33. When I looked out of the window,___________________.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="33-1" name="answer33" value="33-1" v-on:change="add_right_answers_func(33) "  />
                    <label for="33-1">a) it was snowing</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="33-2" name="answer33" value="33-2" v-on:change="remove_right_answers_func(33) "  />
                    <label for="33-2">b) it were snowing</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="33-3" name="answer33" value="33-3" v-on:change="remove_right_answers_func(33) "  />
                    <label for="33-3">c) it snowed</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="33-4" name="answer33" value="33-4" v-on:change="remove_right_answers_func(33) "  />
                    <label for="33-4">d) it’s snowing</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">34. He left without__________________goodbye.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="34-1" name="answer34" value="34-1" v-on:change="remove_right_answers_func(34) "  />
                    <label for="34-1">a) to say</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="34-2" name="answer34" value="34-2" v-on:change="add_right_answers_func(34) "  />
                    <label for="34-2">b) saying</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="34-3" name="answer34" value="34-3" v-on:change="remove_right_answers_func(34) "  />
                    <label for="34-3">c) say</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="34-4" name="answer34" value="34-4" v-on:change="remove_right_answers_func(34) "  />
                    <label for="34-4">d) said</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">35. I don’t mind_______________________.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="35-1" name="answer35" value="35-1" v-on:change="add_right_answers_func(35) "  />
                    <label for="35-1">a) waiting</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="35-2" name="answer35" value="35-2" v-on:change="remove_right_answers_func(35) "  />
                    <label for="35-2">b) I wait</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="35-3" name="answer35" value="35-3" v-on:change="remove_right_answers_func(35) "  />
                    <label for="35-3">c) to wait</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="35-4" name="answer35" value="35-4" v-on:change="remove_right_answers_func(35) "  />
                    <label for="35-4">d) that I wait</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">36. He speaks English______________________.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="36-1" name="answer36" value="36-1" v-on:change="remove_right_answers_func(36) "  />
                    <label for="36-1">a) good but slow</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="36-2" name="answer36" value="36-2" v-on:change="add_right_answers_func(36) "  />
                    <label for="36-2">b) well but slow</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="36-3" name="answer36" value="36-3" v-on:change="remove_right_answers_func(36) "  />
                    <label for="36-3">c) good but slowly</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="36-4" name="answer36" value="36-4" v-on:change="remove_right_answers_func(36) "  />
                    <label for="36-4">d) well but slowly</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">37. If you _____________the box, you’ll find a present.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="37-1" name="answer37" value="37-1" v-on:change="remove_right_answers_func(37) "  />
                    <label for="37-1">a) opened</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="37-2" name="answer37" value="37-2" v-on:change="remove_right_answers_func(37) "  />
                    <label for="37-2">b) would open</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="37-3" name="answer37" value="37-3" v-on:change="add_right_answers_func(37) "  />
                    <label for="37-3">c) open</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="37-4" name="answer37" value="37-4" v-on:change="remove_right_answers_func(37) "  />
                    <label for="37-4">d) will open</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">38. I like this record.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="38-1" name="answer38" value="38-1" v-on:change="remove_right_answers_func(38) "  />
                    <label for="38-1">a) So do I</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="38-2" name="answer38" value="38-2" v-on:change="add_right_answers_func(38) "  />
                    <label for="38-2">b) So am I</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="38-3" name="answer38" value="38-3" v-on:change="remove_right_answers_func(38) "  />
                    <label for="38-3">c) So I like</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="38-4" name="answer38" value="38-4" v-on:change="remove_right_answers_func(38) "  />
                    <label for="38-4">d) So I do</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">39. You ________________speak perfect English to get this job.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="39-1" name="answer38" value="39-1" v-on:change="add_right_answers_func(39) "  />
                    <label for="39-1">a) don’t have to</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="39-2" name="answer38" value="39-2" v-on:change="remove_right_answers_func(39) "  />
                    <label for="39-2">b) mustn’t</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="39-3" name="answer38" value="39-3" v-on:change="remove_right_answers_func(39) "  />
                    <label for="39-3">c) don’t have</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="39-4" name="answer38" value="39-4" v-on:change="remove_right_answers_func(39) "  />
                    <label for="39-4">d) not have to</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">40. English___________________all over the world.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="40-1" name="answer40" value="40-1" v-on:change="remove_right_answers_func(40) "  />
                    <label for="40-1">a) are spoken</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="40-2" name="answer40" value="40-2" v-on:change="remove_right_answers_func(40) "  />
                    <label for="40-2">b) is speaking</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="40-3" name="answer40" value="40-3" v-on:change="remove_right_answers_func(40) "  />
                    <label for="40-3">c) is spoke</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="40-4" name="answer40" value="40-4" v-on:change="add_right_answers_func(40) "  />
                    <label for="40-4">d) is spoken</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">41. My bike_________________.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="41-1" name="answer41" value="41-1" v-on:change="remove_right_answers_func(41) "  />
                    <label for="41-1">a) have been stolen</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="41-2" name="answer41" value="41-2" v-on:change="remove_right_answers_func(41) "  />
                    <label for="41-2">b) has stolen</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="41-3" name="answer41" value="41-3" v-on:change="remove_right_answers_func(41) "  />
                    <label for="41-3">c) has been stole</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="41-4" name="answer41" value="41-4" v-on:change="add_right_answers_func(41) "  />
                    <label for="41-4">d) has been stolen</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">42. If you______it, it would break.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="42-1" name="answer42" value="42-1" v-on:change="remove_right_answers_func(42) "  />
                    <label for="42-1">a) would drop</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="42-2" name="answer42" value="42-2" v-on:change="add_right_answers_func(42) "  />
                    <label for="42-2">b) will drop</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="42-3" name="answer42" value="42-3" v-on:change="remove_right_answers_func(42) "  />
                    <label for="42-3">c) had dropped</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="42-4" name="answer42" value="42-4" v-on:change="remove_right_answers_func(42) "  />
                    <label for="42-4">d) dropped</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">43. _________________this letter for me.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="43-1" name="answer43" value="43-1" v-on:change="remove_right_answers_func(43) "  />
                    <label for="43-1">a) I want that you mail</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="43-2" name="answer43" value="43-2" v-on:change="add_right_answers_func(43) "  />
                    <label for="43-2">b) I want you to mail</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="43-3" name="answer43" value="43-3" v-on:change="remove_right_answers_func(43) "  />
                    <label for="43-3">c) I want you mail</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="43-4" name="answer43" value="43-4" v-on:change="remove_right_answers_func(43) "  />
                    <label for="43-4">d) I want you mailing</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">44. I didn’t speak to_____________.
                </legend>
                
                <div class="answ_style">
                    <input type="radio" id="44-1" name="answer44" value="44-1" v-on:change="add_right_answers_func(44) "  />
                    <label for="44-1">a) anybody</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="44-2" name="answer44" value="44-2" v-on:change="remove_right_answers_func(44) "  />
                    <label for="44-2">b) something</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="44-3" name="answer44" value="44-3" v-on:change="remove_right_answers_func(44) "  />
                    <label for="44-3">c) nobody</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="44-4" name="answer44" value="44-4" v-on:change="remove_right_answers_func(44) "  />
                    <label for="44-4">d) somebody</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">45. These machines__________________.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="45-1" name="answer45" value="45-1" v-on:change="add_right_answers_func(45) "  />
                    <label for="45-1">a) need overhauling</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="45-2" name="answer45" value="45-2" v-on:change="remove_right_answers_func(45) "  />
                    <label for="45-2">b) need overhauled</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="45-3" name="answer45" value="45-3" v-on:change="remove_right_answers_func(45) "  />
                    <label for="45-3">c) need to overhaul</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="45-4" name="answer45" value="45-4" v-on:change="remove_right_answers_func(45) "  />
                    <label for="45-4">d) need to overhauling</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">46. Have you got any idea what___________________?</legend>
                
                <div class="answ_style">
                    <input type="radio" id="46-1" name="answer46" value="46-1" v-on:change="add_right_answers_func(46) "  />
                    <label for="46-1">a) am I required to do</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="46-2" name="answer46" value="46-2" v-on:change="remove_right_answers_func(46) "  />
                    <label for="46-2">b) require me to do</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="46-3" name="answer46" value="46-3" v-on:change="remove_right_answers_func(46) "  />
                    <label for="46-3">c) I require do</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="46-4" name="answer46" value="46-4" v-on:change="remove_right_answers_func(46) "  />
                    <label for="46-4">d) I am required to do</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">47. I suppose, given better weather, I__________ out.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="47-1" name="answer47" value="47-1" v-on:change="remove_right_answers_func(47) "  />
                    <label for="47-1">a) would gone</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="47-2" name="answer47" value="47-2" v-on:change="remove_right_answers_func(47) "  />
                    <label for="47-2">b) can go</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="47-3" name="answer47" value="47-3" v-on:change="remove_right_answers_func(47) "  />
                    <label for="47-3">c) should</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="47-4" name="answer47" value="47-4" v-on:change="add_right_answers_func(47) "  />
                    <label for="47-4">d) would have gone</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">48. Whenever the bell rang, our stupid dog______rush to the door barking.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="48-1" name="answer48" value="48-1" v-on:change="remove_right_answers_func(48) "  />
                    <label for="48-1">a) will</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="48-2" name="answer48" value="48-2" v-on:change="add_right_answers_func(48) "  />
                    <label for="48-2">b) would</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="48-3" name="answer48" value="48-3" v-on:change="remove_right_answers_func(48) "  />
                    <label for="48-3">c) made as if to</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="48-4" name="answer48" value="48-4" v-on:change="remove_right_answers_func(48) "  />
                    <label for="48-4">d) should</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">49. If only_____ time to do a bit more sightseeing.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="49-1" name="answer49" value="49-1" v-on:change="remove_right_answers_func(49) "  />
                    <label for="49-1">a) I have</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="49-2" name="answer49" value="49-2" v-on:change="add_right_answers_func(49) "  />
                    <label for="49-2">b) I had</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="49-3" name="answer49" value="49-3" v-on:change="remove_right_answers_func(49) "  />
                    <label for="49-3">c) I should have</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="49-4" name="answer49" value="49-4" v-on:change="remove_right_answers_func(49) "  />
                    <label for="49-4">d) I would have</label>
                </div>
            </fieldset>
        </div>
        <div>
            <fieldset class="question_style">
                <legend class="legend_style">50. It really is high time______________.</legend>
                
                <div class="answ_style">
                    <input type="radio" id="50-1" name="answer50" value="50-1" v-on:change="add_right_answers_func(50)"  />
                    <label for="50-1">a) we are going</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="50-2" name="answer50" value="50-2" v-on:change="remove_right_answers_func(50) "  />
                    <label for="50-2">b) we were going</label>
                </div>
                
                <div class="answ_style">
                    <input type="radio" id="50-3" name="answer50" value="50-3" v-on:change="remove_right_answers_func(50) "  />
                    <label for="50-3">c) had gone</label>
                </div>
                <div class="answ_style">
                    <input type="radio" id="50-4" name="answer50" value="50-4" v-on:change="remove_right_answers_func(50) "  />
                    <label for="50-4">d) we should go</label>
                </div>
            </fieldset>
        </div>
        <my-button v-on:click="calculate_result();$router.push('/result')" class = "regformbutton">Проверить Ответы</my-button>
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
export default {
  data(){
    return { right_answers_array : [], result : 0, right_answers: 0, dialogVisible:false }
  },
  mounted() {
		this.array_init()
  },
  methods:{
    array_init(){
        for (let i = 0; i < 49; i++) {
            this.right_answers_array[i] = 0
        }
    },
    add_right_answers_func(question){ 
        this.right_answers_array[question-1] = 1
    },
    remove_right_answers_func(question){ 
        this.right_answers_array[question-1] = 0
    },
    calculate_result(){
        
        for (let i = 0; i < 49; i++) {
            this.right_answers += this.right_answers_array[i];
        }

        if(this.right_answers > -1 && this.right_answers < 8){
            this.result="A1"
        }
        else if(this.right_answers > 7 && this.right_answers < 16) { 
            this.result="A2"
        }
        else if(this.right_answers > 15 && this.right_answers < 24) { 
            this.result="B1"
        }
        else if(this.right_answers > 23 && this.right_answers < 32) { 
            this.result="B2"
        }
        else if(this.right_answers > 31 && this.right_answers < 40) { 
            this.result="C1"
        }
        else if(this.right_answers > 40) { 
            this.result="C2"
        }
        localStorage.setItem('testresult', this.result)
    }
}
}

</script>

<style scoped>
* {
    font-family: 'Comfortaa', sans-serif;
    font-size: 2vh;
}
.answ_style{
    margin-top: 2vh;
}
.question_style{
    
    outline: none;
    border: 0;
    margin-top: 2vh;
}
.legend_style{
    font-weight:bold
}
.footer{
    margin-top: 12vh;
    height:40vh;
    background-color: rgb(0, 0, 0);
    z-index: 501;
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
    margin-left:0vh!important;
    margin-top:4vh !important;
    margin-bottom: 5vh;
    cursor:pointer;
    -webkit-text-stroke-width: 0.25px;
    -webkit-text-stroke-color: black;
  }
</style>