export function findClass(element: HTMLElement,className: string): HTMLElement {
	var foundElement=null,found;
	function recurse(element,className,found) {
		for(var i=0;i<element.childNodes.length&&!found;i++) {
			var el=element.childNodes[i];
			var classes=el.className!=undefined? el.className.split(" "):[];
			for(var j=0,jl=classes.length;j<jl;j++) {
				if(classes[j]==className) {
					found=true;
					foundElement=element.childNodes[i];
					break;
				}
			}
			if(found)
				break;
			recurse(element.childNodes[i],className,found);
		}
	}
	recurse(element,className,false);
	return foundElement;
}

export function timeoutPromise(timeout): Promise<void> {
	return new Promise<void>(function(resolve, reject) {
		setTimeout(function() {
			resolve();
		}, timeout);
	})
}

export function indexesOf(str: string, needle: string): number[] {
	let indexes = [];
	for (let i = 0; i < str.length; i++) {
    if (str[i] == needle) {
			indexes.push(i);
		}
	}
	return indexes;
}
