var allEnemies = [];
var enemyNum = 4;
var score = 0;
var lives = 3;
var keyFound = true;

var scoreCard = $("#scores");
var livesCard = $("#lives");

function cardChange() {
  scoreCard.html(score);
  livesCard.html(lives);
}

// generate random number between min to max
function randomize(min, max) {
  var x = Math.floor((Math.random() * (max - min + 1) + min ));
  return x;
};

// generate random row
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
  this.y = -11;
}

Key.prototype.update = function() {
  if (keyFound) {
    this.x = keyLoc();
    keyFound = false;
  }
}

Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var key = new Key;


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
        this.y = 321;
      } else if (this.horn) {
        this.y = -11;
      } else {
        this.y = rowRand(); //63 145 230
      }
      this.start = true;
    } else if (this.x < 505) {
      this.x += this.speed * dt;
    } else {
      this.start = false;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var bug = new Enemy;
bug.sprite = 'images/enemy-bug.png';
bug.bug = true;
allEnemies.push(bug);

var horn = new Enemy;
horn.sprite = 'images/char-horn-girl.png';
horn.horn = true;
horn.speed = 50;
allEnemies.push(horn);

// build Player Class
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.start = false;
};

Player.prototype.update = function() {
    if (this.start == false) {
      this.x = 202;
      this.y = 404;
      this.start = true;
    }

    // check enemy collision
    for (var i = 0; i < allEnemies.length; i++ ) {
      var collide = false;
      var enemyXa = allEnemies[i].x - 40;
      var enemyXb = allEnemies[i].x + 40;
      if (this.x < enemyXb && this.x > enemyXa) {
          collide = true;
      }

      if (this.y == allEnemies[i].y && collide == true) {
        this.start = false;
        lives--;
        cardChange();
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

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

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
    console.log(this.x + " x, " + this.y + " y")
};


// instantiate 3 enemies
for (var i = 1; i <= enemyNum; i++) {
  y = toString("enemy" + i);
  var y = new Enemy();
  allEnemies.push(y);
}

// instantiate player
var player = new Player();

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
