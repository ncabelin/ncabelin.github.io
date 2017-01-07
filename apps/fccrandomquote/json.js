var trumpQuotes = ["Even a race to Obama, [Hillary Clinton] was gonna beat Obama. I don't know who would be worse, I don't know, how could it be worse? But she was going to beat – she was favored to win – and she got schlonged, she lost, I mean she lost.",
"I know where she went it's disgusting, I don't want to talk about it. No, it's too disgusting. Don't say it, it's disgusting.",
"I think our country does plenty of killing also, Joe.",
"Look at that face! Would anyone vote for that? Can you imagine that, the face of our next president I mean, she's a woman, and I'm not s'posedta say bad things, but really, folks, come on.",
"You could see there was blood coming out of her eyes. Blood coming out of her wherever.",
"I will be the greatest jobs president that God ever created.",
"When Mexico sends its people, they're not sending their best. They're sending people that have lots of problems...they're bringing drugs, they're bringing crime. They're rapists.",
"Free trade is terrible. Free trade can be wonderful if you have smart people. But we have stupid people.",
"Let me tell you, I'm a really smart guy. I was a really good student at the best school in the country.",
"I have a great relationship with the blacks.",
"I think the only difference between me and the other candidates is that I'm more honest and my women are more beautiful.",
"If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America.",
"You know, it really doesn`t matter what [the media] write as long as you`ve got a young and beautiful piece of ass.",
"All of the women on 'The Apprentice' flirted with me -- consciously or unconsciously. That's to be expected.",
"I don't think Ivanka would do that, although she does have a very nice figure. I've said if Ivanka weren't my daughter, perhaps I'd be dating her.",
"My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body.",
"Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault.",
"The beauty of me is that I'm very rich."];


$(document).ready(function() {

  var q;

  $("#gen").click(function(){
    $("#randomQuotes").empty();
    var trumpQuoteFinal = trumpQuotes[Math.floor((Math.random() * (trumpQuotes.length)))];
    $("#randomQuotes").append(trumpQuoteFinal);
    q = "https://twitter.com/intent/tweet?text=%20"+trumpQuoteFinal;
  });

  $("#twit").click(function(){
    console.log(q);
    window.open(q);
  });
});
