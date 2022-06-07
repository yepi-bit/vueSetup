<template>
    <div>
        <div class="popUp" @mouseenter="enter" @mouseleave="leave">
            <a-skeleton avatar :loading="loading">
                <a>
                    <img v-show="noSeen" width="100" height="100" src="https://source.unsplash.com/random?girls"
                         alt=""/>
                </a>
                <a v-show="seen">
                    <img width="180" height="180" src="https://source.unsplash.com/random?girls" alt=""/>
                </a>
            </a-skeleton>
        </div>
    </div>
</template>

<script>
    import {ref} from "vue";

    export default {
        name: "MouseChange",
        data() {
            return {
                seen: false,
                noSeen: true,
                loading: true
            }
        },
        mounted() {
            setTimeout(() => {
                this.loading = false
            }, 1000)
        },
        methods: {
            enter() {
                this.seen = true;
                this.noSeen = false
            },
            leave() {
                this.seen = false;
                this.noSeen = true
            }

        }
    }
</script>

<style scoped>
    .popUp {
        margin: 36px auto;
        transition: all .2s ease-out;
        transform-origin: top center;
    }

    img {
        /* 图片自适应*/
        object-fit: cover;
        border-radius: 50%;
    }
</style>
