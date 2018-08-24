(function() {
	String.prototype.between = function(str1, str2) {
		let str = this.substr(this.indexOf(str1) + str1.length);
		return str.substring(0, str.indexOf(str2));
	};

	String.prototype.contains = function(str) {
		return this.indexOf(str) !== -1;
	};

	let agent = window.navigator.userAgent;
	let browser = {
		name: 'Unknown',
		version: 'Unknown',
	};

	if (agent.contains('MSIE')) { /* IE <= 10 */
		browser.name = 'Internet Explorer';
		browser.version = agent.between('MSIE ', '.');
	}
	else if (agent.contains('Trident/7')) { /* IE 11 */
		browser.name = 'Internet Explorer';
		browser.version = agent.between('rv:', '.');
	}
	else if (agent.contains('Edge')) { /* Edge 12+ */
		browser.name = 'Edge';
		browser.version = agent.between('Edge/', '.');
	}
	else if (agent.contains('Firefox')) {
		browser.name = 'Firefox';
		browser.version = agent.between('Firefox/', '.');
	}
	else if (agent.contains('Chrome')) {
		browser.name = 'Chrome';
		browser.version = agent.between('Chrome/', '.');
	}
	else if (agent.contains('CriOS')) {
		browser.name = 'Chrome';
		browser.version = agent.between('CriOS/', '.');
	}
	else if (agent.contains('Safari')) {
		browser.name = 'Safari';
		browser.version = agent.between('Version/', '.');
	}

	document.getElementById("browserName").innerHTML = browser.name;
	document.getElementById("browserVersion").innerHTML = browser.version;
}());
