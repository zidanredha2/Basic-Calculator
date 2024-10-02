const input = document.getElementById("input");

const AppendToInput = (entry) => {
    input.value += entry;
}
function Calculate(){
    try {
        input.value = eval(input.value)
    }catch(error){
        input.value = "Error"
    }
}
function Clear() {
    input.value = ""
}

onkeydown = event => {
    switch (event.key) {
        case "Enter":
            Calculate()
            return
        case "Backspace":
            Clear();
            return
        default:
            const key = document.getElementById(`${event.key}`)
            key.classList.toggle("key-pressed")
            AppendToInput(`${event.key}`)
    }
    
}

onkeyup = event => {
    const key = document.getElementById(`${event.key}`)
    key.classList.toggle("key-pressed")
}