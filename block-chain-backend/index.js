const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const cors = require('@koa/cors')

const app = new Koa()
    //const axios = require('axios')
app.use(cors())
app.use(bodyParser())

let router = new Router()

router.post("/request", async(ctx) => {
    /*let response = await axios({
        method: 'post',
        url: '/api/request',
        data: ctx.request.body
    })
    console.log(response.data)*/
    ctx.body = ctx.request.body
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000)