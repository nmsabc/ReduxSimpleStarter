import React, { Component } from 'react'

class CrawlerIndex extends Component {
  render () {
    console.log('*** Before', CrawlerIndex)
    // var Crawler = require('crawler')
    // var crawler = new Crawler('https://olx.ro')
    // crawler.on('fetchcomplete', function (queueItem, responseBuffer, response) {
    //   console.log('Fetched', queueItem.url, responseBuffer.toString())
    // })

    var Crawler = require('crawler')

    var c = new Crawler({
      maxConnections: 10,
        // This will be called for each crawled page
      callback: function (error, res, done) {
        if (error) {
          console.log(error)
        } else {
          var $ = res.$
                // $ is Cheerio by default
                // a lean implementation of core jQuery designed specifically for the server
          console.log($('title').text())
        }
        done()
      }
    })

    // Queue just one URL, with default callback
    c.queue('http://www.amazon.com')

    return (
      <div>
        Crawler Head
        <div>
            Crawler Index
        </div>
      </div>
    )
  }
}

export default CrawlerIndex
