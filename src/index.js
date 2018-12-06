import Zombie from "./zombie";
import { drawPlayer, drawHealth, drawKillCount, drawWordList, drawWPM } from "./player";
import { randomWord } from "./dictionary";
import { drawStartScreen, drawTitle, drawStartClick } from "./start_screen";


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const input = document.getElementById('typing-form');
  const wordList = document.getElementById('word-list');
  let zombies = {};
  let dx = 3.5;
  let dy = 0;
  let health = 100;
  let zombieCount = 0;
  let counter = 0;
  let round = 1;
  let alive = true;
  let killCount = 0;
  let timer = 0;
  let a = 0;
  let b = 0;
  
  function spawnZombies() {
    let x = -100;
    let y = Math.floor(Math.random() * (canvas.height-150)) + 50;
    
    for (let zomb in zombies) {
      if (zombies[zomb].x <= 150) {
        while (y < zombies[zomb].y + 100 && y > zombies[zomb].y - 100) {
          y = Math.floor(Math.random() * (canvas.height-150)) + 50;
        }
      }
    }
    let randomSpawn = Math.floor(Math.random() * 5) + (45 - round);
    if (counter % randomSpawn === 0) {
      zombies[`zombie${zombieCount}`] = new Zombie(ctx, randomWord(), x, y, dy, alive);
      zombieCount += 1;
    }
  }
  
  function renderGame() {
    setTimeout(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let request = requestAnimationFrame(renderGame);
      spawnZombies();
      drawWordList(zombies);
      drawWPM(ctx, timer, killCount);
      
      for (let zomb in zombies) {
        let { x } = zombies[zomb];
        if (zombies[zomb].alive) {
          zombies[zomb].draw()
          if (x < canvas.width - 200) {
            if (zombies[zomb].x > 350) {
              if (zombies[zomb].y < canvas.height / 2) {
                zombies[zomb].dy = 2;
              } else if (zombies[zomb].y > canvas.height / 2) {
                zombies[zomb].dy = -2;
              } else {
                zombies[zomb].dy = 0;
              }
            }
            zombies[zomb].x += dx;
            zombies[zomb].y += zombies[zomb].dy;
            zombies[zomb].shift += 100.75;
            if (zombies[zomb].shift >= 1155) {
              zombies[zomb].shift = 0;
            }
            Object.values(zombies).forEach((zombie, idx) => {
              if (idx < parseInt(zomb.slice(6))+3 && idx > parseInt(zomb.slice(6))) {
                if (zombies[zomb].x >= 20) {
                  if (zombies[zomb].y < zombie.y && zombies[zomb].y > zombie.y - 30) {
                    zombies[zomb].dy = -1;
                  } else if (zombies[zomb].y <= zombie.y + 30 && zombies[zomb].y >= zombie.y) {
                    zombies[zomb].dy = 1;
                  } else if (zombies[zomb].y === zombie.y) {
                    zombies[zomb].dy = 1;
                  } else {
                    zombies[zomb].dy = 0;
                  }
                }
              }
            })
          } else if (health > 0) {
            health -= .1
          }
        } else {
          zombies[zomb].drawDead();
          zombies[zomb].deadShift += 97;
          if (zombies[zomb].deadShift >= 1250) {
            zombies[zomb].deadShift = 1254;
          }
        }
      }

      for (let zomb in zombies) {
        if (zombies[zomb].alive) {
          zombies[zomb].drawText()
        } else {
          
        }
      }

      if (counter % 1000 === 0) {
        round += 1
      }
      counter += 10;

      drawKillCount(ctx, killCount);
      if (health > 0) {
        drawHealth(ctx, health);
        drawPlayer(ctx);
      } else if (health <= 0) {
        health = 0;
        drawHealth(ctx, health);
        // clearInterval(window.intervalId);
        cancelAnimationFrame(request)
        gameOver();
      }
    }, 1000 / 12);
  }

  
  input.addEventListener('input', startTimer);
  function startTimer(e) {
    if (e.target.value.length === 1) {
      a = Date.now();
    }
  }

  input.addEventListener('keyup', handleZombie);
  function handleZombie(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      input.value = input.value.trim();
      for (let zomb in zombies) {
        if (input.value === zombies[zomb].word) {
          killCount += 1;
          zombies[zomb].word = ""
          zombies[zomb].alive = false;
          break;
        }
      }
      input.value = "";
      b = Date.now();
      timer += (b-a)/1000;
    } else {
      null
    }
  }

  function resetGame () {
    zombies = {};
    dx = 3.5;
    dy = 0;
    health = 100;
    zombieCount = 0;
    counter = 0;
    round = 1;
    alive = true;
    killCount = 0;
    timer = 0;
  }

  function gameOver() {
    canvas.className = "start-screen";
    drawStartScreen(ctx);
    wordList.style.display = "none";
    input.value = "";
    input.disabled = true;
    canvas.addEventListener('click', startGame)
  }

  function startGame(e) {
    canvas.removeEventListener('click', startGame)
    resetGame();
    clearInterval(window.startInterval);
    canvas.className = "game-screen";
    // window.intervalId = setInterval(renderGame, 100);
    requestAnimationFrame(renderGame)
    input.disabled = false;
    input.focus();
    wordList.style.display = "block";
  }
  let startCounter = 0;
  let titlepos = -60;
  function titleDrop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStartScreen(ctx, canvas);
    titlepos += 5;
    if (titlepos >= 140) {
      titlepos = 140;
      counter += .5;
      if (counter % 10 <= 7) {
        drawStartClick(ctx);
      } else {
        null;
      }
      canvas.addEventListener('click', startGame)
    }
    drawTitle(ctx, titlepos);
  }
  if (canvas.className === "start-screen") {
    drawStartScreen(ctx, canvas);
    window.startInterval = setInterval(titleDrop, 70);
    // canvas.addEventListener('click', startGame)
  }
})
