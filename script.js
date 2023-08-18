// let qset = ['q-screen-1', 'q-screen-2'];

let commentBox = ['Very poor', 'Poor', 'Average', 'Good', 'Excellent'];
let passingScore = 40;

let maxQuestion = 10;
let marksPerQuestion = 1;
let marksPerQuestionX = 0;
let maxScore = marksPerQuestion*maxQuestion;

let timeLimit = 10; // in minutes
let timer = 0;
let timeTaken = 0;

let totalCount = maxQuestion;
let correctCount = 0;
let incorrectCount = 0;
let skippedCount = 0;
let scoreCount = 0;

let unvisitedColor = 'rgb(188, 188, 188)';
let unansweredColor = 'rgb(255, 0, 0)';
let answeredColor = 'rgb(23, 190, 0)';
let unansweredXColor = 'rgb(102, 20, 140)';
let answeredXColor = 'rgb(24, 109, 245)';

let goldGrad = 'linear-gradient(45deg, yellow, orange, orange, yellow)';
let silverGrad = 'linear-gradient(45deg, white, rgba(128, 128, 128, 0.694), rgba(128, 128, 128, 0.749), white)';
let bronzeGrad = 'linear-gradient(45deg, rgb(240, 173, 49), rgb(195, 84, 15), rgb(195, 84, 15),  rgb(239, 171, 46))';

let goldCenter = 'orange';
let silverCenter = 'rgba(128, 128, 128, 0.694)';
let bronzeCenter = 'rgb(195, 84, 15)';

let goldBadge = 'gold-badge.png';
let silverBadge = 'silver-badge.png';
let bronzeBadge = 'bronze-badge.png';

let fullScreenIcon = '<i class="bi bi-fullscreen"></i>';
let exitScreenIcon = '<i class="bi bi-fullscreen-exit"></i>';

let submission = {}

let ansKey = {
    // 'dummy-qid' : 'dummy-ano-1',
    'q-no-1' : '1-ano-3',
    'q-no-2' : '2-ano-3',
    'q-no-3' : '3-ano-1',
    'q-no-4' : '4-ano-4',
    'q-no-5' : '5-ano-3',
    'q-no-6' : '6-ano-1',
    'q-no-7' : '7-ano-3',
    'q-no-8' : '8-ano-2',
    'q-no-9' : '9-ano-1',
    'q-no-10' : '10-ano-2'
}

let q1 = {
    qid : 'q-no-1',
    qtext : "Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is :",
    options : [
        {
            aid : '1-ano-1',
            atext : '2 : 5'            
        },
        {
            aid : '1-ano-2',
            atext : '3 : 5'            
        },
        {
            aid : '1-ano-3',
            atext : '4 : 5'            
        },
        {
            aid : '1-ano-4',
            atext : '6 : 7'      
        }
    ]
}

let q2 = {
    qid : 'q-no-2',
    qtext : "A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share ?",
    options : [
        {
            aid : '2-ano-1',
            atext : 'Rs. 500'            
        },
        {
            aid : '2-ano-2',
            atext : 'Rs. 1500'            
        },
        {
            aid : '2-ano-3',
            atext : 'Rs. 2000'            
        },
        {
            aid : '2-ano-4',
            atext : 'None of these'      
        }
    ]
}

let q3 = {
    qid : 'q-no-3',
    qtext : "Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats ?",
    options : [
        {
            aid : '3-ano-1',
            atext : '2 : 3 : 4'            
        },
        {
            aid : '3-ano-2',
            atext : '6 : 7 : 8'            
        },
        {
            aid : '3-ano-3',
            atext : '6 : 8 : 9'            
        },
        {
            aid : '3-ano-4',
            atext : 'None of these'      
        }
    ]
}

let q4 = {
    qid : 'q-no-4',
    qtext : "In a mixture 60 litres, the ratio of milk and water 2 : 1. If this ratio is to be 1 : 2, then the quantity of water to be further added is :",
    options : [
        {
            aid : '4-ano-1',
            atext : '20 litres'            
        },
        {
            aid : '4-ano-2',
            atext : '30 litres'            
        },
        {
            aid : '4-ano-3',
            atext : '40 litres'            
        },
        {
            aid : '4-ano-4',
            atext : '60 litres'      
        }
    ]
}

