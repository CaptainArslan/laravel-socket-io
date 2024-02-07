const URL = 'http://127.0.0.1:8080/';
let socket = io(URL);
// let socket = io('http://test.local:3000', {
//     withCredentials: true,
//     extraHeaders: {
//         'my-custom-header': 'abcd'
//     }
// });
var userId = $('#user-id').val();
alert(userId);
console.log('socket', socket, userId);

socket.on
    (
        'chat_' + userId,
        function (data) {
            console.log(data);
        }
    );
