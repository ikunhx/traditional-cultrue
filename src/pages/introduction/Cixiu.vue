<template>
  <div class="container" ref="container">
    <div class="box1">
      <p>
        <span>
          &nbsp;&nbsp;刺绣
        </span>
        又名“针绣”，俗称“绣花”。以绣针引彩线（丝、绒、线），按设计的花样，
        在织物（丝绸、布帛）上刺缀运针，以绣迹构成纹样或文字，是我国优秀的民族传统工艺之一。
        古代称“黹”、“针黹”。后因刺绣多为妇女所作，故又名“女红”。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;刺绣，起源于人们对装饰自身的需要。
        史传黄帝时代就有彩绘花纹的记载。也就是说古代原始人类早懂得用色彩来美化自己。
        开始时将颜色涂在身上，“称彰身”；再进一步刺在身上，称“文身”；后来就画在衣服上，再发展成绣在服装上。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;在所有的绣花中，又以四大名绣为经典，四大名绣形成于十九世纪中叶，
        它的产生除了本身的艺术特点外，另一个重要原因就是绣品商业化的结果。
        由于市场需求和刺绣产地的不同，刺绣工艺品作为一种商品开始形成了各自的地方特色，
        其中苏、蜀、粤、湘四个地方的产品销路尤广，故有"四大名绣"之称。
      </p>
    </div>
  </div>
   
  </template>
  
  <script>
  export default {
    name: "Cixiu",
    beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不能获取组件实例 `this` - 因为当守卫执行时，组件实例还没被创建
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log('From path:', from.path);
    });
  },
  created() {
    console.log('From path in created hook:', this.$route.from);
  },
  mounted() {
  this.$nextTick(() => {
    const chatContainer = this.$refs.container;
    if (chatContainer) {
      chatContainer.scrollTop = 0;
      console.log(chatContainer.scrollTop);
      
    }
  });
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
    background-image: url("@/assets/image/Home/cx-bgp.jpg");
    background-size: cover;
    height: 100vh;
    line-height: 50px;
    background-position: top;
    padding-top: 150px;
  }
  
  .box1 span {
    font-size: 50px;
  }
  .box1 span:hover {
    color: brown;
  }
  
  .box1 p {
    font-size: 30px;
    transition:all 0.2s;
    color: rgba(219, 221, 120, 0.9);
  }
  .box1 p:hover {
    font-size: 31px;

    color:rgb(7, 244, 106);
  }
  
  .box1 {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  </style>