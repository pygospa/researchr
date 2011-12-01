// Array Extensions  v1.0.7
if(isUndefined(Array.prototype.concat)){Array.prototype.concat=function(i){var I=this.copy();for(var l=0,o=i.length;l<o;l++){I[I.length]=i[l]}return I}}if(isUndefined(Array.prototype.copy)){Array.prototype.copy=function(){var i=new Array();for(var I=0,l=this.length;I<l;I++){i[I]=this[I]}return i}}if(isUndefined(Array.prototype.pop)){Array.prototype.pop=function(){var i=undefined;if(this.length>0){i=this[this.length-1];this.length--}return i}}if(isUndefined(Array.prototype.push)){Array.prototype.push=function(){var i=this.length;for(var I=0;I<arguments.length;I++){this[i+I]=arguments[I]}return this.length}}if(isUndefined(Array.prototype.shift)){Array.prototype.shift=function(){var i=this[0];for(var I=0,l=this.length-1;I<l;I++){this[I]=this[I+1]}this.length--;return i}}if(isUndefined(Array.prototype.slice)){Array.prototype.slice=function(i,I){var l;if(I==null||I=='')I=this.length;else if(I<0)I=this.length+I;if(i<0)i=this.length+i;if(I<i){l=I;I=i;i=l}var o=new Array();for(var O=0;O<I-i;O++){o[O]=this[i+O]}return o}}if(isUndefined(Array.prototype.splice)){Array.prototype.splice=function(i,I){if(I==null||I=='')I=this.length-i;var l=this.copy();for(var o=i,O=i+arguments.length-2;o<O;o++){this[o]=arguments[o-i+2]}var Q=I-arguments.length+2;for(var o=i+arguments.length-2,_=this.length-I+arguments.length-2;o<_;o++){this[o]=l[o+Q]}this.length=this.length-Q;return l.slice(i,i+I);}}if(isUndefined(Array.prototype.unshift)){Array.prototype.unshift=function(i){for(var I=this.length-1;I>=0;I--){this[I+1]=this[I]}this[0]=i;return this.length}}Array.prototype.indexOf=function(i,I){for(var l=(null==I||isNaN(I)||I<0)?0:Math.round(I),o=this.length,O=-1;O==-1&l<o;l++){O=(this[l]==i)?l:O}return O};Array.prototype.lastIndexOf=function(i,I){for(var l=(null==I||isNaN(I)||I>this.length)?this.length-1:Math.round(I),o=-1;o==-1&l>-1;l--){o=(this[l]==i)?l:o}return o};if(isUndefined(Array.prototype.map)){Array.prototype.map=function(i){if('function'!=typeof i)return this;var I=[];for(var l=this.length-1;l>=0;l--){I[l]=i(this[l]);}return I}}if(isUndefined(Array.prototype.unique)){Array.prototype.unique=function(){var i=[];for(var I=0,l=this.length;I<l;I++){if(i.indexOf(this[I])<0)i[i.length]=this[I]}return i}}if(isUndefined(Array.prototype.flatten)){Array.prototype.flatten=function(i,I){if(this.length<1)return[];if(isNumeric(i))i=[i];var l=false;if(isArray(i)){l={};for(var o=0,O=i.length;o<O;o++)l[i[o]]=true}var Q=[];for(var o=0,_=this.length;o<_;o++){if(isUndefined(this[o]))continue;if(!isArray(this[o])){if(false===l)Q[Q.length]=this[o]}else{for(var c=0,O=this[o].length;c<O;c++){if(false===l||l.hasOwnProperty(c))Q[Q.length]=this[o][c]}}}return Q}}if(isUndefined(Array.range)){Array.range=function(i,I,l){if(!isNumber(i))return null;if(!isNumber(l))l=1;if(!isNumber(I))I=0;var o=[],O=Math.min(I,i),Q=Math.max(I,i),_=Math.abs(l),c=-1;do{c++;o[c]=O;O+=_}while(O<=Q);return l>0?o:o.reverse();}}
