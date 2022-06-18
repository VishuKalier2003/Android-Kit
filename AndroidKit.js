const bt11 = document.getElementById('id-a1');
var click1 = false;
bt11.addEventListener('click', function() {
    if (click1 == false) {
        bt11.style.color = "rgba(255, 255, 255, 1.0)";
        bt11.style.transitionDuration = '1s';
        bt11.style.backgroundImage = "linear-gradient(to top left, rgb(0, 125, 255), rgba(0, 125, 255, 0.5))";
        bt11.style.outline = 'none';
        click1 = true;
    } else {
        bt11.style.color = 'rgb(0, 0, 255)';
        bt11.style.transitionDuration = '1s';
        bt11.style.backgroundImage = "linear-gradient(to top left, rgba(255, 255, 255), rgba(255, 255, 255, 0.5))";
        bt11.style.outline = 'none';
        click1 = false;
    }
});

const bt12 = document.getElementById('id-a2');
var click2 = false;
bt12.addEventListener('click', function() {
    if (click2 == false) {
        bt12.style.color = "rgba(255, 255, 255, 1.0)";
        bt12.style.backgroundImage = "linear-gradient(to top left, rgb(0, 125, 255), rgba(0, 125, 255, 0.5))";
        bt12.style.outline = 'none';
        bt12.style.transitionDuration = '1s';
        click2 = true;
    } else {
        bt12.style.color = 'rgb(0, 0, 255)';
        bt12.style.backgroundImage = "linear-gradient(to top left, rgb(255, 255, 255), rgba(255, 255, 255, 0.5))";
        bt12.style.outline = 'none';
        bt12.style.transitionDuration = '1s';
        click2 = false;
    }
});

const bt13 = document.getElementById('id-a3');
var click3 = false;
bt13.addEventListener('click', function() {
    if (click3 == false) {
        bt13.style.color = "rgba(255, 255, 255, 1.0)";
        bt13.style.backgroundImage = "linear-gradient(to top left, rgb(0, 125, 255), rgba(0, 125, 255, 0.5))";
        bt13.style.outline = 'none';
        bt13.style.transitionDuration = '1s';
        click3 = true;
    } else {
        bt13.style.color = 'rgb(0, 0, 255)';
        bt13.style.backgroundImage = "linear-gradient(to top left, rgb(255, 255, 255), rgba(255, 255, 255, 0.5))";
        bt13.style.outline = 'none';
        bt13.style.transitionDuration = '1s';
        click3 = false;
    }
});

const bt14 = document.getElementById('id-a4');
var click4 = false;
bt14.addEventListener('click', function() {
    if (click4 == false) {
        bt14.style.color = "rgba(255, 255, 255, 1.0)";
        bt14.style.backgroundImage = "linear-gradient(to top left, rgb(0, 125, 255), rgba(0, 125, 255, 0.5))";
        bt14.style.outline = 'none';
        bt14.style.transitionDuration = '1s';
        click4 = true;
    } else {
        bt14.style.color = 'rgb(0, 0, 255)';
        bt14.style.transitionDuration = '1s';
        bt14.style.backgroundImage = "linear-gradient(to top left, rgb(255, 255, 255), rgba(255, 255, 255, 0.5))";
        bt14.style.outline = 'none';
        click4 = false;
    }
});

const scr_sheet = document.getElementById('background-sheet');
const bt21 = document.getElementById('id-b1');
const sp1 = document.getElementById('switch');
var sw = false;
bt21.addEventListener('click', function() {
    if (sw == false) {
        scr_sheet.style.transitionDuration = '1s';
        scr_sheet.style.backgroundColor = 'rgb(70, 68, 68)';
        sp1.style.color = 'rgb(0, 190, 0)';
        sp1.textContent = 'On';
        sw = true;
    } else {
        scr_sheet.style.transitionDuration = '1s';
        scr_sheet.style.backgroundColor = 'rgb(255, 255, 255)';
        sp1.textContent = 'Off';
        sp1.style.color = 'rgb(190, 0, 0)';
        sw = false;
    }
});

const scr = document.getElementById('screen');
const bt22 = document.getElementById('id-b2');
const sp2 = document.getElementById('filter-span');
var v1 = 0,
    input = false;