let q5 = {
    qid : 'q-no-5',
    qtext : "The ratio of the number of boys and girls in a college is 7 : 8. If the percentage increase in the number of boys and girls be 20% and 10% respectively, what will be the new ratio ?",
    options : [
        {
            aid : '5-ano-1',
            atext : '8 : 9'            
        },
        {
            aid : '5-ano-2',
            atext : '17 : 18'            
        },
        {
            aid : '5-ano-3',
            atext : '21 : 22'            
        },
        {
            aid : '5-ano-4',
            atext : 'Cannot be determined'      
        }
    ]
}

let q6 = {
    qid : 'q-no-6',
    qtext : "If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is :",
    options :[
        {
            aid : '6-ano-1',
            atext : '50 km'
        },
        {
            aid : '6-ano-2',
            atext : '56 km'
        },
        {
            aid : '6-ano-3',
            atext : '70 km'
        },
        {
            aid : '6-ano-4',
            atext : '80 km'
        }
    ]
}

let q7 = {
    qid : 'q-no-7',
    qtext : "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is :",
    options :[
        {
            aid : '7-ano-1',
            atext : '100 kmph'
        },
        {
            aid : '7-ano-2',
            atext : '110 kmph'
        },
        {
            aid : '7-ano-3',
            atext : '120 kmph'
        },
        {
            aid : '7-ano-4',
            atext : '130 kmph'
        }
    ]
}

let q8 = {
    qid : 'q-no-8',
    qtext : "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour ?",
    options :[
        {
            aid : '8-ano-1',
            atext : '9'
        },
        {
            aid : '8-ano-2',
            atext : '10'
        },
        {
            aid : '8-ano-3',
            atext : '12'
        },
        {
            aid : '8-ano-4',
            atext : '20'
        }
    ]
}

let q9 = {
    qid : 'q-no-9',
    qtext : "In a flight of 600 km, an aircraft was slowed down due to bad weather. Its average speed for the trip was reduced by 200 km/hr and the time of flight increased by 30 minutes. The duration of the flight is:",
    options :[
        {
            aid : '9-ano-1',
            atext : '1 hour'
        },
        {
            aid : '9-ano-2',
            atext : '2 hours'
        },
        {
            aid : '9-ano-3',
            atext : '3 hours'
        },
        {
            aid : '9-ano-4',
            atext : '4 hours'
        }
    ]
}

let q10 = {
    qid : 'q-no-10',
    qtext : "A man complete a journey in 10 hours. He travels first half of the journey at the rate of 21 km/hr and second half at the rate of 24 km/hr. Find the total journey in km.",
    options :[
        {
            aid : '10-ano-1',
            atext : '220 km'
        },
        {
            aid : '10-ano-2',
            atext : '224 km'
        },
        {
            aid : '10-ano-3',
            atext : '230 km'
        },
        {
            aid : '10-ano-4',
            atext : '234 km'
        }
    ]
}



let qpaper = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];


function createPaper()
{
    for (let i=1; i<=maxQuestion; i++)
    {
        let $qp = $(`

        <div id="q-screen-${i}" class="q-screen">

            <div class="qno-marking">

                <span><b>Question ${i}</b></span>
                <span>Single correct option, <b class="pos-marking">+${marksPerQuestion}.00</b>, <b class="neg-marking">-${marksPerQuestionX}.00</b> </span>

            </div>

            <div class="question">

                <span id="dummy-qid" class="qno qno-${i}">
                    Dummy question ${i}
                </span>

            </div>

            <div class="answer" style="list-style-type: upper-alpha;">

                <li class="${i}-qno-option-1">
                    <label id="dummy-ano-1" class="options option-1"> dummy option 1 </label>
                </li>

                <li class="${i}-qno-option-2">
                    <label id="dummy-ano-2" class="options option-2"> dummy option 2</label>
                </li>

                <li class="${i}-qno-option-3">
                    <label id="dummy-ano-3" class="options option-3"> dummy option 3 </label>
                </li>

                <li class="${i}-qno-option-4">
                    <label id="dummy-ano-4" class="options option-4"> dummy option 4 </label>
                </li>    

            </div>

        </div>`);

        $($qp).appendTo('.question-papers');

    }

}

