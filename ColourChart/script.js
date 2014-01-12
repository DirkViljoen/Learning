var rg = 0;
var rs = 0;
var gg = 0;
var gs = 0;
var bg = 0;
var bs = 0;



function incRg(amount){
  rg = rg + amount;

  if (rg > 15) {rg=15};
  if (rg < 0) {rg=0};

  $('#rg').html(intToHex(rg));
  colorBlock();
}

function incRs(amount){
  rs = rs + amount;

  if (rs > 15) {rs=15};
  if (rs < 0) {rs=0};

  $('#rs').html(intToHex(rs));
  colorBlock();
}

function incGg(amount){
  gg = gg + amount;

  if (gg > 15) {gg=15};
  if (gg < 0) {gg=0};

  $('#gg').html(intToHex(gg));
  colorBlock();
}

function incGs(amount){
  gs = gs + amount;

  if (gs > 15) {gs=15};
  if (gs < 0) {gs=0};

  $('#gs').html(intToHex(gs));
  colorBlock();
}

function incBg(amount){
  bg = bg + amount;

  if (bg > 15) {bg=15};
  if (bg < 0) {bg=0};

  $('#bg').html(intToHex(bg));
  colorBlock();
}

function incBs(amount){
  bs = bs + amount;

  if (bs > 15) {bs=15};
  if (bs < 0) {bs=0};

  $('#bs').html(intToHex(bs));
  colorBlock();
}

function intToHex(integer) {
  var temp = "";
  switch(integer)
  {
    case 0:
      temp = "0"
    break;
    case 1:
      temp = "1"
    break;
    case 2:
      temp = "2"
    break;
    case 3:
      temp = "3"
    break;
    case 4:
      temp = "4"
    break;
    case 5:
      temp = "5"
    break;
    case 6:
      temp = "6"
    break;
    case 7:
      temp = "7"
    break;
    case 8:
      temp = "8"
    break;
    case 9:
      temp = "9"
    break;
    case 10:
      temp = "a"
    break;
    case 11:
      temp = "b"
    break;
    case 12:
      temp = "c"
    break;
    case 13:
      temp = "d"
    break;
    case 14:
      temp = "e"
    break;
    case 15:
      temp = "f"
    break;
    default:
      temp = "NaN"
  }
  return temp;
}

function colorBlock() {
  temp = '#'+intToHex(rg)+intToHex(rs)+intToHex(gg)+intToHex(gs)+intToHex(bg)+intToHex(bs)
  $('#colorBlock').css('background-color', temp);
}

      document.getElementById("hrgu").onclick=function(){incRg(1)};
      document.getElementById("hrgd").onclick=function(){incRg(-1)};
      document.getElementById("hrsu").onclick=function(){incRs(1)};
      document.getElementById("hrsd").onclick=function(){incRs(-1)};

      document.getElementById("hggu").onclick=function(){incGg(1)};
      document.getElementById("hggd").onclick=function(){incGg(-1)};
      document.getElementById("hgsu").onclick=function(){incGs(1)};
      document.getElementById("hgsd").onclick=function(){incGs(-1)};

      document.getElementById("hbgu").onclick=function(){incBg(1)};
      document.getElementById("hbgd").onclick=function(){incBg(-1)};
      document.getElementById("hbsu").onclick=function(){incBs(1)};
      document.getElementById("hbsd").onclick=function(){incBs(-1)};
