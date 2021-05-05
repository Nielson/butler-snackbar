<template>
<Transition name="slide-fade">
    <div v-if="message" style="min-width: 350px" class="bg-darker shadow-lg z-10 border border-dark rounded px-8 py-4 inline-block absolute bottom-4 right-4">
        <div class="flex items-center space-x-4">
            <div>
                <h2 class="font-medium text-white  text-sm  mb-0.5" v-if="title">
                    {{ title }}
                </h2>
                <p class="text-grey text-sm font-medium">
                    {{ message }}
                </p>
            </div>
            <div class="flex items-start absolute top-4 right-4" @click="close">
                <!-- ICON TIMES FOR CLOSING -->
            </div>
        </div>
    </div>
</Transition>
</template>

<script>
import Bus, { ACTIONS } from '../eventbus';

export default {
    data(){
        return {
            timeout: 5000,
            title: null,
            message: null
        }
    },

    methods: {
        clear(){
            this.title = null;
            this.message = null;
            this.timeout = 8000;
        },
        close(){
            this.clear();
        },
    },

    mounted(){
        let timer;

        Bus.$on(ACTIONS.OPEN_SNACKBAR, (data) => {
            clearTimeout(timer);

            this.title = data.title;
            this.message = data.message;

            timer = setTimeout(function(){
                this.close();
            }.bind(this), this.timeout);
        });
    }
}
</script>

<style scoped lang="css" src="../css/slide-fade.css" />