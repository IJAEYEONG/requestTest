const template = {
  HTML:function templateHTML(title, list, body){ 
    return`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>
  <h1>test</h1>
  <form action="/test" method="get">
    <input type="text" name="name" placeholder="이름을 입력하세요">
    <button type="submit">전송</button>
  </form>
  <a href="test.html">링크가기</a>
</body>
</html>
  `;
  },
  List:function templateList(filelist){
    var list = '<ul>';
    for(let i = 0; i<filelist.length; i++){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    }
    list = list +'</ul>';
    return list;
  }
}

module.exports=template;