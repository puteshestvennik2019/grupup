import React from "react";
import parse from "html-react-parser";

function Account() {
  return (
    <div>
      {parse(`<p class="_1qeIAgB0cPwnLhDF9XSiJM">Hi guys! I'm new here.</p>
<p class="_1qeIAgB0cPwnLhDF9XSiJM"><strong class="_12FoOEddL7j_RgMQN0SNeU">I wanted to ask what's your opinion on medium to long data storage for a company</strong>&nbsp;(pharma business), how should I move, what should I look at.</p>
<p class="_1qeIAgB0cPwnLhDF9XSiJM">I talked to different people, but I wanted to have more opinions/thoughts on the matter,&nbsp;<strong class="_12FoOEddL7j_RgMQN0SNeU">so far what I know is:</strong></p>
<ul class="_33MEMislY0GAlB78wL1_CR">
<li class="_3gqTEjt4x9UIIpWiro7YXz">
<p class="_1qeIAgB0cPwnLhDF9XSiJM">Having 3-4 different and separate copies of the same datas in different places, running checksum periodically over everything;</p>
</li>
<li class="_3gqTEjt4x9UIIpWiro7YXz">
<p class="_1qeIAgB0cPwnLhDF9XSiJM">No HDD, but using solid state drives (SSDs), flash drives, micro SD memory cards and cloud storage (do I have to build a server to store the data? Again, new here, I know mostly nothing about this stuff).</p>
</li>
</ul>`)}
    </div>
  );
}

export default Account;
