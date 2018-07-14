imgEdit.onchange = function (e) {
    let formDate = new FormData()
    formDate.append('xxx',
        e.target.files[0])
    $.ajax({
        url:'yyy',
        data:formDate,
        processData:false,
        contentType:false,
        type:'POST',
    })
    e.target.value=''
}