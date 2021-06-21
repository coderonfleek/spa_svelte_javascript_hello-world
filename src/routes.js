import {wrap} from 'svelte-spa-router/wrap';
import { auth0Client, isAuthenticated } from "./store";
import auth from "./authService";


import Home from './views/Home.svelte'
import Profile from './views/Profile.svelte'
import ExternalAPI from './views/ExternalAPI.svelte'

let authenticated;
let client;

isAuthenticated.subscribe(value =>  {
    console.log(value);
    authenticated = value;
})

auth0Client.subscribe(value =>  {
    console.log(value);
    client = value;
})

export default {
    '/': Home,
    '/profile' : Profile, /* wrap({
        component: Profile,
        conditions: [
            (detail) => {
                if(!authenticated){
                    auth.loginWithPopup(client);
                }
                return false;
            }
        ]
    }) */
    '/external-api': ExternalAPI
}
