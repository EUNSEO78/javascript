// const news = prompt("뉴스기사 입력");
// const word = prompt("바뀌게 하고 싶은 단어 입력");
// const want = prompt("바꾸고 싶은 단어 입력");

// const changedNews = news.replace(word, want);
// console.log(changedNews);
// 다 바꾸고 싶으면 replaceAll word a를 이모지로 다 바꾸고 싶으면 이걸 써서 다 바뀌게 하기..

// 단어와 숫자를 입력하면 대문자화시켜서 숫자만큼 반복된 단어 돌려주는 함수

function test(word, count) {
  return word.toUpperCase().repeat(count);
}
