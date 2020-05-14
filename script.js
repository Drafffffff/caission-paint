let flag = {
  processFlag: 1,
  curColor: 0,
};
let colors = ["#b46530", "#95c7b6", "#f3ede4", "#dab05d"];
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvas");
  background(220);
  frameRate(200);
}

function draw() {
  if (flag.processFlag === 1) {
    push();
    translate(width / 2, height / 2);
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    if (mouseIsPressed) {
      strokeWeight(1);
      if (
        collidePointRect(mouseX, mouseY, 0, 0, 120, 120) ||
        collidePointRect(mouseX, mouseY, 280, 0, 400, 120) ||
        collidePointRect(mouseX, mouseY, 0, 280, 120, 400) ||
        collidePointRect(mouseX, mouseY, 280, 280, 400, 400)
      ) {
        strokeWeight(4);
        stroke(colors[flag.curColor]);
        for (let i = 0; i < 4; i++) {
          rotate(PI / 2);
          line(mx, my, pmx, pmy);
        }
        // line(mx, my, pmx, pmy);
      }
    }
    pop();
  }

  if (flag.processFlag === 2) {
    push();
    translate(width / 2, height / 2);
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    if (mouseIsPressed) {
      strokeWeight(1);
      if (
        collidePointEllipse(mouseX, mouseY, width / 2, height / 2, 300, 300)
      ) {
        if (
          !collidePointEllipse(mouseX, mouseY, width / 2, height / 2, 80, 80)
        ) {
          stroke(colors[flag.curColor]);
          strokeWeight(4);
          for (let i = 0; i < 6; i++) {
            rotate(TWO_PI / 6);
            line(mx, my, pmx, pmy);
          }
        }
        // line(mx, my, pmx, pmy);
      }
    }
    pop();
  }
  if (flag.processFlag === 3) {
    push();
    translate(width / 2, height / 2);
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    if (mouseIsPressed) {
      strokeWeight(1);
      if (collidePointEllipse(mouseX, mouseY, width / 2, height / 2, 90, 90)) {
        stroke(colors[flag.curColor]);
        strokeWeight(4);
        for (let i = 0; i < 12; i++) {
          rotate(TWO_PI / 12);
          line(mx, my, pmx, pmy);
        }

        // line(mx, my, pmx, pmy);
      }
    }
    pop();
  }
}

function changeProcessFlag(x) {
  flag.processFlag = x;
}
function changeColor(x) {
  flag.curColor = x;
}
