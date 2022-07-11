// const urlBase = 'http://localhost:5000';
// const getFriends = () => {
//     const lista = $('#lista');
//     // $('#loadingImg').css('display', 'none');
//     $('#loadingImg').hide();
//     lista.css('distplay', 'none');
//     $.get(`${urlBase}/amigos`, function(data) {
//         const lista = $('#lista');
//         lista.css('distplay', 'block');
//         lista.empty();
//         for (let i = 0; i < data.length; i++) {
//             const { name } = data[i];
//             lista.append(`<li>
//             ${ name }
//             </li>`)
//         }
//     });
// }

// const deleteFriend = (id, input) => {
//     $.ajax({
//         url: `${urlBase}/amigos/${input.val(id)}`,
//         type: 'DELETE',
//         success: function(data) {
//             if (input) {
//                 input.val('')
//                 input.focus()
//             }
//             getFriends()
//         }
//     })
// }

// $('#boton').click(getFriends);

// $('#search').click(() => {
//     const input = $('#input');
//     $.get(`${urlBase}/amigos/${input.val()}`, function(data) {
//         $('#amigo').text(data.name);
//         input.val('');
//         input.focus();
//     });
// })



// $('#delete').click(() => {
//     const input = $('#inputDelete');
//     deleteFriend(input)

// });


const urlBase = "http://localhost:5000"
const deleteFriend = (id, input) => {
    $.ajax({
        url: `${urlBase}/amigos/${id}`,
        type: "DELETE",
        success: function(data) {
            if (input) {
                input.val("")
                input.focus()
            }
            getFriends()
        }
    })
}
const getFriends = () => {
    const lista = $("#lista")
    $("#loadingImg").css("display", "block")
    lista.css("display", "none")
    $.get(`${urlBase}/amigos`, function(data) {
        $("#loadingImg").css("display", "none")
        lista.css("display", "block")
        lista.empty()
        for (let i = 0; i < data.length; i++) {
            const { name, id } = data[i]
            lista.append(`<li>
        <span>
        ${name}</span>
        <button onclick=deleteFriend(${id})>X</button>
        </li>`)
        }
    })
}
$("#boton").click(getFriends)

$("#search").click(() => {
    const input = $("#input")
    $.get(`${urlBase}/amigos/${input.val()}`, function(data) {
        $("#amigo").text(data.name)
        input.val("")
        input.focus()
    })
})

$("#delete").click(() => {
    const input = $("#inputDelete")
    deleteFriend(input.val(), input)
})


const postFriend = () => {
    const inputName = $("#inputPostName")
    const inputEmail = $("#inputPostEmail")
    const inputAge = $("#inputPostAge")
    $.ajax({
        url: `${urlBase}/amigos`,
        type: "POST",
        data: JSON.stringify({
            name: inputName.val(),
            email: inputEmail.val(),
            age: inputAge.val(),
        }),
        contentType: "application/json",
        success: getFriends
    })
}
$("#post").click(postFriend)