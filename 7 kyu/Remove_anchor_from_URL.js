function removeUrlAnchor(url){
  if (!!url.search(/\\?/)) {
      return url.split('?')[0];
  } 
      return url.split('#')[0];
}
