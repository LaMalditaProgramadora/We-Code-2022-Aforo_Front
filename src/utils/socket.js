import io from 'socket.io-client';

const url = `${process.env.REACT_APP_AFORO_HEROKU}`;
console.log(url);

export default io(url);