import { address, middleSchool } from './address'
import { getIdCardAndAddress } from './people'
import sample from 'lodash.sample'

// 女生姓名
export const girlName = () => {
  // 常见的中文姓
  const firstName: string[] = [
    '王',
    '李',
    '张',
    '刘',
    '陈',
    '杨',
    '赵',
    '黄',
    '周',
    '吴',
    '徐',
    '孙',
    '胡',
    '朱',
    '高',
    '林',
    '何',
    '郭',
    '马',
    '罗',
    '梁',
    '宋',
    '郑',
    '谢',
    '韩',
    '唐',
    '冯',
    '于',
    '董',
    '萧',
    '程',
    '曹',
    '袁',
    '邓',
    '许',
    '傅',
    '沈',
    '曾',
    '彭',
    '吕',
    '苏',
    '卢',
    '蒋',
    '蔡',
    '贾',
    '丁',
    '魏',
    '薛',
    '叶',
    '阎',
    '余',
    '潘',
    '杜',
    '戴',
    '夏',
    '锺',
    '汪',
    '田',
    '任',
    '姜',
    '范',
    '方',
    '石',
    '姚',
    '谭',
    '廖',
    '邹',
    '熊',
    '金',
    '陆',
    '郝',
    '孔',
    '白',
    '崔',
    '康',
    '毛',
    '邱',
    '秦',
    '江',
    '史',
    '顾',
    '侯',
    '邵',
    '孟',
    '龙',
    '万',
    '段',
    '雷',
    '钱',
    '汤',
    '尹',
    '黎',
    '易',
    '常',
    '武',
    '乔',
    '贺',
    '赖',
    '龚',
    '文',
  ]
  // 女生常见名字
  const girlLastNames: string[] = [
    '子璇', '淼', '甜', '晨涛', '芳', '娜', '秀英', '敏', '静', '丽', '艳', '杰', '娟', '洋',
    '佳欣', '涵涵', '欣欣', '雨涵', '嘉怡', '佳怡', '佳惠', '晨茜', '晨璐', '欣宜', '欣怡',
    '美欣', '淑慧', '欣源', '亦菲', '冰洁', '禹辰', '淳美', '润丽', '淑华', '晶莹', '凌晶',
    '苒溪', '雅晗', '雅涵', '清妍', '诗悦', '嘉乐', '晨涵', '佳昊', '萌萌', '若萌', '萌',
    '昕蕊', '紫轩', '佳琪', '欣慧', '慧嘉', '冰枫', '宜豪', '建政',  '榕润',
    '欣汝', '新建', '建林', '林', '泽惠', '涵越', '翔', '伟洋',  '语晨',
    '添昊', '雨泽', '晶滢', '润莎', '榕汕', '佳钰', '佳玉', '晓庆', '天赫', '玥傲',
    '慧嘉', '新建', '建林', '亦菲', '冰洁', '佳欣', '涵涵', '禹辰', '淳美', '泽惠',
    '涵越', '润丽', '翔', '淑华', '晶莹', '凌晶', '苒溪', '雨涵', '嘉怡', '子辰',
    '佳琪', '紫轩', '瑞辰', '昕蕊', '萌', '明远', '欣宜', '泽远', '欣怡', '佳怡', '佳惠',
    '晨茜', '晨璐', '汝鑫', '淑君', '晶滢', '润莎', '榕汕', '佳钰', '佳玉', '晓庆',
    '语晨', '添池', '添昊', '雨泽', '雅晗', '雅涵', '清妍', '诗悦', '嘉乐', '晨涵', '天赫',
    '玥傲', '佳昊',  '萌萌', '若萌',
    // 新增女生名字
    '雅婷', '雅静', '雅琴', '雅萍', '雅琳', '雅洁', '雅妮', '雅彤', '雅淇', '雅涵',
    '雅馨', '雅萱', '雅诗', '雅涵', '雅晴', '雅琳', '雅琪', '雅婕', '雅蓉', '雅彤',
    '心怡', '心悦', '心琪', '心语', '心宜', '心莹', '心茹', '心雨', '心雅', '心怡',
    '思怡', '思雨', '思琪', '思雅', '思彤', '思颖', '思甜', '思美', '思洁', '思慧',
    '梦瑶', '梦洁', '梦琪', '梦露', '梦婷', '梦涵', '梦菲', '梦旋', '梦凝', '梦熙',
    '欣怡', '欣然', '欣悦', '欣怡', '欣蕾', '欣欣', '欣桐', '欣宜', '欣雅', '欣怡',
    '依琳', '依诺', '依柔', '依娜', '依菲', '依雯', '依涵', '依灵', '依晨', '依蕊',
    '诗涵', '诗雨', '诗雅', '诗琪', '诗婷', '诗蕾',
    '雨涵', '雨桐', '雨薇', '雨燕', '雨晴', '雨昕', '雨欣', '雨甜', '雨荷', '雨柔',
    '梓涵', '梓萱', '梓桐', '梓晴', '梓涵', '梓馨', '梓晨', '梓涵', '梓涵', '梓涵',
    '欣然', '欣怡', '欣悦', '欣欣', '欣宜', '欣雅', '欣怡', '欣怡', '欣怡', '欣怡',
    '婉儿', '婉如', '婉清', '婉柔', '婉兮', '婉静', '婉仪', '婉秀', '婉容', '婉嬿',
    '若溪', '若涵', '若琪', '若尘', '若风', '若水', '若雪', '若冰', '若谷', '若兰',
    '语嫣', '语彤', '语汐', '语蕾', '语晨', '语涵', '语诗', '语梦', '语柔', '语心',
    '灵儿', '灵韵', '灵慧', '灵秀', '灵松', '灵秋', '灵雁', '灵韵', '灵秀', '灵薇'
  ]
  // @ts-ignore
  return sample(firstName) + sample(girlLastNames)
}
const age = () => {
  return Math.floor(Math.random() * 11) + 15 // 15-25岁
}
const cups=[
  'A', 'A-', 'A+', 'B+', 'B', 'B-', 'C', 'C+','C-', 'D', 'D+','D-',
]

