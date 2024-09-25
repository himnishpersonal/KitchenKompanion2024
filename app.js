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