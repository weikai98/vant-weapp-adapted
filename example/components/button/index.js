import { VantComponent } from "../common/components";
VantComponent({
    props: {
        type: {
            type: String,
            value: 'default'
        },
        icon: String,
        iconClass: String,
        size: String,
        plain: Boolean,
        round: Boolean,
        loading: Boolean,
        disabled: Boolean,
        autofocus: Boolean,
        circle: Boolean
    },
    data: {},
    mounted() {
    },
    methods: {
        onClick(event) {
            this.$emit('click', event);
        },
    }
});
