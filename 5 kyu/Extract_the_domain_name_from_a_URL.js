function domainName(url){
  if(!!url.match('www.')) {
     return url.split('www.')[1].split('.')[0];
  } else if(!!url.match('//')) {
     return url.split('//')[1].split('.')[0];
  }
   return url.split('.')[0]
}
