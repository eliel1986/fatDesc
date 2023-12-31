const form = document.querySelector("#form");
const dens_orig = document.querySelector("#dens_orig");
const dens_dest = document.querySelector("#dens_dest");
const peso_orig = document.querySelector("#peso_orig");
const peso_dest = document.querySelector("#peso_dest");
const vol_dren = document.querySelector("#vol_dren");
const vol_vinte_ori = document.querySelector("#vol_vinte_origem");

const calcular = () => {

	document.getElementById("formulario_principal").style.display = "none";
	document.getElementById("resposta").style.display = "block";

	const densOrig = document.getElementById('dens_orig').value;
	const densDest = document.getElementById('dens_dest').value;
	const pesoOrig = document.getElementById('peso_orig').value;
	const pesoDest = document.getElementById('peso_dest').value;
	const volDren = document.getElementById('vol_dren').value;
	const volVinteOrig = document.getElementById('vol_vinte_origem').value;

	document.getElementById('vol_vint_orig').value = `${volVinteOrig} litros`;

	const pesoDest_densDest = (pesoDest / densDest).toFixed(0);
	document.getElementById('pDest_dDest').value = `${pesoDest_densDest} litros`;

	const pesoDest_densOrig = (pesoDest / densOrig).toFixed(0);
	document.getElementById('pDest_dOrig').value = `${pesoDest_densOrig} litros`;

	const dif_Dens = (pesoDest_densDest - pesoDest_densOrig).toFixed(0);
	if (dif_Dens < 0) {
		document.getElementById('dif_Dens').style.color = 'red';
	}
	else {
		document.getElementById('dif_Dens').style.color = 'green';
	}
	document.getElementById('dif_Dens').value = `${dif_Dens} litros`;

	const difPesos = (pesoDest - pesoOrig).toFixed(0);
	document.getElementById('pDest_pOrig').value = `${difPesos} Kilos`;
	if (difPesos < 0) {
		document.getElementById('pDest_pOrig').style.color = 'red';
	}
	else {
		document.getElementById('pDest_pOrig').style.color = 'green';
	}

	const difPesosdensDest = (difPesos / densDest).toFixed(0);
	document.getElementById('dif_Peso').value = `${difPesosdensDest} litros`;
	if (difPesosdensDest < 0) {
		document.getElementById('dif_Peso').style.color = 'red';
	}
	else {
		document.getElementById('dif_Peso').style.color = 'green';
	}

	const apurado = Number(dif_Dens) + Number(difPesosdensDest) + Number(volDren);
	document.getElementById('result').value = `${apurado} litros`;
	if (apurado < 0) {
		document.getElementById('result').style.color = 'red';
	}
	else {
		document.getElementById('result').style.color = 'green';
	}

	const valid = ((dif_Dens / volVinteOrig) * 100).toFixed(2);
	if (valid >= -0.4 && valid <= 0.4) {
		document.getElementById("inform").style.backgroundColor = "green";
		document.getElementById("inform").value = "LIBERADO";
	} else {
		document.getElementById("inform").style.backgroundColor = "red";
		document.getElementById("inform").value = "CONTRA PROVA";
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const densOrig = dens_orig.value;
	const densDest = dens_dest.value;
	const pesoOrig = peso_orig.value;
	const pesoDest = peso_dest.value;

	if (densOrig && densDest && pesoOrig && pesoDest) {
		calcular();
	}
});