function setPaper()
{
    for(let i=1; i <= 10; i++)
    {
        let element = qpaper[i-1];
    
        $(`#q-screen-${i}>.question>.qno-${i}`).attr('id', element.qid);
        $(`#q-screen-${i}>.question>.qno-${i}`).text(element.qtext);
    
        let opset = element.options;
    
        // console.log(opset);
        
        let j = 1;
    
        opset.forEach(op =>{
    
            $(`#q-screen-${i}>.answer>li>.option-${j}`).attr('id',op.aid);
            // $(`#q-screen-${i}>.answer>li>.option-${j}`).attr('for',op.aid);
            $(`#q-screen-${i}>.answer>li>.option-${j}`).text(op.atext);
    
            j = j+1;
    
        })
    }
}

function resetTimer()
{
    $('.count-down').text('00:00:00');
}

function startTimer(minutes)
{
    let startTime = new Date().getTime();
    // console.log(startTime);    
    let endTime = startTime + minutes*1000*60;

    timer = setInterval(()=>{

        let currentTime = new Date().getTime();
        let remTime = endTime - currentTime;
        timeTaken = currentTime - startTime; 

        if(remTime < 10)
        {
            clearInterval(timer);
            submitTest();
            return;
        }
        // console.log(remTime);

        let hr = Math.floor((remTime % (1000*60*60*24))/(1000*60*60));
        let min = Math.floor((remTime % (1000*60*60))/(1000*60));
        let sec = Math.floor((remTime % (1000*60))/(1000));

        let hrx = (hr/10 < 1) ? '0'+hr : hr;
        let minx = (min/10 < 1) ? '0'+min : min;
        let secx = (sec/10 < 1) ? '0'+sec : sec;

        let time = hrx + ':' + minx + ':' + secx;
        // console.log(time);

        $('.count-down').text(time);

    },1000);
}

function createCalendar()
{
    for(let i=1; i <= maxQuestion; i++)
    {
        let $calLink = `<li id="cal-link-${i}" class="cal-link">${i}</li>`;
        $($calLink).appendTo('.calendar-lower')
    }
}

function updateCalendarStatus()
{
    let unv = 0;
    let ans = 0;
    let unans = 0;
    let ansX = 0;
    let unansX = 0;

    for(let i=1; i<=50; i++)
    {
        let elementColor = $(`#cal-link-${i}`).css('background-color');
        // console.log(elementColor);

        if(elementColor == unvisitedColor){ unv++ ; }
        if(elementColor == answeredColor){ ans++ ;}
        if(elementColor == unansweredColor){ unans++ ;}
        if(elementColor == answeredXColor){ ansX++ ;}
        if(elementColor == unansweredXColor){ unansX++ ;}
    }

    $('#id-unvisited').text(unv);

    $('#id-answered').text(ans);
    $('#id-answeredX').text(ansX);

    $('#id-unanswered').text(unans);
    $('#id-unansweredX').text(unansX);

    unvQ = unv;
    ansQ = ans;
    unansQ = unans;
    ansXQ = ansX;
    unansXQ = unansX;
}

function updateCalendar(qno, num)
{
    let colorClass = "no color";

    let questionId = $(`#q-screen-${qno}>.question>.qno-${qno}`).attr('id');
    // console.log(questionId);

    if(num == 1)
    {
        colorClass = (submission.hasOwnProperty(questionId)) ? answeredXColor : unansweredXColor;
    }
    else
    {
        colorClass = (submission.hasOwnProperty(questionId)) ? answeredColor : unansweredColor;
    }
    
    $(`#cal-link-${qno}`).css('background', colorClass);    
    
    setTimeout(()=>{ updateCalendarStatus(); }, 500);
}

function calendarClick(e)
{
    let nowQuestion = e.target.id;
    let nowQuestionId = nowQuestion.split('-')[2];

    showQuestion(nowQuestionId);
}

function setAns(qno, ano)
{
    let qid = $(`#q-screen-${qno}>.question>.qno-${qno}`).attr('id');
    let aid = $(`#q-screen-${qno}>.answer>li>.option-${ano}`).attr('id');

    submission = {...submission, [qid] : aid};
    // console.log(submission);
}

function setOptions(qno, ano)
{
    $(`#q-screen-${qno}>.answer>li`).css('background','white');
    $(`#q-screen-${qno}>.answer>li:nth-child(${ano})`).css('background','rgb(40, 219, 40)');
    // console.log($(`#q-screen-${qno}>.answer>li>.options`).prop('checked'));
}

