window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 750)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})


// Code for the Quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        // here we store output and answer choices
        var output = [];
        var answers;
    
        // loop over for each question
        for(var i=0; i<questions.length; i++){
            
            // reset list of answers
            answers = [];
    
            // for each answer
            for(letter in questions[i].answers){
    
                // generate a radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html
        quizContainer.innerHTML = output.join('');
    }

	function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
    
        // show answers
        if (numCorrect == 0) {
            resultsContainer.innerHTML = '<label>' + numCorrect + ' out of ' + questions.length + '</label><p>You are literally Windows 95</p><img src=\"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/post_360412_0_03818100_1366521768.png\">';
        }
        else if (numCorrect == 1) {
            resultsContainer.innerHTML = '<label>' + numCorrect + ' out of ' + questions.length + '</label><p>You are IBM 5150</p><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ibm_pc_5150.jpg/1024px-Ibm_pc_5150.jpg\">';
        }
        else if (numCorrect == 2) {
            resultsContainer.innerHTML = '<label>' + numCorrect + ' out of ' + questions.length + '</label><p>You are Steve Wozniak</p><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Steve_Wozniak_thumbs_up.jpg/1200px-Steve_Wozniak_thumbs_up.jpg\">';
        }
        else if (numCorrect == 3) {
            resultsContainer.innerHTML = '<label>' + numCorrect + ' out of ' + questions.length + '</label><p>You are Macintosh II</p><img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d3/MacII.jpg\">';
        }
        else if (numCorrect == 4) {
            resultsContainer.innerHTML = '<label>' + numCorrect + ' out of ' + questions.length + '</label><p>You are a Hipster</p><img src=\"https://i.pinimg.com/originals/4c/03/c2/4c03c2c9df62dca525f6ca730325e984.jpg\">';
        }
        else if (numCorrect == 5) {
            resultsContainer.innerHTML = '<label>' + numCorrect + ' out of ' + questions.length + '</label><p>You are AirPort</p><img src=\"https://upload.wikimedia.org/wikipedia/commons/2/26/Apple_graphite_airport_base_station_front.jpg\">';
        }
        else if (numCorrect == 6) {
            resultsContainer.innerHTML = '<label>' + numCorrect + ' out of ' + questions.length + '</label><p>You are a Trans-dimensional Time Traveling Alien AI entity that has enslaved human population in the far future and only Sarah Connor can save us</p><img src=\"https://news.am/img/news/52/76/88/default.jpg\">';
        }
    }

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

// Quiz questions
var myQuestions = [
	{
		question: "1. What is Apple Inc.?",
		answers: {
			a: 'Computer Device Company',
			b: 'Philosophy of Life',
			c: 'Type of American Consumerism'
		},
		correctAnswer: 'b'
	},
	{
		question: "2. What is our glorious War Cry?",
		answers: {
			a: 'Think Somewhat Different',
			b: 'It Just Werks',
			c: 'Be Whats Next'
		},
		correctAnswer: 'a'
    },
    {
		question: "3. Who is our Great Leader?",
		answers: {
			a: 'Bill Burr Gates',
			b: 'Tim Cookintosh',
			c: 'Steven Paul "Steve" Jobs the First of his Name, the Leader of the Sheeple and Emperor of the Universe'
		},
		correctAnswer: 'c'
    },
    {
		question: "4. How was Apple Inc. founded?",
		answers: {
			a: 'By summoning a demon from the underworld who took upon himself to create a culture of overpriced monochrome technology thats designed with elegance',
			b: 'Our Great Leader received a vision of purity and infinite aesthetic by reading "1984" and deciding to embrace his vision of a collective society transformed and unified under the mysticism of minimilism and simplicity',
            c: 'By consuming vast amounts of LSD while traveling in India our Great Leader assumed technological dominance over humanity',
            d: 'All of the above'
		},
		correctAnswer: 'd'
    },
    {
		question: "5. What happened during 1991-97?",
		answers: {
			a: 'Nothing... Why would you even ask such a question? Apple Inc. was TOTALLY fine and dominated the world market',
			b: 'Microsoft'
		},
		correctAnswer: 'a'
    },
    {
		question: "6. When was the first Macintosh released?",
		answers: {
			a: 'July, 1976 in a nerdy Homebrew Computer Club where entry required an apparel combination of socks and sandals',
            b: 'January 24, 1984 accompanied by a brilliant marketing campaign directed by Ridley Scott which cost the company a fortune in cash and souls',
            c: 'April 15, 1989 with tanks rolling down the main street of the Tiananmen Square due to the huge demand of the new revolutionary product'
		},
		correctAnswer: 'b'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// Generate Quiz
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);