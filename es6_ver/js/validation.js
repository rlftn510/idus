
//과제 2 입력 폼

class Validation {
  constructor(elementId, limit){
    // 모듈의 아이디 값, 제한 글자수를 인자로 받습니다.
    this.elementId = document.getElementById(elementId)
    //아이디
    this.target = null
    //이벤트 타겟
    this.firValue = null
    //처음 입력된 메시지
    this.limit = limit
    //제한 글자수
  }

  firstMemo() {
    this.target = this.elementId.querySelector('textarea')
    this.firValue = this.target.value
    //초기 입력값을 받아 비교
  }

  textValidation(){
    const maxLen = this.limit
    //최대 입력 글자수를 담음
    const element = this.elementId
    const strMax = element.querySelector('.str_max')
    const textarea = this.target
    const strLen = textarea.value.length
    const curLen = maxLen - strLen
    // 최대 글자수와 현재 글자수 차이를 구하여 대입
    strMax.innerText = maxLen
    this.target.setAttribute('data-max', maxLen)

    if(strLen > 0 && this.firValue !== textarea.value) {
      // 메모에 내용이 없을 시 && 초기 입력값이랑 내용이 같을 시 저장 못하게함
      element.setAttribute('data-state', 'true')
    } else {
      element.setAttribute('data-state', 'false')
    }

    if (maxLen < strLen) {
      //지정된 글자수를 초과를 막음
      textarea.value = textarea.value.substr(0, maxLen)
      strMax.innerHTML = 0
    } else {
      strMax.innerHTML = curLen
    }
  }

  init(){
    this.firstMemo()
    this.textValidation()
  }
}