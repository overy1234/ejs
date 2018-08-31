var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.

app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

app.get('/hello',function(req,res){   // '/'
    res.render("hello",{name:req.query.nameQuery});
});

app.get("/hello/:nameParam",function(req,res){
    res.render("hello",{name:req.params.nameParam});
});

app.listen(3000,function(){  //3000번 포트를 사용합니다.
    console.log('Server On!');//서버가 실행되면 콘솔창에 표시될 메세지 입니다.
});
