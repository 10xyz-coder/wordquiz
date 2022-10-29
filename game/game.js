var p1NAME;
var p2NAME;

var turn = 1;
var difficulty;

function bodyLoad()
{

  p1NAME = localStorage.getItem("p1");
  document.getElementById('p1_name').innerHTML = p1NAME + ": ";

  p2NAME = localStorage.getItem("p2");
  document.getElementById('p2_name').innerHTML = p2NAME + ": ";

  document.getElementById('p1_score').innerHTML = 0;
  document.getElementById('p2_score').innerHTML = 0;

  document.getElementById('p_question').innerHTML = "Question Turn - " + p1NAME;
  document.getElementById('p_answer').innerHTML = "Answer Turn - " + p2NAME;

  p1score = 0;
  p2score = 0;

}

function send() 
{

  get_word = document.getElementById('word').value;
  localStorage.setItem( "chosen_word", document.getElementById('word').value.toLowerCase() );
  word = get_word.toLowerCase();

  word = manipulate(word);

  q_word = "<h4 id='word_display'> Q. " + word + "</h4>";
  input_box = "Answer : <input type='text' id='input_check_box'>";
  check_button = "<button class= 'btn btn-info' onclick='check();'>Check</button>";

  row = q_word + "<br>" + input_box + "<br><br>" + check_button;

  document.getElementById('output').innerHTML = row;
  document.getElementById('word').value = "";

  document.getElementById('word_control').style.visibility = "hidden";
}

function manipulate(WORD) 
{
  char1 = WORD.charAt(1);

  length_divide_2 = Math.floor(WORD.length/2);
  char2 = WORD.charAt(length_divide_2);

  length_minus_1 = WORD.length - 2;
  char3 = word.charAt(length_minus_1);

  char4 = WORD.charAt(1);
  char5 = WORD.charAt(1);
  char6 = WORD.charAt(1);

  if (difficulty >= 20)
  {
    char6 = WORD.charAt(Math.cieling(WORD.length/2));
  }
  if (difficulty >= 10)
  {
    char5 = WORD.charAt(0);
  }
  if (difficulty >= 5)
  {
    char4 = WORD.charAt(WORD.length-1);
  }

  new_word = WORD;

  remove1 = new_word.replace(char1, "_");
  console.log(remove1);
  remove2 = remove1.replace(char2, "_");
  console.log(remove2);
  remove3 = remove2.replace(char3, "_");
  console.log(remove3);
  remove4 = remove3.replace(char4, "_");
  console.log(remove4);
  remove5 = remove4.replace(char5, "_");
  console.log(remove5);
  remove6 = remove5.replace(char6, "_");
  console.log(remove6);

  return remove6;
}

function check() 
{
  if (document.getElementById('input_check_box').value ==  localStorage.getItem("chosen_word"))
  {

    if (document.getElementById('p_question').innerHTML == "Question Turn - " + p1NAME)
    {
      document.getElementById('p_question').innerHTML = "Question Turn - " + p2NAME;
      document.getElementById('p_answer').innerHTML = "Answer Turn - " + p1NAME;
      p2score += 1;
    }
    else
    {
      document.getElementById('p_question').innerHTML = "Question Turn - " + p1NAME;
      document.getElementById('p_answer').innerHTML = "Answer Turn - " + p2NAME;
      p1score += 1;
    }
  }

    document.getElementById('p1_score').innerHTML = p1score;
    document.getElementById('p2_score').innerHTML = p2score;

    document.getElementById('output').innerHTML = "";
    document.getElementById('word').value = "";

    document.getElementById('word_control').style.visibility = "visible";
    difficulty = (p1score + p2score)*2;
}