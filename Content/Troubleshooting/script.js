var toggler;

			function toggleContent() {
			hideAllTargets();
			this.targetElement.style.display = "block";
			}

			function findTargetElement(target) {
			var togglerContentItems = toggler.getElementsByTagName('div');
for(var i=0;i<togglerContentItems.length; i++) {
	var iTarget = togglerContentItems[i];
	var iTargetName = iTarget.getAttribute('targetName');
	if (iTargetName != null && target == iTargetName) {
	return iTarget;
	}
	}
	}
	function hideAllTargets() {
	var targets = toggler.getElementsByTagName('div');
	for (var i = 0; i < targets.length; i++) {
	var target = targets[i];
	if (target.getAttribute('targetName') != null) {
	target.style.display = "none";
	}
	}
	}
	function init() {
	toggler = document.getElementById("madcapToggler");
	var togglerItems = toggler.getElementsByTagName('li');
	for (var i = 0; i < togglerItems.length; i++) {
	var iToggler = togglerItems[i];
	var target = iToggler.getAttribute('targets');
	if (target != null) {
	iToggler.targetElement = findTargetElement(target);
	togglerItems[i].onclick = toggleContent;
	}
	}
	hideAllTargets();
	}

window.onload = init;