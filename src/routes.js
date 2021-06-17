import Home from './views/Home.svelte'
import Profile from './views/Profile.svelte'
import ExternalAPI from './views/ExternalAPI.svelte'


export default {
    '/': Home,
    '/profile' : Profile,
    '/externalapi': ExternalAPI
}
