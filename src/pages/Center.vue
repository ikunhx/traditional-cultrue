<template>
    <div class="container">
        <img src="@/assets/image/Home/fanhui.png" class="back" @click="changePage('home')">
        <div class="box">
            <div class="left">
                <div class="left-son">
                    <div class="avatar-yes" v-if="!isEdit">
                        <img :src="avatarImageUrl" alt="">
                    </div>
                    <div class="avatar-edit" v-if="isEdit" @click="showFileInput">
                        <i class="el-icon-plus"></i>
                        <img :src="avatarImageUrl" alt="" v-if="avatarImageUrl" @click.stop>
                        <div class="deleteImg" :class="avatarImageUrl === '' ? '' : 'deleteImg-active'">
                            <i class="el-icon-delete"></i>
                        </div>
                    </div>
                    <input type="file" accept="image/*" @change="handleFileUpload" ref="fileInput"
                        style="display: none" />

                </div>
                <div class="left-son">
                    <div class="motto">
                        <p v-if="!isEdit">{{ motto }}</p>
                        <input v-if="isEdit" v-model="motto" />
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="name">
                    <p>昵称：<span v-if="!isEdit">{{ name }}</span><input v-if="isEdit" v-model="name" /></p>
                </div>
                <div class="age">
                    <p>年龄：<span v-if="!isEdit">{{ age }}</span><input v-if="isEdit" v-model="age" /></p>
                </div>
                <div class="hobby">
                    <p>爱好：<span v-if="!isEdit">{{ hobbit }}</span><input v-if="isEdit" v-model="hobbit" /></p>
                </div>
                <div class="phone">
                    <p>联系方式：<span v-if="!isEdit">{{ phone }}</span><input v-if="isEdit" v-model="phone" /></p>
                </div>
            </div>
            <div class="edit" @click="isEdit = !isEdit">
                <i class="el-icon-edit" v-if="!isEdit"></i>
                <i class="el-icon-check" v-if="isEdit" @click="confirmChange"></i>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Center",
    data() {
        return {
            isEdit: false,
            name: '',
            age: '',
            hobbit: '',
            phone: '',
            motto: '',
            avatarImageUrl: '',
            dialogVisible: false,
            selectedFile: null, // 用于存储用户选择的文件
        }
    },
    created() {
        // 在组件创建时手动赋值
        this.name = this.$store.state.name;
        this.age = this.$store.state.age;
        this.hobbit = this.$store.state.hobbit;
        this.phone = this.$store.state.phone;
        this.motto = this.$store.state.motto;
        this.avatarImageUrl = this.$store.state.avatarImageUrl;
    },
    methods: {

        showFileInput() {
            if (this.avatarImageUrl === '') {
                this.$refs.fileInput.click();
            } else {
                this.avatarImageUrl = ''
                this.$refs.fileInput.click();
            }

        },
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
            this.avatarImageUrl = URL.createObjectURL(this.selectedFile);
            if (this.selectedFile) {
                const reader = new FileReader();
                // 读取文件作为 data URL
                reader.readAsDataURL(this.selectedFile);
            }
            console.log(this.avatarImageUrl);

        },
        confirmChange() {
           const formData = new FormData()
           formData.append('file',this.selectedFile)

            axios.post(`${this.$baseUrl}auth/upLoad`, formData, {
                headers: {
                    'token': `${this.$store.state.token}`,
                     'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                const User = {
                    name: this.name,
                    avtar: response.data.data,
                    age: this.age,
                    hobbit: this.hobbit,
                    phone: this.phone,
                    motto: this.motto

                }
                axios.post(`${this.$baseUrl}auth/edit`, User, {
                    headers: {
                        token: `${this.$store.state.token}`,
                    }
                }).then((res) => {
                    this.$store.dispatch("setName", res.data.data.name);
                    this.$store.dispatch("setAge", res.data.data.age);
                    this.$store.dispatch("setHobbit", res.data.data.hobbit);
                    this.$store.dispatch("setPhone", res.data.data.phone);
                    this.$store.dispatch("setMotto", res.data.data.motto);
                    this.$store.dispatch("setAvatarImageUrl", res.data.data.avtar);
                }).catch((err) => {
                    this.$message.error(err.message)
                })
            }).catch((error) => {
                this.$message.error(error.message)
            })

            // axios.post{

            // }
        },
        changePage(name) {
            this.$bus.$emit("c-" + name, name);
        },
    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #baccd9;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("@/assets/image/Home/02bck.png");

    .back {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 30px;
        left: 30px;
        cursor: pointer;
    }

    .box {
        width: 65vw;
        height: 65vh;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        display: flex;
        position: relative;

        input {
            height: 4vh;
            width: 20vw;
            border: none;
            outline: none;
            border-radius: 10px;
            padding: 8px;
            font-size: 18px;
            background-color: #c1d2dd;
            color: #fff;
            font-weight: 700;
            font-family: kaiti;
        }

        .left {
            width: 28vw;
            height: 65vh;

            .left-son {
                width: 28vw;
                height: 32.5vh;
                display: flex;
                justify-content: center;
                align-items: center;

                .avatar-yes {
                    width: 13vw;
                    height: 13vw;
                    border: 10px solid #8fb2c9;
                    border-radius: 100%;
                    margin-top: 10vh;

                    // margin-left: -5vw;
                    img {
                        width: 13vw;
                        height: 13vw;
                        border-radius: 100%;
                    }
                }

                .motto {
                    margin-right: -5vw;

                    p {
                        width: 80%;
                        margin: auto;
                        display: block;
                        font-size: 50px;
                        color: #fff;
                        font-family: xingshu;
                    }
                }

                .avatar-edit {
                    width: 200px;
                    height: 200px;
                    border-radius: 15px;
                    border: 1.5px dashed #8fb2c9;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    cursor: pointer;

                    i {
                        display: block;
                        font-size: 30px;
                        font-weight: 700;
                        color: #8fb2c9;
                    }

                    img {
                        position: absolute;
                        border-radius: 15px;
                        width: 200px;
                        height: 200px;
                        z-index: 3;
                    }

                    .deleteImg {
                        position: absolute;
                        border-radius: 15px;
                        width: 200px;
                        height: 200px;
                        z-index: 4;
                        opacity: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: 0.3s;

                        i {
                            display: block;
                            font-size: 30px;
                            font-weight: 700;
                            color: #fff;
                        }
                    }

                    .deleteImg-active {
                        background-color: rgb(0, 0, 0);
                        opacity: 0;
                    }

                    .deleteImg-active:hover {
                        opacity: 0.5;
                    }

                }
            }

        }

        .right {
            width: 37vw;
            height: 65vh;

            div {
                height: 15vh;
                width: 30vw;
                margin-left: 5vw;
                display: flex;
                justify-content: center;
                align-items: center;

                p {
                    display: block;
                    font-size: 30px;
                    font-family: kaiti;
                    color: #fff;
                    font-weight: 700;

                }
            }
        }

        .edit {
            // background-color: aquamarine;
            position: absolute;
            bottom: 3vh;
            right: 3vw;
            cursor: pointer;

            i {
                color: #fff;
                font-size: 45px;
                transition: 0.5s;
            }

            i:hover {
                font-size: 48px;
                color: #8fb2c9;
            }

        }
    }

}
</style>