export const getonlineTime =() =>{

  // @ts-ignore
  const timePeriod = ['上午', '下午', '晚上']
  const morningOClock=['6点', '7点', '8点', '9点', '10点', '11点', '12点']
  const afternoonOClock=['6点', '7点', '8点',]
  const eveningOClock=['9点', '10点', '11点', '12点']
  const timeIntroduction = ['后','左右','以后']
  let RtimePeriod = sample(timePeriod)
  // @ts-ignore
  RtimePeriod === '上午' ? RtimePeriod = RtimePeriod + sample(morningOClock) + sample(timeIntroduction) : RtimePeriod === '下午' ? RtimePeriod = RtimePeriod + sample(afternoonOClock) + sample(timeIntroduction) : RtimePeriod = RtimePeriod + sample(eveningOClock) + sample(timeIntroduction)
  return RtimePeriod

}
// 女生姓名+地址+中学
export const girlWithAddressAndSchool = () => {
  return `${girlName()} ${address()} ${middleSchool()}`
}
//下体颜色
export const getlowerBodyColor = () => {
  const lowerBodyColor = ['浅粉', '白色',]
  return sample(lowerBodyColor)
}

export const onWhatOccasionSex = () => {
  const situation = ['公园','学校教室','楼梯间','公共厕所男厕所']
  return sample(situation)
}

export const haveYouEverMasturbated=()=> {
  const situation = ['有','当然']
  return sample(situation)
}

export const masturbationFrequency=()=>{
  const situation = ['每天至少五次',' 每周至少五次']
  return sample(situation)
}

export const masturbationTool=() =>{
  const situation = ['手','按摩棒','阳具','跳蛋','中性笔','记号笔','刷子的把']
  return sample(situation)
}

export const howLongAgoWasTheLastZw=() =>{
  const timePeriod = ['刚刚', '几分钟前', '1小时前', '2个小时前']
  return sample(timePeriod)
}

export const agelosevirginityandwhere= ()=>{
  const age = ['6岁破处','7岁破处','8岁破处','9岁破处']
  const place = ['舞蹈学校','学跳舞的辅导班']
  return `${sample(age)}在${sample(place)}`
}

export const whatDoYouLikeToBeCalled=()=>{
  const callName = ['小骚逼','小母狗','小骚逼','小母狗','小骚逼','小母狗','小骚逼','小母狗','骚逼母狗','骚逼母狗','骚逼母狗']
  return sample(callName)
}

export const Posture = ()=>{
  const pose = ['后入','男上女下','女上男下']
  return sample(pose)
}

export const HoleForSex =()=>{
  const hole = ['小穴','小穴','小穴','小穴','小穴','小穴','小穴','嘴巴','嘴巴','嘴巴','嘴巴','嘴巴','屁眼','屁眼','屁眼','屁眼','屁眼','屁眼','屁眼','屁眼','屁眼','屁眼']
  return sample(hole)
}


//MG信息
export const mgFullInfo = () => {
  // return {
  //   name: girlName(),
  //   address: address(),
  //   school: middleSchool(),
  //   cups: sample(cups),
  //   onlineTime: getonlineTime(),
  //   lowerBodyColor: getlowerBodyColor(),
  // }
  const idCardInfo = getIdCardAndAddress()
  return `
姓名：${girlName()} 
年龄：${idCardInfo.age}
身份证号：${idCardInfo.idCard}
地址： ${idCardInfo.address} 
学校： ${middleSchool()} 
罩杯： ${sample(cups)} 
在线时间：${getonlineTime()} 
下体颜色：${getlowerBodyColor()}
在什么场合做爱：${onWhatOccasionSex()}
有自慰吗：${haveYouEverMasturbated()}
自慰频率：${masturbationFrequency()}
多长时间之前自慰：${howLongAgoWasTheLastZw()}
几岁破处 在哪？：${agelosevirginityandwhere()}
喜欢被叫做什么：${whatDoYouLikeToBeCalled()}
做爱姿势是什么：${Posture()}
最喜欢被操那个洞：${HoleForSex()}
----------------------------------------------------------------------------
`
}

