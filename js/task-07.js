const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text:document.querySelector('#text')
}

refs.fontSizeControl.addEventListener('change', onFontSizeControlChange)

function onFontSizeControlChange(evt){
    let myTarget = evt.currentTarget;
    console.log("myTarget.value", myTarget.value)
    console.dir(refs.text)
    refs.text.style.fontSize=`${myTarget.value}px`;
}