import io from 'socket.io-client';

const url = `${process.env.REACT_APP_AFORO_HEROKU}`;
console.log(url);

const socket = io(url);

export default socket;