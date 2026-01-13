import { girlWithAddressAndSchool, mgFullInfo, girlName } from './modules/combination'

// 这里存放所有对外暴露的内置变量，key是变量使用词汇
export default {


  母狗全信息: {
    fun: mgFullInfo,
    example: mgFullInfo(),
    explain: '随机返回母狗的完整信息',
  },

} as SystemVariablesObject