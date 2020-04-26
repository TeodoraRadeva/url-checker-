function clickTreeLineMenu() {
	$(".navContainer").attr("id","verticalBar");
}

function processInputOnChange() {
	let inputValue = document.getElementById("textField").value;
	returnMessageAfterEmailTest(inputValue);
}

function returnMessageAfterEmailTest(inputValue) {
	let emailCheck = /^(https:\/\/|http:\/\/)([a-zA-Z]*\.|[a-zA-Z]*)[a-zA-Z0-9]*\.[a-z]{2,4}/gi;
	let testEmail = new RegExp(emailCheck);
	if (inputValue !== "") {
	    pickMessage(inputValue, testEmail);
	    return
	}
	styleMessageIfEmpty();
}

function pickMessage(inputValue, testEmail) {
  if(testEmail.test(inputValue)){
    styleMessageIfTrue();
    addLink(inputValue); 
    return
  }
  styleMessageIfFalse() 
}

function styleMessageIfTrue() {
	applyMessageToMessageInputBox("You've entered correct URL");
	styleMessage("color", "#7FFF00");
	styleInputTextBox("border", "5px solid #7FFF00");
}

function styleMessageIfFalse() {
	applyMessageToMessageInputBox("You've entered wrong URL");
	styleMessage("color", "#FF0000");
	styleInputTextBox("border", "5px solid #FF0000");
}

function styleMessageIfEmpty() {
	applyMessageToMessageInputBox("Please add a link");
	styleMessage("color", "#FF0000");
	styleInputTextBox("border", "5px solid #FF0000");
}

function applyMessageToMessageInputBox(message) {
  	$("#message").html(message);
}

function styleMessage(type,color) {
	$("#message").css(type, color);
}

function styleInputTextBox(type, color) {
	$("#textField").css(type, color);
}

function addLink(inputValue) {
	$("#results")
	.append(`<div class="addedLinks"> 
		<p id="correctEmail">${inputValue}</p>
		<input type="button" value ="Copy" class ="buttonCopy" onclick="copyText('#correctEmail'); changeButton()">
		</div>`);
}

function copyText(element) {
	let $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).html()).select();
	document.execCommand("copy");
	$temp.remove();
}

function changeButton() {
	$(".buttonCopy").val('Copied!').css('backgroundColor', "purple");
}