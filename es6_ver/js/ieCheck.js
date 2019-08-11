
//ie 지원하지 않는 readonly, placeholder 지원 함수

//placeholder 지원
const arrInput = document.querySelectorAll('textarea, input')
const rowIePlaceholder = () => {
  Array.from(arrInput).forEach((el) => {
    if(el.getAttribute('placeholder').length > 0 && el.value == "") {
      el.value = el.getAttribute('placeholder')
      el.nextSibling.innerHTML = el.getAttribute('data-max')
    }
    el.addEventListener('focus', () => {
        if(el.value === el.getAttribute('placeholder')){
          el.value = ""
        }
      })
    el.addEventListener('blur', () => {
      if(el.value === "") {
        el.value = el.getAttribute('placeholder')
      }
    })
  })
}

//readonly 지원
const ieReadonly = () => {
  Array.from(arrInput).forEach((el) => {
    if(el.getAttribute('readonly') == '' || el.getAttribute('readonly') == 'true') {
      el.className += ' readonly'
    }
  })
}

// ie 체크
const ieCheck = () => {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') > 0) {
    ieReadonly()
    // ie일경우 ieReadonly 함수실행
    let rv = 0;
    let re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})"); 
    if (re.exec(userAgent) != null) {
      rv = parseFloat(RegExp.$1); 
    }
    if (rv != 0 && rv <= 9) {
      rowIePlaceholder()
      // ie 버전이 9이하일 경우 placeholder 함수 실행
    } 
  }
}