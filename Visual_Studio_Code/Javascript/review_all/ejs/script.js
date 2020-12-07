//prompt함수 : 브라우저에서 사용자에게 메세지(프롬프트)를 
//              보여주고, 입력창을 띄어서, 입력을 받는 창을 호출

id = prompt('아이디입력');

if(id =='admin') {
    password = prompt('비밀번호 입력');

    console.log(typeof(password));

    if(password ==='123456') {
        //location.href는, 브라우저의 주소창의 값을 임의로 바꾸는 기능을 수행함
        //결과로, 브라우저의 주소값이 바뀜.
        // location.href = "20_login.html";
    } else {
        // location.href = "20_error.html";
    }   //if -else
    
} else {
    // location.href = "20_error.html";
}   //if-else