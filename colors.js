//객체를 이용한 함수 중복문장 축약(html3함수 활용에 이어, ex10의 객체 안 함수넣기에 이은 활용, 이어서 파일로 쪼개기 강의 활용. 2.html에서 복붙하여옴)
var Links = {
  setColor:function(color){
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < alist.length){
  //       alist[i].style.color = color;
  //       i = i + 1;
  //     }
      $('a').css('color', color);
    }//jquery의 실행 태그는 달러$, 여러 기능 중 반복문을 대신하여 계산해주는 기능을 사용함.
    //이 페이지의 모든 a태그를 $함수(제이쿼리)로 제어하겠다.
    //.css (제이쿼리의 css함수를 쓰겠다) + ( 이 코드가 하려하는 것, 매개변수로 들어온 (파라미터)color값으로 한다.)
  }
  var Body = {
    setColor:function(color){
      //document.querySelector('body').style.color = color;
      $('body').css('color',color);
    },
    setBackgorundColor:function(color){
      //document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor',color);
    }//객체와 객체를 구분할 때엔 사이에 꼭 ','
  }

  function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night') {
    Body.setBackgorundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
  } else {
    Body.setBackgorundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
    }
  }//Body.~ Links.~ 등등 앞에 객체를 부여함으로써 관리에 용이하기 위하여 폴더를 만드는 역할.
  //document.querySelector('body').style.color = color; 여기서 document는 객체, querySelector('body')는 객체에 속해있는 함수, 객체에 속해있는 함수는 함수라 하지않고 메소드 method 라고 한다.
