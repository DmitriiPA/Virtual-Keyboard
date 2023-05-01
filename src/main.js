let BODY = document.querySelector("#body");

function load() {
BODY.classList.add("body"); 
BODY.innerHTML = `
<div class="wrapper">
<textarea class="textarea" name="text" id="textarea" cols="100" rows="10"></textarea>
<div class="key-board">
  <div class="key-line">
    <div class="key k01">&#39;</div>
    <div class="key k1">1</div>
    <div class="key k2">2</div>
    <div class="key k3">3</div>
    <div class="key k4">4</div>
    <div class="key k5">5</div>
    <div class="key k6">6</div>
    <div class="key k7">7</div>
    <div class="key k8">8</div>
    <div class="key k9">9</div>
    <div class="key k0">0</div>
    <div class="key k-">-</div>
    <div class="key k=">=</div>
    <div class="key  backspace not-letter">Backspace</div>
  </div>
  <div class="key-line">
    <div class="key tab-del not-letter">Tab</div>
    <div class="key">q</div>
    <div class="key">w</div>
    <div class="key">e</div>
    <div class="key">r</div>
    <div class="key">t</div>
    <div class="key">y</div>
    <div class="key">u</div>
    <div class="key">i</div>
    <div class="key">o</div>
    <div class="key">p</div>
    <div class="key">[</div>
    <div class="key">]</div>
    <div class="key">\</div>
    <div class="key tab-del not-letter">Del</div>
  </div>
  <div class="key-line">
    <div class="key backspace not-letter">CapsLock</div>
    <div class="key">a</div>
    <div class="key">s</div>
    <div class="key">d</div>
    <div class="key">f</div>
    <div class="key">g</div>
    <div class="key">h</div>
    <div class="key">j</div>
    <div class="key">k</div>
    <div class="key">l</div>
    <div class="key">;</div>
    <div class="key">'</div>
    <div class="key Enter not-letter">Enter</div>
  </div>
  <div class="key-line">
    <div class="key backspace not-letter">Shift</div>
    <div class="key">z</div>
    <div class="key">x</div>
    <div class="key">c</div>
    <div class="key">v</div>
    <div class="key">b</div>
    <div class="key">n</div>
    <div class="key">m</div>
    <div class="key">,</div>
    <div class="key">.</div>
    <div class="key">/</div>
    <div class="key not-letter">&#11165;</div>
    <div class="key Enter not-letter">Shift</div>
  </div>
  <div class="key-line">
    <div class="key not-letter">Ctrl</div>
    <div class="key not-letter">Win</div>
    <div class="key not-letter">Alt</div>
    <div class="key space"></div>
    <div class="key not-letter">Alt</div>
    <div class="key not-letter">&#11164;</div>
    <div class="key not-letter">&#11167;</div>
    <div class="key not-letter">&#11166;</div>
    <div class="key not-letter">Ctrl</div>
  </div>
</div>
<p class="info">Клавиатура создана в операционной системе Windows</p>
<p class="info">Для переключения языка комбинация: левыe ctrl + alt</p>
</div>
`
}

document.addEventListener("DOMContentLoaded", load)