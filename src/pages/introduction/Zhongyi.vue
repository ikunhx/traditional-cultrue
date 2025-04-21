<template>
  <div class="container" ref="container">
    <div class="box1">
      <p>
        <span>
          &nbsp;&nbsp;中医
        </span>
        以阴阳五行作为理论基础，将人体看成是气、形、神的统一体，
        通过“望闻问切”四诊合参的方法，探求病因、病性、病位，分析病机及人体内五脏六腑、
        经络关节、气血津液的变化，判断邪正消长，进而得出病名，归纳出证型，以辨证论治原则，
        制定“汗、吐、下、和、温、清、补、消”等治法，使用中药、针灸、推拿、按摩、拔罐、气功、
        食疗等多种治疗手段，使人体达到阴阳调和而康复。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;中医学理论体系是经过长期的临床实践，
        在唯物论和辩证法思想指导下逐步形成的，
        它来源于实践，反过来又指导实践。通过对现象的分析，
        以探求其内在机理。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;因此，中医学这一独特的理论体系有两个基本特点
        ，一是整体观念，二是辨证论治。中医的基础理论是对人体生命活动和疾病变化规律的理论概括
        它主要包括阴阳、五行、气血津液、脏象、经络、运气等学说，以及病因、病机、诊法、辨证、
        治则治法、预防、养生等内容。
      </p>
    </div></div>

    
  </template>
  
  <script>
  export default {
    name: "Zhongyi",
    mounted(){
    const chatContainer = this.$refs.container;
          if (chatContainer) {
            chatContainer.scrollTop = 0;
          }
  }
  }
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: kaiTi;
  }
  
  .container {
    background-image: url("@/assets/image/Home/zy-bgp.jpg"); /* 确保路径正确 */
    background-size: cover;
    height: 90vh;
    line-height: 45px;
    background-position: center;
    padding-top: 100px;
  }
  
  .box1 span {
    font-size: 40px;
  }
  .box1 span:hover {
    color: brown;
  }
  
  .box1 p {
    font-size: 25px;
    transition:all 0.2s;
  }
  .box1 p:hover {
    font-size: 26px;
    color: brown;
  }
  
  .box1 {
    width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .sb {
    display: block;
    height: 800px;
  }
  </style>