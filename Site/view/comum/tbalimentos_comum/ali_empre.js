const msg = document.querySelector("#mensagem");
const xhr = new XMLHttpRequest();
const tableCadas = document.querySelector("#tbempre");
const urlCadas = "http://localhost/front/src/controll/routes/";
const urlAli = "http://localhost/front/src/controll/routes/route.tbalimentos.php";

function carregarAliEmpre() {
    fetch(urlCadas + "route.tbcadastro.php?id_ca=" + localStorage.getItem("linksite"))
        .then(function (resp) {
            if (!resp.ok)
                throw new Error("Erro ao executar requisição: " + resp.status);
            return resp.json();
        })
        .then(function (data) {
            data.forEach((val) => {
                let row = document.createElement("div");
                localStorage.setItem("id", val.id_ca);
                row.innerHTML = `<div><center><img src="../resources/icons/logo.png" width="86"><center><a href='./comum/tbalimentos_comum/alimentos_empre.html?id=${val.id_ca}'>${val.linksite}</a><div><br>`;
                if (val.linksite != null) {
                    tableCadas.appendChild(row);
                }
            });
        })
        .catch(function (error) {
            console.error(error.message);
        });
}
