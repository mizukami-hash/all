@charset 'utf-8';

/* all */

* {
  box-sizing: border-box;
}

html,
body,
span,
nav,
img,
section,
header,
footer,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

image {
  vertical-align: bottom;
  width: 100%;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

.wrapper {
  max-width: 1170px;
  margin: 0 auto;
  /* background-color: pink; */
}

body {
  font-family: Helvetica, '游ゴシック', 'Yu Gothic', YuGothic, HiraKakuProN-W3, 'メイリオ', Meiryo, sans-serif;
}

/* header */

#header {
  height: 64px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 5;

}

#header ul {
  display: flex;
  justify-content: right;
  margin-right: 46px;
}

#header li {
  padding-left: 32px;
  font-size: 1.3rem;
}


#header a {
  color: #eee;
}


/* hero */


.hero {
  background-image: url(/images/mainvisual-removebg.png);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 2;
}

.text-area {
  display: inline-block;
  width: 580px;
  font-size: 1.4rem;
  color: #635b5b;
  background-color: rgba(238, 238, 238, .5);
  position: absolute;
  top: 45%;
  left: 30%;
  transform: translate(-50%, -50%);
  padding: 50px 60px;
}

.contents-wrapper {
  max-width: 1170px;
  margin: 0 auto;
}

/* about */

.content-title {
  color: #635b5b;
  font-weight: normal;
  font-size: 2rem;
  text-align: center;
  margin-top: 42px;
  margin-bottom: 42px;

}

.content .text {
  width: 60%;
  margin: 0 auto;

}

.about .text {
  display: flex;
  align-items: center;
}

.about img {
  border-radius: 50%;
  margin-right: 34px;
}


/* works */

.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;

}



.item {
  width: 30%;
  margin-right: 24px;
  margin-bottom: 32px;
}


#feature {
  padding: 100px 16px 50px 16px;
  margin: -50px auto 10px auto;
}

#feature .item {
  display: grid;
  gap: 26px;
}

#feature .item {
  box-shadow: 0 0 4px 4px #ccc;
}

#feature img {
  vertical-align: top;
  width: 100%;
  height: 200px;
  object-fit: cover;
}




.item-content {
  padding: 0 25px 12px 25px;

}

#feature .item-cat {
  font-size: 0.75rem;
  margin-bottom: 20px;
}

#feature .item-text {
  font-weight: bold;
  margin-bottom: 20px;

}

#feature .item-date {
  font-size: 0.75rem;
  text-align: right;

}


/* footer */

footer {
  width: 100%;
  height: 300px;
  background-color: rgba(39, 36, 36, 0.5);
}

#contact {
  text-align: right;
  padding: 30px 50px;
}