const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    let url = ctx.URL.pathname;
    if (url === '/index') {
        ctx.body = '<h1>WELCOME TO INDEX PAGE.</h1>';
    } else if (url === '/aboutme'){
        ctx.body = '<h1>WELCOME TO ABOUT ME PAGE.</h1>';
    }else if ( url === '/contact'){
        ctx.body = '<h1>WELCOME TO CONTACT PAGE.</h1>';
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});