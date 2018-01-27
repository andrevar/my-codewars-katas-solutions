function myAuntSally(str) {
	return str.split(' ').filter(a=>a.match(/([a-zA-Z])\1/) && !a.match(/([a-zA-Z])\1\1/)).join(' ');
}
