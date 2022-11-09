- custom js & css 의 경롤는 index와 같은 경로로 해야  편함
- 자식요소에 float있으면 부모요소 크기값이 없어지기 때문에 값을줘야됨 예외)html 요소는 포지션 속성 중 absolute 또는 fixed를 주면 자동으로 inline-block으로 디스플레이 속성이 변경됨
- 가상클래스 nth of type,  nth of child
- margin:auto 속성을 가지는 요소는 꼭 display:block
- ~ 은 같은계층을 선택할때 사용
- form 요소에서 button, label만  before, after 가질수있다
- 같은 위치에서는 포지션 속성이 있는것이 더 상위에 올라감 
- 포지션 둘다있으면  position: relative 가 우선 된다

/*전체적인 고정틀*/
<section class="cd-section" id="awards">
        <div>
          <div class="content">
            <h2>Section 5</h2>
          </div>
        </div>
      </section>

```HTML
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="responsible.css" />
```

- pc 버전인 style가 먼저오고 모바일 버전 responsible가 뒤에 와야된다

```html
<section class="cd-section visible">
    <div>
    </div>
</section>
```

- 이구조는 변경하면안된다

```css
 position: fixed;
 width: 100%;
```

- positionn 하면 무조건 너비 다시주기

```js
// html문서를 다읽은 다음에 custom.js를 실행한다라는 뜻
$(function(){
  //기능넣기
})
```

- html를 다읽은 다음에 js를  실행한다 

```css
.btn-hiring:active{
}
```

- active 가상클래스는 마우스를 누르고 있을때 상태를 표시함

```css
.awards-inner > div{
}
```

- awards-inner의 바로밑에 div만 말함

```css
.location-inner:before {
  content: "";
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}
```

-  before은 inline요소이기때문에 크기값이 없음 그래서 포지션을 줘야됨

```html
<div class="project-info" date-text=""01>
```

- 사용자 정의 속성이다 date-text 텍스트 관련 데이터라는 뜻

```css
  /* 애니메이션이름 지속시간 지연시간 부드러움 100%에서 끝냄 */
  animation: opacity-image 1s 3s ease-in both;
  /* 100%구간에서 애니메이션을 끝냄 */
  animation-fill-mode: both;
```

```html
  <a
     class="view-project"
     href="project-detail-03.html"
     data-featherlight="iframe"
     >
```

- a태그에  data-featherlight="iframe" 넣기
- js.css 링크걸어줘야됨
- https://noelboss.github.io/featherlight/ 다운하기

```css
 section {
        border: 5px solid red;
        height: 300px;
      }
      @media (max-width: 768px) {
        section {
          height: auto;
        }
      }
```

- 사진같은경우에는 배경이미지로 css에서 넣어줬다면 높이값을 지정해줘야 나타남 ( height: 300px;)

**모바일버전 변환할때**

- height: 00px => height: auto  (hoem은 보통 100vh그대로 함)
- position: absolute =>   position: static
- width: 00% => width: 100%
- float:left => float: none

````html
 <link rel="stylesheet" href="style.css" />
 <link rel="stylesheet" href="responsible.css" />
````

- css순서 중요 style.css 가 먼저나와야됨
