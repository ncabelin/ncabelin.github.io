var allEnemies = [];
var key,
    player;

var GameLogic = function() {
  var enemyNum = 4;
  var score = 0;
  var lives = 5;
  var keyFound = true;

  var scoreCard = $("#scores");
  var livesCard = $("#lives");

  /* displays bootstrap modal */
  function showModal(title, msg) {
    $(".modal-title").html("<h2>" + title + "</h2>");
    $(".modal-body").html("<h4>" + msg + "</h4>");
    $("#myModal").modal('show');
  }

  showModal("Welcome", "<img src='images/Heart.png'><br>Hi, Thanks for playing.<br><br>" + 
    " The goal is to get the keys past the bug, fishes and the horned girl.<br><br> Reach <strong>10 keys</strong>" + 
    " to win.<br>Use the <strong>arrow keys</strong> to move around. <br>You have <strong>5 lives.</strong> Goodluck" );

  /* configures 3 game control buttons */
  $(".startGame").click(function() {
      startRender = true;
      $("#pauseGame").css("display", "inline");
      $("#restartModal").css("display", "inline");
      $(".startGame").css("display", "none");
  });

  $("#pauseGame").click(function() {
      startRender = false;
      $("#pauseGame").css("display", "none");
      $(".startGame").css("display", "inline");
  });

  $(".restartGame").click(function() {
    startRender = false;
    showModal("RESET ?", "<img src='images/char-cat-girl.png'> Do you want to restart?");
    resetGame();
    $("#pauseGame").css("display", "inline");
    $(".startGame").css("display", "none");
    $("#modalStart").css("display", "none");
  });

  /* resets the game variables */
  function resetGame() {
    allEnemies = [];
    score = 0;
    lives = 5;
    player.start = false;
    startRender = true;
    makeEnemies();
    scoreCard.html(score);
    livesCard.html(lives);
  }

  /* updates scorecard and life balance, stops game if score reaches 10 or lives reaches 0. */
  function cardChange() {
    scoreCard.html(score);
    livesCard.html(lives);
    if (score == 10) {
      startRender = false;
      showModal("YOU WIN !", "<img src='images/Star.png'>Congratulations, You WIN !");
    }
    if (lives === 0) {
      showModal("YOU LOSE !", "<img src='images/char-princess-girl.png'>Sorry, You LOST !");
    }
  }

  /* generates random number between min to max */
  function randomize(min, max) {
    var x = Math.floor((Math.random() * (max - min + 1) + min ));
    return x;
  }

  /* generates random row */
  function rowRand() {
    switch(randomize (1,3)) {
      case 1:
        return 72;
      case 2:
        return 155;
      default:
        return 238;
    }
  }

  /* places key into random location, one key is one score */
  function keyLoc() {
    switch(randomize (1,5)) {
      case 1:
        return 0;
      case 2:
        return 101;
      case 3:
        return 202;
      case 4:
        return 303;
      default:
        return 404;
    }
  }

  var Key = function() {
    this.sprite = 'images/Key.png';
    /* specifies only top row for key to appear in */
    this.y = -11;
  };

  Key.prototype.update = function() {
    /* if key is found generate another key in a random x column location */
    if (keyFound) {
      this.x = keyLoc();
      keyFound = false;
    }
  };

  Key.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  /* only one key generated */
  key = new Key();


  /* build Enemy class */
  var Enemy = function() {
      this.sprite = 'images/fish.png';
      this.speed = randomize(100, 400);
      this.start = false;
      this.bug = false;
  };

  /* Enemy update method */
  Enemy.prototype.update = function(dt) {
      if (!this.start) {
        this.x = 0;
        if (this.bug) {
          /* places bug in bottom row only */
          this.y = 321;
        } else if (this.horn) {
          /* places horned girl in only top row */
          this.y = -11;
        } else {
          /* fishes get placed in random rows (center rows) */
          this.y = rowRand();
        }
        this.start = true;
      } else if (this.x < 505) {
        /* sets speed */
        this.x += this.speed * dt;
      } else {
        this.start = false;
      }
  };

  /* Draw the enemy on the screen, required method for game */
  Enemy.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  /* build Player Class */
  var Player = function() {
      this.sprite = 'images/char-boy.png';
      this.start = false;
  };

  Player.prototype.update = function() {
      if (!this.start) {
        /* player always starts in the same location */
        this.x = 202;
        this.y = 404;
        this.start = true;
      }

      /* checks for enemy collision */
      for (var i = 0; i < allEnemies.length; i++ ) {
        var collide = false;

        /* checks if enemy is within 40 pixels of player */
        var enemyXa = allEnemies[i].x - 40;
        var enemyXb = allEnemies[i].x + 40;
        if (this.x < enemyXb && this.x > enemyXa) {
            collide = true;
        }

        if (this.y == allEnemies[i].y && collide === true) {
          this.start = false;
          /* update scorecard, minus one life */
          lives--;
          cardChange();
        }
      }

      /* add score if there is collision with key */
      if (this.y == -11 && this.x == key.x) {
        score++;
        cardChange();
        keyFound = true;
        this.start = false; 
      }
  };

  /* draws player */
  Player.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  /* handles keyboard inputs */
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

  /* listen to keys */
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
    /* instantiate 4 fish enemies */
    for (var i = 1; i <= enemyNum; i++) {
      y = toString("enemy" + i);
      var y = new Enemy();
      allEnemies.push(y);
    }

    /* instantiate 1 bug enemy */
    var bug = new Enemy();
    bug.sprite = 'images/enemy-bug.png';
    bug.bug = true;
    allEnemies.push(bug);

    /* instantiate 1 horned girl enemy */
    var horn = new Enemy();
    horn.sprite = 'images/char-horn-girl.png';
    horn.horn = true;
    horn.speed = 50;
    allEnemies.push(horn);

  }

  makeEnemies();

  /* instantiate player */
  player = new Player();

}();
