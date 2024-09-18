function openTab(tabNumber) {
    if (tabNumber === 1) {
        document.getElementById('tab_one').style.display = 'block'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
    }else if(tabNumber === 2){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'block'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
    }else if(tabNumber === 3){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'block'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
    }else if(tabNumber === 4){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'block'; 
        document.getElementById('tab_five').style.display = 'none'; 
    }else if(tabNumber === 5){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'block'; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    openTab(1); 
});