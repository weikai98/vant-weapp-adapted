import { VantComponent } from "../common/components";
VantComponent({
    props: {
        type: {
            type: String,
            value: 'default'
        },
        plain: {
            type: Boolean,
            value: false
        },
        round: {
            type: Boolean,
            value: false
        }
    },
    data: {
        name: 213
    },
    mounted() {
        console.log(12145);
    },
    methods: {
        sayHello() { },
        onClick(event) {
            this.$emit('click', event);
            const { canIUseGetUserProfile, openType, getUserProfileDesc, lang, } = this.data;
            if (openType === 'getUserInfo' && canIUseGetUserProfile) {
                wx.getUserProfile({
                    desc: getUserProfileDesc || '  ',
                    lang: lang || 'en',
                    complete: (userProfile) => {
                        this.$emit('getuserinfo', userProfile);
                    },
                });
            }
        },
    }
});