function ansClick(e)
{
    let className = e.target.classList[0];

    className = className.split('-');

    let qno = className[0];
    let ano = className[3];

    setAns(qno, ano);  
    setOptions(qno, ano);
    updateCalendar(qno, 0);
}

function showQuestion(id)
{
    $('.q-screen').hide();
    $(`#q-screen-${id}`).show();
    
    $('.active-question').removeClass('active-question');
    $(`#q-screen-${id}`).addClass('active-question');

    updateCalendar(id, 0);
    // updateCalendarStatus();
}

function nextQuestion()
{
    let nowQuestion = $('.active-question').attr('id');
    let nowQuestionId = nowQuestion.split('-')[2];

    if(nowQuestionId < maxQuestion )
    {
        nowQuestionId = parseInt(nowQuestionId) + 1;
        showQuestion(nowQuestionId);      
    }
}

function saveNext()
{
    let nowQuestion = $('.active-question').attr('id');
    let nowQuestionId = nowQuestion.split('-')[2];

    updateCalendar(nowQuestionId, 0);
    nextQuestion();
}

function markNext()
{
    let nowQuestion = $('.active-question').attr('id');
    let nowQuestionId = nowQuestion.split('-')[2];

    updateCalendar(nowQuestionId, 1);
    nextQuestion();
}

function clearResponse()
{
    let nowQuestion = $('.active-question').attr('id');
    let nowQuestionId = nowQuestion.split('-')[2];

    let questionId = $(`#q-screen-${nowQuestionId}>.question>.qno`).attr('id');

    $(`#q-screen-${nowQuestionId}>.answer>li`).css('background','');

    delete submission[questionId];

    updateCalendar(nowQuestionId, 0);
}

function initialize()
{
    $('.initial-box').hide();   
    $('.start-screen').show();
    $('.nav-test').hide();

    createPaper();
    createCalendar();
    setPaper();
}

function startQuiz()
{
    $('.start-screen').hide();
    $('.instruction-screen-container').show();
}

function startTest()
{
    $('.navbar').hide();
    $('.nav-test').show();
    $('.initial-box').hide();
    $('.q-screen-container').show();
    let ins = document.querySelector('.body-container');
    ins.requestFullscreen();

    startTimer(timeLimit);

    $('.q-screen').hide();
    showQuestion(1);
}

function updateCenter(centerColor, redVal, greenVal, blueVal, percent)
{
    let bgColor = `radial-gradient(closest-side, ${centerColor} 80%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box, rgba(0, 0, 0, 0) 
     conic-gradient(rgb(${redVal}, ${greenVal}, ${blueVal}) ${percent}%, rgb(188, 225, 247) 0deg) repeat scroll 0% 0% / auto padding-box border-box`;

    $('.progress-bar').css('background', bgColor);
}

function setBadge()
{
    let percentage = Math.floor((scoreCount*100)/maxScore);
    let badgeGrad = '';
    let badge = '';
    let badgeComment = '';
    
    if(percentage >= 70)
    {
        badgeGrad = bronzeGrad;
        badge = bronzeBadge;
        badgeComment = 'Bronze';
    }
    
    if(percentage >= 80)
    {
        badgeGrad = silverGrad;
        badge = silverBadge;
        badgeComment = 'Silver';
    }
    
    if(percentage >= 90)
    {
        badgeGrad = goldGrad;
        badge = goldBadge;
        badgeComment = 'Gold';
    }
    
    // console.log(badge, percentage);
    $('.score-board').css('background', badgeGrad);
    $('.badge-logo').prop('src', badge);

    if(badgeComment != '')
    {
        $('.badge-comment').text(`Congratulations !! You've won a ${badgeComment} badge`);
        return;
    }
    else
    {
        badgeComment = (percentage >= 40) 
        ? 'Congratulations !! You passed...' 
        : 'You failed !! Better luck next time...';

        $('.badge-comment').text(badgeComment);
        return;
    }
}

function toggleScreen()
{
    if (document.fullscreenElement) 
    {
        document.exitFullscreen();
        $('.screen-mode-btn').html(fullScreenIcon);
    }
    else
    {
        let ins = document.querySelector('.body-container');
        $('.screen-mode-btn').html(exitScreenIcon);
        ins.requestFullscreen();
    }
}

