$('#myId')

// 과제: myClass, class를 가진 DOM object 들을 찾아라.
$('.myClass')

// 과제: name attribute value가 surname인 input DOM object을 찾아라.
$('input[name="surname"]')

$('#contents ul.people li')
/* 위의 selector을 HTML <tag>로 표현하라.
<div id="contents">
    <ul class="people">
        <li></li>
    </ul>
</div>
*/

$('a.external:first') // presude 클래스

$('li:odd')
/* jquery는 index가 0,1,2,3 순서이다, odd는 홀수를 뜻한다.
<li></li>
<li></li> *
<li></li>
<li></li> *
*/

$('div:animated')

$('a[rel$="thinger"]') // 접미사
/* 위의 selector가 찾아가는 HTML tag를 만들어라.
 <li><a rel="bestIdthinger"></li>
 */

 /*
 <a ref='do-nothing'></a>
 <a ref='so-thinger'></a>
 */

 $('div.foo').has('p') // has는 필터링, 반환은 div.foo값, filtering = true를 찾는과정
 /*
 <div class='foo'>
    <p></p>
</div>
<div class='foo'>
</div>
 */

$('ul li').not('.current')

/* form */
$('form :button')
// button-like(계열): <button> <input type='button'>

$('form :radio') // <input type='radio'/>
$('form :checkbox') // <input type='checkbox' />

$('form : checked')
/*
<input type='radio'>
<input type='checkbox'>
<select><option></option></select>
*/

$('form :selected') // <select><option></option></selected>

$('form :enabled') // 활성화된것
$('form :disabled') // 비활성화된것

$('form :file')

$('form :input') // input 태그를 두루 묶어서 selector, 몽땅찾아서 비활성화 할 수 도 있다.(user가 데이터를 입력하지 못하도록)
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='button'></button>
*/

$('form :text')

$('form :password')

$('form input[name="gender"]:radio')
/*
<form>
    <input type='radio' name='gender'/>
    <input type='checkbox' name='gender'/>
</form>
*/

$('form :reset') // <input type='reset'/>

$('form :submit') // <input type='submit'/>
