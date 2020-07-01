id = prompt('아이디 입력');
if(id = 'admin') {
  password=prompt('비밀번호 입력');
  if(password==='123456') {
    location.href="js_log_in_login.html";
  }
  else {
    location.href="js_log_in_error.html";
  }
}
else {
  location.href="js_log_in_error.html";
}
