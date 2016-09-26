import url from 'url'
import http from 'http'
import rp from 'request-promise'

const request = async(opts) =>{
  const {url} = opts
  let result = await rp(url)
  return result
}

const onRequest = async(req, res) => {
  const {query} = url.parse(req.url)
  const result = await request({url: query})
  if(result){
    setHeader(res)
    res.write(result)
    res.end()
  }
}

const setHeader = async(res, opts) => {
  const {ContentType = 'application/json'} = opts || {}
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.writeHeader(200, {'Content-Type':ContentType})
}

http.createServer(onRequest).listen(8000, () => {
  console.log('server running on 8000 port')
})
