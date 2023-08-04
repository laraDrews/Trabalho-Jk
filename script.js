function exempoWhile() {
    let num = Number(document.getElementById("entrada").value)
    let i = 0;
    while (i < num) {
        alert(i);
        i++;
    }

}
function exempoFor() {
    let num = Number(document.getElementById("entrada").value)
    for (let i = 0; i < num; i++) {
        alert(i);
    }
}

function primosWhile() {
    let num = Number(document.getElementById("entrada").value);
    let qnt = 0;
    let i = 1;
    while (i <= num) {
        let divisor = 0;
        let c = 1;
        while (c <= i) {
            if (i % c == 0) {
                divisor++;
            }
            c++;
        }
        if (divisor == 2) {
            qnt++;
        }
        i++;
    }
    alert(qnt);
}

function primosFor() {
    let num = Number(document.getElementById("entrada").value);
    let qnt = 0;
    for (let i = 1; i <= num; i++) {
        let divisor = 0
        for (c = 1; c <= i; c++) {
            if (i % c == 0) {
                divisor++;
            }
        }
        if (divisor == 2) {
            qnt++;
        }
    }
    alert(qnt)
}