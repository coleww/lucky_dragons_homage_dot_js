var LEFT_FREQ = 10000
var RIGHT_FREQ = 12000
window.AudioContext = window.AudioContext || window.webkitAudioContext
var ac = new AudioContext()

var oscleft = ac.createOscillator()
var oscright = ac.createOscillator()

oscleft.frequency.value = LEFT_FREQ
oscright.frequency.value = RIGHT_FREQ

var left = ac.createStereoPanner()
var right = ac.createStereoPanner()
left.pan.value = -1
right.pan.value = 1

oscleft.connect(left)
oscright.connect(right)
left.connect(ac.destination)
right.connect(ac.destination)
oscleft.start(ac.currentTime)
oscright.start(ac.currentTime)

var analyserleft = ac.createAnalyser()
var analyserright = ac.createAnalyser()

analyserleft.fftSize = 2048
analyserright.fftSize = 2048
var bufferLength = analyser.frequencyBinCount
var leftdataArray = new Uint8Array(bufferLength)
var rightdataArray = new Uint8Array(bufferLength)

function gotStream(stream) {
  var mediaStreamSource = ac.createMediaStreamSource(stream)
  var splitter = ac.createChannelSplitter(2)
  mediaStreamSource.connect(splitter)
  splitter.connect(analyserleft, 0)
  splitter.connect(analyserright, 1)

  window.setInterval(function () {
    analyserleft.getByteFrequencyData()(leftdataArray)
    analyserright.getByteFrequencyData()(rightdataArray)


    // um, ok so now you must actually do some math on the data.
    // uhhhhh, math is hard. audio science. what. ok
    // so like if the right channel has the left_freq in it, then wires are crossed?
    // and also if there are any other non-feedbacked frequencies present, those are humans?



    // idk what this data looks like, so for now, lets just log it, and see if we can make sense of it
    // maybe like, the indices will make sense relative to the, err, freqs?
    console.log('L', leftdataArray)
    console.log('R', rightdataArray)
  }, 5000)
}

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
navigator.getUserMedia( {audio:true}, gotStream )
