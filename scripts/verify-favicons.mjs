async function check() {
  const [resIco, resSvg, resApple, resHtml] = await Promise.all([
    fetch('http://localhost:3000/favicon.ico'),
    fetch('http://localhost:3000/icon.svg'),
    fetch('http://localhost:3000/apple-touch-icon.png'),
    fetch('http://localhost:3000/'),
  ]);

  console.log('favicon.ico status:', resIco.status, resIco.headers.get('content-type'));
  console.log('icon.svg status:', resSvg.status, resSvg.headers.get('content-type'));
  console.log('apple-touch-icon.png status:', resApple.status, resApple.headers.get('content-type'));
  
  const html = await resHtml.text();
  const iconLinks = html.match(/<link[^>]*rel=["'](icon|apple-touch-icon)["'][^>]*>/gi) || [];
  console.log('Found icon link tags:', iconLinks);
}

check().catch(console.error);
