import axios from 'axios';

export default axios.create({
    baseURL:'https://api.thingspeak.com/channels/1765663/fields/1.json?results=1'
}
);