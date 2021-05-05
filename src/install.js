import Bus, { ACTIONS } from './eventbus.js';
import Snackbar from './components/Snackbar';

const ButlerSnackbar = {
    install(Vue, options) {
        Vue.component('b-snackbar', Snackbar);

        Vue.prototype.$openSnackbar = data => {
            Bus.$emit(ACTIONS.OPEN_SNACKBAR, data);
        };

        Vue.mixin({
            created(){
                console.log('Butler snackbar loaded.');
            }
        });
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ButlerSnackbar);
}

export default ButlerSnackbar;