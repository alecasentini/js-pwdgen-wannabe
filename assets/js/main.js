
function myFunction() {
    const nome = prompt ("Qual è il tuo nome?","Mario")

    const cognome = prompt ("Qual è il tuo cognome?","Rossi")

    const colore = prompt ("Qual è il tuo colore preferito?","blu")

    const pwd = nome+cognome+colore+21

    const text = "La nostra equipe di esperti ti consiglia la seguente password ottimizzata per la tua sicurezza:"

    document.getElementById("text").innerHTML = text;
    document.getElementById("pwd").innerHTML = pwd;

}