console.log("Hello world! xd")
.card{
  /* =Variables
------------------------------------- */
// Colors
$pure-white: hsla(0, 0%, 100%, 1); // #fff
$pure-black: hsla(0, 0%, 0%, 1); // #000
$dark-jungle-green: hsla(210, 3%, 11%, 1); //1c1d1e
$grey-dark: hsla(0, 0%, 25%, 1); // #404040
$white-dark: hsla(0, 0%, 95%, 1); /// #f1f1f1
$fuel-yellow: hsla(36, 100%, 49%, 1); // #f89500

// Fonts
$droid-serif: 'Droid Serif', serif;
$kalam: 'Kalam', cursive;
$open-sans: 'Open Sans', sans-serif;

// transition
$transition: .5s cubic-bezier(.77, 0, .175, 1);
$transition-fast: .2s cubic-bezier(.77, 0, .175, 1);

/* =Functions
------------------------------------- */
// Convert a pixel value to REM units
@function rem($pixel) {
  @return $pixel / 16 + rem;
}

/* =Styles
------------------------------------- */
html {
  background: $dark-jungle-green;
  box-sizing: border-box;
  margin: 0;
  min-height: 100vh;
  padding: 0;
}

.c-intro {
  animation: fe30-anime 1s ease-in-out 4s forwards;
  opacity: 0;
}

.c-fe30 {
  color: $pure-white;
  margin-top: rem(40);
  text-align: center;
  
  a {
    color: $pure-white;
    
    &:hover {
      text-decoration: none;
    }
  }
}

.c-ryanyu {
  background-color: transparent;
  display: block;
  font-family: $kalam;
  height: rem(70);
  margin: rem(20) auto 0;
  position: relative;
  text-align: center;
  width: rem(70);

  img {
    background-color: $pure-white;
    border: rem(3) solid $fuel-yellow;
    border-radius: 50%;
    height: rem(70);
    object-fit: contain;
    width: rem(70);
  }
}

.c-ryanyu__front {
  backface-visibility: hidden;
  height: inherit;
  position: absolute;
  top: 0;
  transform: rotateX(0) rotateY(0);
  transform-style: preserve-3d;
  transition: all $transition;
  z-index: 2000;

  .c-ryanyu:hover & {
    transform: rotateY(180deg);
  }
}

.c-ryanyu__back {
  background-color: $pure-white;
  backface-visibility: hidden;
  border-radius: 50%;
  color: $fuel-yellow;
  height: inherit;
  position: absolute;
  text-align: center;
  top: 0;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
  transition: all $transition;
  width: inherit;
  z-index: 1000;

  &::before {
    content: 'Ryan Yu';
    display: block;
    transform: rotate(-45deg) translate(-4px, 25px);
    width: rem(50);
  }

  .c-ryanyu:hover & {
    transform: rotateY(0);
  }
}

@keyframes fe30-anime {
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
}