function updateTimeTaken()
{
    let hr = Math.floor((timeTaken % (1000*60*60*24))/(1000*60*60));
    let min = Math.floor((timeTaken % (1000*60*60))/(1000*60));
    let sec = Math.floor((timeTaken % (1000*60))/(1000));

    let hrx = (hr/10 < 1) ? '0'+hr : hr;
    let minx = (min/10 < 1) ? '0'+min : min;
    let secx = (sec/10 < 1) ? '0'+sec : sec;

    let time = `${hrx} : ${minx} : ${secx}`
    // console.log(time);
    $('.time-count').text(time);    
}

function generateResult(sub, ansKey)
{
    for(key in sub)
    {
        if(sub[key] == ansKey[key] && key != 'undefined'){
            scoreCount += marksPerQuestion;
            correctCount++;
        }
        else
        {
            scoreCount -= marksPerQuestionX;
            incorrectCount++;
        }
        // console.log(score, 'score');
    }

    skippedCount = totalCount - correctCount - incorrectCount;    
    // console.log(totalCount, correctCount, incorrectCount, skippedCount, scoreCount);
}

function setMarksStatus(cls, num)
{
    $(`.${cls}-count`).text(`${num}`)
}

function updateMarksStatus()
{
    setMarksStatus('total', totalCount);
    setMarksStatus('correct', correctCount);
    setMarksStatus('incorrect', incorrectCount);
    setMarksStatus('skipped', skippedCount);
    setMarksStatus('obtained', scoreCount);
}

function loadProgress(score, mxScore)
{
    let percentage = Math.floor((score*100)/mxScore);
    // console.log(percentage , ' %');

    let greenlvl = Math.floor((percentage*255)/100);
    let redlvl = Math.floor(((100-percentage)*255)/100);
    let centerColor = 'white';

    centerColor = (percentage >= 70) ? bronzeCenter : centerColor;
    centerColor = (percentage >= 80) ? silverCenter : centerColor;
    centerColor = (percentage >= 90) ? goldCenter : centerColor;


    let i = 0;

    let loading = setInterval(()=>{

        let redi = Math.floor((i*redlvl)/100);
        let greeni = Math.floor((i*greenlvl)/100);
        let percenti = Math.floor((i*percentage)/100);

        (redi > greeni) ? greeni = 0 : redi = 0;

        let bgColor = `radial-gradient(closest-side, rgb(255, 255, 255) 80%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box, rgba(0, 0, 0, 0) 
     conic-gradient(rgb(${redi}, ${greeni}, 0) ${percenti}%, rgb(188, 225, 247) 0deg) repeat scroll 0% 0% / auto padding-box border-box`;

        $('.progress-bar').css('background', bgColor);
        $('.percent').text(percenti);
        // console.log(percenti);

        if(i >= 100)
        {
            i = Math.ceil((score*5)/mxScore);
            
            updateCenter(centerColor, redlvl, greenlvl, 0, percentage);
            
            (i <= 0) ? i=1 : i;
            $('.comments').text(commentBox[i-1]);
            // console.log(i, commentBox[i-1]);
            updateMarksStatus();
            setBadge();
            
            // setTimeout(clearInterval(loading), 100);
            clearInterval(loading);
            // console.log('exit');
        }

        i++;

    }, 20);    
    
}

function submitTest()
{
    clearInterval(timer);
    updateTimeTaken();
    document.exitFullscreen();
    generateResult(submission, ansKey);
    $('.initial-box').hide();
    $('.result-screen-container').show();
    $('.nav-test').hide();
    $('.navbar').show();
    loadProgress(scoreCount, maxScore);
}

$(document).ready(()=>{

    initialize();

    $('.start-quiz-btn').click(()=>{startQuiz()});
    $('.ins-start-btn').click(()=>{startTest()});
    $('.screen-mode-btn').click(()=>{toggleScreen()});

    $('.q-screen>.answer>li').click((e)=>{ansClick(e)});

    $('.save-next-btn').click(()=>{saveNext()});
    $('.mark-next-btn').click(()=>{markNext()});
    $('.clear-response-btn').click(()=>{clearResponse()});

    $('.cal-link').click((e)=>{calendarClick(e)});

    $('.test-submit-btn').click(()=>{submitTest()});
    $('.end-btn').click(()=>{window.close()});

})