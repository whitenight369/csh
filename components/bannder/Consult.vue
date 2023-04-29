<template>
    <div class="consultWrap">
        <div class="content">
            <el-row :gutter="20">
                <el-col :span="24" class="titleCenter">
                    <div class="title">
                        免费咨询
                    </div>
                    <div class="wire"></div>
                </el-col>
            </el-row>

            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm" :label-position="labelPosition">
                <el-row :gutter="20">
                    <el-col :span="8" :offset="4"  >
                        <el-form-item label="姓名：" prop="name" for="name" class="formLeft" >
                            <el-input v-model="ruleForm.name" id="name"  class="formInput"  style="color: #CDCDCD ;"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" >
                        <el-form-item label="电话：" prop="phone" for="phone" class="formRight" >
                            <el-input v-model="ruleForm.name" id="phone"  style="color: #CDCDCD ;"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8" :offset="4" >
                        <el-form-item label="微信："  for="WeChat" class="formLeft" >
                            <el-input v-model="ruleForm.name" id="WeChat"  class="formInput"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" >
                        <el-form-item label="咨询类型：" for="type" class="formRight" >
                            <el-input v-model="ruleForm.name" id="type"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="16" :offset="4" >
                        <el-input type="textarea" v-model="form.desc" placeholder="咨询类型：" style="color: #CDCDCD ;" class="formTextarea"></el-input>
                    </el-col>
                </el-row>
                



            </el-form>



            <el-col :span="8" :offset="4">
                <div class="grid-content bg-purple">
                    姓名
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    电话
                </div>
            </el-col>
            <!-- </el-row> -->
            <el-row :gutter="20">
                <el-col :span="8" :offset="4">
                    <div class="grid-content bg-purple">
                        微信：
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        咨询类型：
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="16" :offset="4">
                    <div class="grid-content bg-purple">
                        案件详情
                    </div>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="16" :offset="4">
                    <div class="grid-content bg-purple">
                        提交
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script >
export default {
    name: "Consult",
    data() {
        return {
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
            },
            form: {
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请选择活动区域', trigger: 'blur' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            },
            labelPosition: 'left',
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}


</script>



<style scoped lang="less">
body,
html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
}

.consultWrap {
    display: flex;
    justify-content: center;
    background-image: url(./../../static/images/Consult/liuyan.png);
    // background-color: pink;
    background-size: cover;
    padding-bottom: 156px;

    .content {
        width: 1420px;
        background-color: #99f;

        .titleCenter {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .title {
            font-size: 2.8rem;
            margin-bottom: 1rem;
            font-weight: 600;
            // text-align: center;
        }

        .wire {
            width: 4rem;
            height: 0.2rem;
            background-color: #B79A62;
            // text-align: center;
        }
        .formLeft,.formRight{
            background-color: skyblue;
            padding-left: 25px;

            .formInput{
                border:none;
                outline:none;
                
            }
            // 暂未生效
            .el-input__inner:focus {
                border:none;
                outline:none;
                border-color: transparent;
            }
            .el-form-item.is-error .el-input__inner{
                border-color: transparent;
            }
// 
.demo-ruleForm{
    padding-left: 5px;
}

        }
    }
}
.formTextarea{
    resize: none;
}


.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>