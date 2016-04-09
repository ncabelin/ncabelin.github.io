var allEnemies = [];
var enemyNum = 4;
var score = 0;
var lives = 5;
var keyFound = true;

var scoreCard = $("#scores");
var livesCard = $("#lives");

function showModal(title, msg) {
  $(".modal-title").html("<h2>" + title + "</h2>")
  $(".modal-body").html("<h4>" + msg + "</h4>")
  $("#myModal").modal('show')
}

showModal("Welcome", "<img src='images/Heart.png'><br>Hi, Thanks for playing.<br><br> The goal is to get the keys past the bug, fishes and the horned girl.<br><br> Reach <strong>10 keys</strong> to win.<br>Use the <strong>arrow keys</strong> to move around. <br>You have <strong>5 lives.</strong> Goodluck" )

$(".startGame").click(function() {
    startRender = true;
    $("#pauseGame").css("display", "inline")
    $("#restartModal").css("display", "inline")
    $(".startGame").css("display", "none")
})

$("#pauseGame").click(function() {
    startRender = false;
    $("#pauseGame").css("display", "none")
    $(".startGame").css("display", "inline")
})

$(".restartGame").click(function() {
  startRender = false;
  showModal("RESET ?", "<img src='images/char-cat-girl.png'> Do you want to restart?")
  resetGame()
  $("#pauseGame").css("display", "inline")
  $(".startGame").css("display", "none")
  $("#modalStart").css("display", "none")
})

function resetGame() {
  allEnemies = [];
  score = 0;
  lives = 5;
  player.start = false;
  startRender = true;
  makeEnemies()
  scoreCard.html(score)
  livesCard.html(lives)
}

// updates scorecard and life balance, stops game if 10 score is reached or 0 lives
function cardChange() {
  scoreCard.html(score);
  livesCard.html(lives);
  if (score == 10) {
    startRender = false;
    showModal("YOU WIN !", "<img src='images/Star.png'>Congratulations, You WIN !")
  }
  if (lives == 0) {
    //startRender = false;
    showModal("YOU LOSE !", "<img src='images/char-princess-girl.png'>Sorry, You LOST !")
  }
}

// generates random number between min to max
function randomize(min, max) {
  var x = Math.floor((Math.random() * (max - min + 1) + min ));
  return x;
};

// generates random row
function rowRand() {
  switch(randomize (1,3)) {
    case 1:
      return 72;
      break;
    case 2:
      return 155;
      break;
    default:
      return 238;
  }
}

// places random key location, one key is one score
function keyLoc() {
  switch(randomize (1,5)) {
    case 1:
      return 0;
      break;
    case 2:
      return 101;
      break;
    case 3:
      return 202;
      break;
    case 4:
      return 303;
      break;
    default:
      return 404;
  }
}

var Key = function() {
  this.sprite = 'images/Key.png';
  this.y = -11; // specifies only one row for key to appear in
}

Key.prototype.update = function() {
  if (keyFound) {
    this.x = keyLoc(); // if key is found generate another key in a random x column location
    keyFound = false;
  }
}

// draw key
Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var key = new Key; // only one key


// build Enemy class
var Enemy = function() {
    this.sprite = 'images/fish.png';
    this.speed = randomize(100, 400);
    this.start = false;
    this.bug = false;
};

// Enemy update method
Enemy.prototype.update = function(dt) {
    if (this.start == false) {
      this.x = 0;
      if (this.bug) {
        this.y = 321; // places bugs in only one row (bottom)
      } else if (this.horn) {
        this.y = -11; // places horned girl in only one row (top)
      } else {
        this.y = rowRand(); // fishes get placed in random rows (center rows)
      }
      this.start = true;
    } else if (this.x < 505) {
      this.x += this.speed * dt; // sets speed
    } else {
      this.start = false;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// build Player Class
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.start = false;
};

Player.prototype.update = function() {
    if (!this.start) {
      // player always starts in the same location
      this.x = 202;
      this.y = 404;
      this.start = true;
    }

    // check enemy collision
    for (var i = 0; i < allEnemies.length; i++ ) {
      var collide = false;

      // check if enemy is within 40 pixels of player
      var enemyXa = allEnemies[i].x - 40;
      var enemyXb = allEnemies[i].x + 40;
      if (this.x < enemyXb && this.x > enemyXa) {
          collide = true;
      }

      if (this.y == allEnemies[i].y && collide == true) {
        this.start = false;
        lives--;
        cardChange(); // update scorecard minus one life
      }
    }

    // add score
    if (this.y == -11 && this.x == key.x) {
      score++;
      cardChange();
      keyFound = true;
      this.start = false; 
    }
};

// draws player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// handles keyboard inputs
Player.prototype.handleInput = function(a) {
    if (a == 'left') {
      if (this.x > 0) {
        this.x += -101;
      }
    } else if (a == 'up') {
      if (this.y > 0) {
        this.y += -83;
      }
    } else if (a == 'right') {
      if (this.x < 400) {
        this.x += 101;
      }
    } else if (a == 'down') {
      if (this.y < 404 ) {
        this.y += 83;
      }
    }
};

// listen to keys
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function makeEnemies() {
  // instantiate 3 fish enemies
  for (var i = 1; i <= enemyNum; i++) {
    y = toString("enemy" + i);
    var y = new Enemy();
    allEnemies.push(y);
  }

  // instantiate 1 bug enemy 
  var bug = new Enemy;
  bug.sprite = 'images/enemy-bug.png';
  bug.bug = true;
  allEnemies.push(bug);

  // instantiate 1 horned girl enemy
  var horn = new Enemy;
  horn.sprite = 'images/char-horn-girl.png';
  horn.horn = true;
  horn.speed = 50;
  allEnemies.push(horn);

}

makeEnemies()

// instantiate player
var player = new Player();
