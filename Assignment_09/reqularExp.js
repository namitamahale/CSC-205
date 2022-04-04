var text = document.getElementById("text");
var input = document.getElementById("search");
var case_insensitive = document.getElementById("ch1");
var multi_search = document.getElementById("ch2");
var radio_text = document.getElementById("r1");
var radio_regular_expression = document.getElementById("r2");
var original_text = text.innerHTML;

function rExp() {
  if (radio_regular_expression.checked) {
    multi_search.disabled = true;
    case_insensitive.disabled = true;
  } else {
    multi_search.disabled = false;
    case_insensitive.disabled = false;
  }
}

function findText(){
    if(radio_text.checked){
    var regular_expression = new RegExp(input.value.trim(), `${case_insensitive.checked?"i":""}`+`${multi_search.checked?"g":""}`);
    text.innerHTML = original_text.replace(regular_expression, `<mark>${input.value}</mark>`);
        }
    else if(radio_regular_expression.checked){
        var result = new RegExp(input.value.trim(),'g').exec(text.innerHTML);
        text.innerHTML = original_text.replace(new RegExp(input.value.trim()), `<mark>${result}</mark>`);
    }

}




