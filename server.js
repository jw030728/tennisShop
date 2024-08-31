let http = require('http');// node.js가 가지고 있는 모듈
let url = require('url');


function start(route, handle){
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname//parse찾아내서 끄집어내는거 //.parse는 옛버전용 밑에코드가 최신용
        // const myURL = new URL(request.url, `http://${request.headers.host}`);
        // const pathname = myURL.pathname;

        if (pathname === '/favicon.ico') { //이상한거 안뜨게 하는거
            response.writeHead(200, { 'Content-Type': 'image/x-icon' });
            return response.end();
        }

        let queryData = url.parse(request.url,true).query;//

        route(pathname, handle, response, queryData.productId);//루트한테 보내기
       
        // response.writeHead(200,{'content-type' : 'text/html'}); //클라이언트에게 줄 RESPONSE타입은 HTML이다
        // response.write("hello juwon"); //그안에 들어갈 내용 body는 저 텍스트임
        // response.end(); //이제 끘
    }

    http.createServer(onRequest).listen(8888);
    
}

// 함수만든건 지역 이 파일에서만 사용가능
exports.start = start; //이 코드가 이 함수를 밖에서 쓸수있게 만들어줌