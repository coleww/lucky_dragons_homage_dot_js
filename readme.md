LUCKYDRAGONS.js (the homage)
----------------------------------

# WIP TOTALLY DOESN'T WORK I LYK WHEN IT DOES K THX I PROMISE

Attempting to emulate [Make a Baby by Lucky Dragons](https://www.youtube.com/watch?v=Oqkqgq867j8) in JavaScript.

BASIC IDEA AFAIK:

- take 2 audio wires, strip one end, wrap the wires together into a handle. 
- plug the pluggy ends into an input an output that are feedback looped. 
- do this at least 2x. if you have a stereo in/out usb thingy then that is sufficient, but the effects probz exponentiate as you add ins/outs to it.
- an osillator plays a sine at a set frequency out of the output.
- an analyser watches the input section of the feedback loop.
  - if it only sees the set frequency, it means no one is touching the wire.
  - if it sees other frequencies, that's a human/object resisting the flow!
  - if it sees other freqs AND the set frequencies of other octopus wires, then that's 2 or more humans touching each other!
- do something in response to the data that is seen by the analysers
  - sweep filters, advances sequences, idk. 

TODO:

- fight soundflower/webaudio to make the loop happen
- see what the data looks like
- make some magic happen

