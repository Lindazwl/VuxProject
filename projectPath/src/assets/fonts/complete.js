/* eslint-disable spaced-comment */
var fs = require('fs')
var path = require('path')
var filePath = path.resolve()

function writeFile(readurl, writeUrl) {
  fs.readFile(readurl, function(err, data) {
      if (err) {
        return console.error(err)
      }
      var str = data.toString()
      var reg = /\.icon\-([\w]+):before\s{\s+content:\s\"(\\.*)\"/g
      var obj = {}
      // var reg = /<script.*?>([\s\S]*)<\/script>/ig
      str.replace(reg, function(match, param, offset, string) {
        offset = offset.replace('\\', '\\u')
        obj[param] = offset
      })

      fs.writeFile(writeUrl, JSON.stringify(obj).replace(/\\\\/g, '\\'), function(err) {
        if (err) throw err
        console.log('写入成功')
      })
    }
  )
}

writeFile(path.join(filePath, 'iconfont.css'), 'result.json')
