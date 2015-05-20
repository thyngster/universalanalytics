// dataLayer Pushes Monitor
// David Vallejo ( @thyng )
// 2015
// Works for > Chrome 36

Object.observe(dataLayer, function(c) {
    for(i=0;i<c.length;i++)
    {
	if(c[i].type=="add")
	{
      console.log("%cNew dataLayer Push\n", "color: blue; font-size:15px;");
	    console.log(JSON.stringify(c[i].object[c[i].name], null, '\t'));
	}
}
});