bt22.addEventListener('click', function() {
    input = false;
    if (v1 == 0 && input == false) {
        scr.style.backgroundColor = 'rgba(0, 125, 190, 0.5)';
        sp2.style.color = 'rgb(190, 0, 0)';
        sp2.textContent = 'Red';
        v1++;
        input = true;
    } else if (v1 == 1 && input == false) {
        scr.style.backgroundColor = 'rgba(125, 0, 190, 0.5)';
        sp2.style.color = 'rgb(0, 190, 0)';
        sp2.textContent = 'Green';
        v1++;
        input = true;
    } else if (v1 == 2 && input == false) {
        scr.style.backgroundColor = 'rgba(190, 125, 0, 0.5)';
        sp2.style.color = 'rgb(0, 0, 190)';
        sp2.textContent = 'Blue';
        v1 = 0;
        input = true;
    }
});

const bt_in = document.getElementById('id-b3-b1');
const bt_dec = document.getElementById('id-b3-b2');
const vol_bar = document.getElementById('vol-bar');
var vol = 0;

bt_in.addEventListener('click', function() {
    vol++;
    // Function to check working in Console
    console.log(vol);
    if (vol == 1) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 10%, rgba(255, 255, 255, 0.5) 0%)';
    } else if (vol == 2) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 20%, rgba(255, 255, 255, 0.5) 0%)';
    } else if (vol == 3) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 30%, rgba(255, 255, 255, 0.5) 0%)';
    } else if (vol == 4) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 40%, rgba(255, 255, 255, 0.5) 0%)';
    } else if (vol == 5) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 50%, rgba(255, 255, 255, 0.5) 50%)';
    } else if (vol == 6) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 60%, rgba(255, 255, 255, 0.5) 40%)';
    } else if (vol == 7) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 70%, rgba(255, 255, 255, 0.5) 30%)';
    } else if (vol == 8) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 80%, rgba(255, 255, 255, 0.5) 20%)';
    } else if (vol == 9) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 90%, rgba(255, 255, 255, 0.5) 10%)';
    } else if (vol == 10) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 100%, rgba(255, 255, 255, 0.5) 0%)';
    } else { vol = 10; }
});

bt_dec.addEventListener('click', function() {
    vol--;
    // Function to check working in Console
    console.log(vol);
    if (vol == 1) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 10%, rgba(255, 255, 255, 0.5) 0%)';
    } else if (vol == 2) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 20%, rgba(255, 255, 255, 0.5) 0%)';
    } else if (vol == 3) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 30%, rgba(255, 255, 255, 0.5) 0%)';
    } else if (vol == 4) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 40%, rgba(255, 255, 255, 0.5) 0%)';
    } else if (vol == 5) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 50%, rgba(255, 255, 255, 0.5) 50%)';
    } else if (vol == 6) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 60%, rgba(255, 255, 255, 0.5) 40%)';
    } else if (vol == 7) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 70%, rgba(255, 255, 255, 0.5) 30%)';
    } else if (vol == 8) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 80%, rgba(255, 255, 255, 0.5) 20%)';
    } else if (vol == 9) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 90%, rgba(255, 255, 255, 0.5) 10%)';
    } else if (vol == 0) {
        vol_bar.style.backgroundImage = 'linear-gradient(to right, blue 0%, rgba(255, 255, 255, 0.5) 0%)';
    } else { vol = 0; }
});

const social = ["Facebook", "Whatsapp", "Instagram", "Wechat", "Twitter"];
const recent = document.getElementById('recent');
const open1 = document.getElementById('opened1');
const open2 = document.getElementById('opened2');
const open3 = document.getElementById('opened3');
const name_of = document.getElementById('opened-name');

var iter = 0,
    open_check = false;

recent.addEventListener('click', function() {
    if (iter > 2) {
        iter = 0;
    } else if (iter <= 2 && open_check == false) {
        open_check = true;
        open1.textContent = social[iter];
        open2.textContent = social[iter + 1];
        open3.textContent = social[iter + 2];
        recent.textContent = 'Hide';
        iter++;
        name_of.style.top = '30px';
    } else {
        open_check = false;
        recent.textContent = 'Show';
        open1.textContent = "";
        open2.textContent = "";
        open3.textContent = "";
    }
});