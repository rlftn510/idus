
// 과제 1 별점 부여 함수

const starScore = (e) => {
  const target = e.target
  if (target.getAttribute('data-star-num')) {
    const starNum = target.getAttribute('data-star-num')
    const targetParent = target.parentElement
    const childStar = targetParent.querySelectorAll('.score_item')

    targetParent.setAttribute('data-all-score', starNum )
    // 타겟의 부모에게 타겟의 점수를 부여하여 몇점인지 알게함

    Array.from(childStar).forEach((el) => {
      if(el.getAttribute('data-star-num') <= starNum) {
        el.style.color = 'red'
      } else {
        el.style.color = 'black'
      }
    });
    // 타겟 이하의 점수에게 색을 주어 구분함
  } 
}