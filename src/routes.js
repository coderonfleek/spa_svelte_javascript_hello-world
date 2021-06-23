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


export default {
    '/': Home,
    '/profile' : Profile,
    '/external-api': ExternalAPI
}

/* wrap({
    component: Profile,
    conditions: [
        (detail) => {
            
            return authenticated;
        }
    ]
}) */
