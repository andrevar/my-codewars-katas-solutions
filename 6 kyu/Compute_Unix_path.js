function combinePathsUri(){
  var args = Array.prototype.slice.call(arguments);
  args = args.map(a=> a.replace(/ /g,'').replace(/\\+/g,'/')).join('/').replace(/\/{2,}/g,'/');
  if (args[0] != '/') { 
      args = '/' + args;
  }
  return args[args.length - 1] == '/' && args.length > 1? args.slice(0,args.length - 1): args;
}
