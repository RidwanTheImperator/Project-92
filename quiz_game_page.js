player1_name = localStorage.getItem("player1")
player2_name = localStorage.getItem("player2")

Player1_s = 0

Player2_s = 0

document.getElementById("player1_name").innerHTML = player1_name
document.getElementById("player2_name").innerHTML = player2_name

document.getElementById("player1_score").innerHTML = Player1_s
document.getElementById("player2_score").innerHTML = Player2_s

document.getElementById("question_turn").innerHTML = " Question Turn : " + player1_name
document.getElementById("answer_turn").innerHTML = " Answer Turn :  " + player2_name
 
 function send() {
    number1 = document.getElementById("Number1").value;
    number2 = document.getElementById("Number2").value;
    actual_answer = parseInt(number1) * parseInt(number2)
    question_number = "<h4>" + number1 + "X" + number2 +"</h4>"
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick 'check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row
    document.getElementById("Number1").value = ""
    document.getElementById("Number2").value = ""
 }

 question_turn = "player1"

answer_turn = "player2"





function check() {
   Answer = document.getElementById("input_check_box").value;


   if(get_answer == actual_answer) {
      if(answer_turn == "player1")
      {
      Player1_s = Player1_s + 1
      document.getElementById("player1_s").innerHTML = Player1_s
      }
   
   else{
      Player2_s = Player2_s +1
      document.getElementById("player2_s").innerHTML = Player2_s
   }
}

   if(Question_turn == "player1") {
       Question_turn = "player2"
       document.getElementById("question_turn").innerHTML = "Question Turn : " + player2_name 
   }
   else{
       Question_turn = "player1"
       document.getElementById("question_turn").innerHTML = "Question Turn : " + player1_name
   }
   if(Answer_turn == "player1") {
       Answer_turn = "player2"
       document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player2_name
   }
   else{
       Answer_turn = "player1"
       document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player1_name
   }

}