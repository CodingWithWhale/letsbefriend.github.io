<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Let's Be Friends?</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Language Switcher -->
  <div id="lang-switcher" class="lang-switcher">
    <button class="lang-btn active" data-lang="en">EN</button>
    <button class="lang-btn" data-lang="zh">中文</button>
  </div>

  <!-- Floating background decorations -->
  <div class="bg-decor">
    <div class="star star-1">&#9733;</div>
    <div class="star star-2">&#9733;</div>
    <div class="star star-3">&#9733;</div>
    <div class="star star-4">&#9733;</div>
    <div class="star star-5">&#9733;</div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>

  <!-- ============ MAIN SCREEN ============ -->
  <div id="main-screen" class="screen active">
    <div class="main-content">
      <div class="emoji-top">&#129309;</div>
      <h1 class="main-title" data-i18n="mainTitle">Let's be friends?</h1>
      <div class="buttons-container">
        <button id="yes-btn" class="btn btn-yes" data-i18n="yesBtn">YES</button>
        <button id="no-btn" class="btn btn-no" data-i18n="noBtn">NO</button>
      </div>
    </div>
  </div>

  <!-- ============ CAT OVERLAY (MOBILE) ============ -->
  <div id="cat-overlay" class="cat-overlay">
    <div class="cat-scene">
      <div class="cat-body">
        <div class="cat-ears">
          <div class="ear ear-left"></div>
          <div class="ear ear-right"></div>
        </div>
        <div class="cat-face">
          <div class="cat-eyes">
            <div class="eye eye-left">
              <div class="pupil"></div>
            </div>
            <div class="eye eye-right">
              <div class="pupil"></div>
            </div>
          </div>
          <div class="cat-nose"></div>
          <div class="cat-mouth"></div>
          <div class="cat-whiskers">
            <div class="whisker w-left-1"></div>
            <div class="whisker w-left-2"></div>
            <div class="whisker w-right-1"></div>
            <div class="whisker w-right-2"></div>
          </div>
        </div>
        <div class="cat-paw cat-paw-left">
          <div class="paw-pad"></div>
        </div>
        <div class="cat-paw cat-paw-right">
          <div class="paw-pad"></div>
        </div>
      </div>
      <div class="cat-speech-bubble">
        <p data-i18n="catGoBack">Go baaaack!</p>
      </div>
    </div>
  </div>

  <!-- ============ YES SCREEN ============ -->
  <div id="yes-screen" class="screen">
    <div class="yes-content">
      <div class="celebration-emoji">&#127881;</div>

      <h2 class="section-title" data-i18n="reasonsTitle">Reasons to be friends with me</h2>
      <ul class="reasons-list positive">
        <li><span class="reason-icon">&#128187;</span> <span data-i18n="reason1">I'm a coder — I build random websites, games, and projects just because I get an idea at 2AM and can't sleep until I try it</span></li>
        <li><span class="reason-icon">&#127909;</span> <span data-i18n="reason2">I'm a YouTuber — or at least I pretend I have an audience when I talk to my screen and explain things dramatically</span></li>
        <li><span class="reason-icon">&#129504;</span> <span data-i18n="reason3">I'm "smart" — my mom confirmed it, so it's basically an official certificate at this point</span></li>
        <li><span class="reason-icon">&#129309;</span> <span data-i18n="reason4">I'm a reliable friend — I don't just disappear mid-conversation or reply with dry "ok" messages and vanish</span></li>
        <li><span class="reason-icon">&#128663;</span> <span data-i18n="reason5">I like cars — especially fast ones, like the Porsche 911 GT3 RS (yes, I will talk about cars if you let me)</span></li>
        <li><span class="reason-icon">&#128560;</span> <span data-i18n="reason6">I can fix random tech problems... sometimes — and the other times I confidently press buttons until it works</span></li>
        <li><span class="reason-icon">&#10024;</span> <span data-i18n="reason7">I make funny and creative projects instead of doing normal boring stuff — like this website you're looking at right now</span></li>
        <li><span class="reason-icon">&#128172;</span> <span data-i18n="reason8">I'm always up for a good conversation — whether it's deep topics or just random jokes</span></li>
        <li><span class="reason-icon">&#9889;</span> <span data-i18n="reason9">I like learning new things — especially coding, game dev, and anything interactive or creative</span></li>
        <li><span class="reason-icon">&#128161;</span> <span data-i18n="reason10">I tend to turn ideas into actual projects instead of just thinking about them</span></li>
        <li><span class="reason-icon">&#127749;</span> <span data-i18n="reason11">I'm pretty easygoing — I don't overcomplicate things or make conversations weird</span></li>
        <li><span class="reason-icon">&#128522;</span> <span data-i18n="reason12">I'll probably send you random cool ideas I'm working on</span></li>
        <li><span class="reason-icon">&#127917;</span> <span data-i18n="reason13">I like making people laugh (or at least trying to)</span></li>
        <li><span class="reason-icon">&#128150;</span> <span data-i18n="reason14">I don't judge people for their interests — even if they're super random</span></li>
        <li><span class="reason-icon">&#128736;</span> <span data-i18n="reason15">I'm the type of person who says "wait, I can make a website for that" way too often</span></li>
      </ul>

      <h2 class="section-title negative-title" data-i18n="noReasonsTitle">Reasons to not be friends with me</h2>
      <div class="none-box">
        <span class="none-text" data-i18n="noneText">None</span>
        <span class="none-emoji">&#128521;</span>
      </div>

      <!-- ============ FORM SECTION ============ -->
      <h2 class="section-title form-heading" data-i18n="formTitle">Tell me about yourself!</h2>

      <form id="about-form" class="about-form" novalidate>
        <div class="form-row">
          <div class="form-group">
            <label for="name" data-i18n="labelName">Name</label>
            <input type="text" id="name" name="name" data-i18n-placeholder="phName" placeholder="What should I call you?" required>
          </div>
          <div class="form-group">
            <label for="age" data-i18n="labelAge">Age</label>
            <input type="number" id="age" name="age" data-i18n-placeholder="phAge" placeholder="How young are you?" min="1" max="150" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="hobbies" data-i18n="labelHobbies">Hobbies</label>
            <input type="text" id="hobbies" name="hobbies" data-i18n-placeholder="phHobbies" placeholder="What do you love doing?">
          </div>
          <div class="form-group">
            <label for="food" data-i18n="labelFood">Favorite Food</label>
            <input type="text" id="food" name="food" data-i18n-placeholder="phFood" placeholder="Yummiest thing ever?">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="game" data-i18n="labelGame">Favorite Game</label>
            <input type="text" id="game" name="game" data-i18n-placeholder="phGame" placeholder="What do you play?">
          </div>
          <div class="form-group">
            <label for="car" data-i18n="labelCar">Favorite Car</label>
            <input type="text" id="car" name="car" data-i18n-placeholder="phCar" placeholder="Dream ride?">
          </div>
        </div>

        <div class="form-group full-width">
          <label for="about-you" data-i18n="labelAbout">Write about yourself!</label>
          <textarea id="about-you" name="about-you" rows="5" data-i18n-placeholder="phAbout" placeholder="Tell me anything and everything about you..."></textarea>
        </div>

        <button type="submit" class="btn btn-submit" data-i18n="submitBtn">Submit</button>
      </form>

      <!-- ============ SUCCESS MESSAGE ============ -->
      <div id="success-message" class="success-message hidden">
        <div class="success-icon">&#127881;</div>
        <h2 data-i18n="successTitle">Thank you for telling me about yourself! :)</h2>
        <p class="success-sub" data-i18n="successSub">I can't wait to be best friends!</p>
        <div class="confetti-container" id="confetti-container"></div>
      </div>

      <!-- ============ VIEW REPLIES BUTTON ============ -->
      <div id="view-replies-section" class="view-replies-section">
        <button id="view-replies-btn" class="btn btn-replies" data-i18n="viewReplies">View Replies</button>
      </div>

    </div>
  </div>

  <!-- ============ REPLIES MODAL ============ -->
  <div id="replies-modal" class="replies-modal">
    <div class="replies-modal-content">
      <div class="replies-modal-header">
        <h2 data-i18n="repliesTitle">Replies</h2>
        <button id="close-replies-btn" class="close-replies-btn">&times;</button>
      </div>
      <div id="replies-list" class="replies-list">
        <p class="no-replies" data-i18n="noReplies">No replies yet!</p>
      </div>
      <div class="replies-actions">
        <button id="clear-replies-btn" class="btn btn-clear" data-i18n="clearReplies">Clear All</button>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
