const Stream = require('node-rtsp-stream');

const streamUrl = [
    
    "rtsp://admin:Haeri5515!@175.219.0.86:5575/Streaming/Channels/101",
    "rtsp://admin:Haeri5515!@175.219.0.86:5575/Streaming/Channels/201",

    "rtsp://210.99.70.120:1935/live/cctv009.stream",
]

let stream0 = new Stream({
  name: 'foscam_stream',
  streamUrl: streamUrl[0],
  wsPort: 9000,
  

//   width: ,
//   height: 100
});

let stream1 = new Stream({
    name: 'foscam_stream',
    streamUrl: streamUrl[1],
    wsPort: 9001,
});

let stream2 = new Stream({
    name: 'foscam_stream',
    streamUrl: streamUrl[2],
    wsPort: 9002,
});