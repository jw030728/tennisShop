function route(pathname, handle, response){
    console.log('pathname : ' + pathname); //
    
    if (typeof handle[pathname] === 'function') { //따라서 이상한거 오면 함수로 안되서 에러떠서 방지
        handle[pathname](response); //함수처럼사용함() 저쪽코드가보면 다 handle = 함수()라서 가능
    }
    else{
        response.writeHead(404,{'Content-Type' : 'text/html'});
        response.write('not found');
        response.end();
    }
}

exports.route = route;