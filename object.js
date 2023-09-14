const input = document.querySelector("input")
    const body = document.querySelector("body")
    const ColorInput = document.querySelector('#getcolor')
    console.log(input)
    function getvalue(){
      const colors = ColorInput.value
      const value = input.value
      body.style.background = value
      console.log(value)
    }
    function getvalueColor(){
      const inputColor = ColorInput.value
      body.style.background = inputColor
   
    }