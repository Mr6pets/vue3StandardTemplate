import _ from 'lodash';
export function  parseEnv(env:Recode<string,string>){
    const envs = _.cloneDeep(env);
    Object.entries(envs).forEach(([key,value])=>{
        if(value=='true' || value=='false'){
            envs[key]= value == 'true' ? true : false;
        }
        /**
         * 正则表达式/^\d+$/用于匹配只包含一个或多个数字的字符串，如1、123等，而不会匹配包含非数字字符的字符串，如abc、12a等
         * */
        if(/^\d+$/.test(value)){
            envs[key]=parseInt(value);
        }

    })
    return envs;
}










