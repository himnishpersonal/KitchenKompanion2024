function openTab(tabNumber) {
    if (tabNumber === 1) {
        document.getElementById('tab_one').style.display = 'block'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
        document.getElementById('tab_six').style.display = 'none';
    }else if(tabNumber === 2){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'block'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
        document.getElementById('tab_six').style.display = 'none';
    }else if(tabNumber === 3){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'block'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
        document.getElementById('tab_six').style.display = 'none';
    }else if(tabNumber === 4){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'block'; 
        document.getElementById('tab_five').style.display = 'none'; 
        document.getElementById('tab_six').style.display = 'none';
    }else if(tabNumber === 5){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'block'; 
        document.getElementById('tab_six').style.display = 'none';
    }else if(tabNumber === 6){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none';
        document.getElementById('tab_six').style.display = 'block';
    }

    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    tabs[tabNumber - 1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    openTab(1); 
});

function displayChoices(){
    const petChoice = document.getElementsByName('pet');
    let selectedPet = '';
    for (let option of petChoice) {
        if (option.checked) {
            selectedPet = option.value;
            break;
        }
    }
    const selectedColor = document.getElementById('colorSelect').value;
    const result = `Pet Selected: ${selectedPet}, Color Selected: ${selectedColor}`;
    document.getElementById('result').innerText = result;
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("taskInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}