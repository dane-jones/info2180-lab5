window.onload=function(){
	let search = document.getElementById("lookup");
	search.addEventListener('click', function(e){
		e.preventDefault();
		let country = document.getElementById("country").value;
		let h_req = new XMLHttpRequest();


		h_req.onreadystatechange = function() {
			if (h_req.readyState == XMLHttpRequest.DONE) {
				if (h_req.status == 200){	
					let r = h_req.responseText;
					let result = document.getElementById('result');
					result.innerHTML = r;
				}else{
					alert("Error!");
				}
			}
		}
		console.log(country);
		h_req.open('GET', 'http://localhost/info2180-lab5/world.php?country='+country, true);
		h_req.send();
	});
}