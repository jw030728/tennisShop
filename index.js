let router = require('./router');
let server = require('./server'); //서버를 모듈처럼 쓰기위해 불러온거 
let requestHandler = require('./requestHandler');

const mariadb = require('./database/connect/mariadb');
mariadb.connect();//db연결

server.start(router.route, requestHandler.handle);