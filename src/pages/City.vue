<!-- <template>
    <div class="container">
        <div class="content-wrapper">
            <div class="left">
                <div class="thinking" v-html="compiledMarkdown"></div>
                <div v-html="compiledMarkdown"></div>
            </div>
            <div class="right">
                <div class="gallery">
                    <div class="gallery-item" v-for="(img, index) in imgs" :key="index">
                        <img :src="img" :alt="'Gallery image ' + (index + 1)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
    name: "City",
    data() {
        return {
            city: '',
            markdownContent: `### 宜春市传统文化遗产系统解读

#### **一、禅宗文化：中国佛教的重要发源地**
- **历史渊源**：宜春是禅宗"一花五叶"中临济宗、沩仰宗、曹洞宗的发祥地。唐代高僧马祖道一在靖安宝峰寺弘法，其弟子百丈怀海创立《百丈清规》，奠定禅宗丛林制度（据《景德传灯录》）。
- **核心特色**：
- "农禅并重"的实践哲学（僧侣自耕自食）
- 现存唐代至明清时期禅寺建筑群，如奉新百丈寺（全国重点寺院）
- **现存状态**：
- 宝峰寺、百丈寺等持续开展禅修活动
- 宜春禅都文化博览园为国家级文化产业示范基地
- **现代价值**：禅宗思想对现代心理疗愈、企业管理有启示意义
- **体验建议**：
- 农历四月初八佛诞日参与宝峰寺浴佛法会
- 禅博园夜间实景演出《禅境宜春》

#### **二、万载傩舞：活着的远古图腾**
- **历史渊源**：可追溯至商周时期，清代《万载县志》载"岁首戴面逐疫"，现存明清傩面120余件。
- **核心特色**：
- "开口傩"独特性（其他地区傩舞多默剧式表演）
- 24套原始傩戏如《关王下书》保留宋元戏曲特征
- **现存状态**：
- 2006年列为首批国家级非遗
- 潭埠镇池溪村仍有世代传承的傩班
- **现代价值**：人类学视角下的原始宗教活标本
- **体验建议**：
- 正月初二至十五在株潭、潭埠等乡镇巡演
- 万载古城景区常态化展演简化版傩舞

#### **三、樟树中药文化：千年药都的智慧结晶**
- **历史渊源**：东汉葛玄在阁皂山采药炼丹，明代形成"樟树药帮"（全国三大药帮之一），清道光年间《樟树镇志》载"药不到樟树不齐"。
- **核心特色**：
- "樟帮"独特的饮片炮制技艺（如四炒、九蒸等107种技法）
- 现存明代至民国时期药码头、药栈遗址群
- **现存状态**：
- 樟树药俗、中药炮制技艺均为国家级非遗
- 每年10月举办国际药材交易会
- **现代价值**：传统炮制技术对中药现代化有参考价值
- **体验建议**：
- 参观中国药都中医药博物馆（馆藏清代药戥秤等文物300余件）
- 参与"樟帮"传统学徒制的体验课程

#### **四、宜春版画：刀尖上的民俗史诗**
- **历史渊源**：明代万历年间已有记载，1985年文化部命名"宜春版画之乡"。
- **核心特色**：
- 黑白木刻技法表现赣西农耕生活
- 独创"油印套色"工艺（区别于天津杨柳青年画）
- **现存状态**：
- 现存老艺人平均年龄超65岁，面临传承断层
- 宜春学院开设非遗传承人研修班
- **现代价值**：民间美术研究的重要样本
- **体验建议**：
- 宜春市美术馆常设版画展区
- 温汤镇有DIY版画体验工坊

#### **五、丰城岳家狮：武术与舞蹈的融合**
- **历史渊源**：相传为南宋岳飞部队所创，清同治《丰城县志》载"尚武之风尤盛"。
- **核心特色**：
- "武狮"表演含32套拳术动作
- 特制狮头重达8公斤（普通南狮约3公斤）
- **现存状态**：
- 入选江西省非遗名录
- 荣塘镇中学开设传承课程
- **现代价值**：传统武术的身体训练体系
- **体验建议**：
- 元宵节在剑邑广场观看狮王争霸赛
- 需提前预约方可参观荣塘镇老艺人制作狮头

---

### 专业注释：
1.禅宗文化部分依据《中国佛教史》（任继愈主编）
2.傩舞数据引自《江西傩文化研究》（余大喜著）
3.药都历史考证参考《樟树中药发展简史》地方志

### 现状警示：
据宜春文旅局2022年报告，全市37项市级以上非遗中，11项传承人不足3人，传统技艺类非遗商业化转化率仅29%，显示保护形势严峻。建议优先体验濒危项目（如万载夏布织造、铜鼓客家山歌等）。`,
            compiledMarkdown: '',
            imgs: [
                'https://www.keaitupian.cn/cjpic/frombd/2/253/577307617/196020057.jpg',
                'https://www.keaitupian.cn/cjpic/frombd/0/253/225043717/2613980594.jpg',
                'https://tse1-mm.cn.bing.net/th/id/OIP-C.NGlTOjyaGJxV-mE8l09ypgHaEK?rs=1&pid=ImgDetMain',
                'https://www.keaitupian.cn/cjpic/frombd/0/253/4142857519/3763913414.jpg',
                'https://ts1.tc.mm.bing.net/th/id/R-C.d88442788ee5a458d50e40f0a8cb1e05?rik=EoPp8GhejYeQfw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1307%2f10%2fc2%2f23151595_1373424485102.jpg&ehk=J7xq%2f50bCmdD4jUXfnTlau2s5WiVsBxQArAjvJzqIo4%3d&risl=&pid=ImgRaw&r=0',
                'https://img.keaitupian.cn/newupload/12/1670399981854975.jpg',
                'https://ts1.tc.mm.bing.net/th/id/R-C.866674dcd5e22a0b074ac85572b536eb?rik=ybxbYjxL7GeqJQ&riu=http%3a%2f%2fpic12.photophoto.cn%2f20090707%2f0034034803692952_b.jpg&ehk=tMg%2fUKPHxkva0JznQwhBbYk9JFxeZA2Lla37Tq7DdBo%3d&risl=&pid=ImgRaw&r=0',
                'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/a4788a98db537b3ea2afa945cbd2333e.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_3840%2ch_2160',
                'https://img.shetu66.com/2023/05/15/1684145532438596.png',
                'https://www.keaitupian.cn/cjpic/frombd/0/253/3259650584/1126208532.jpg',
                'https://img.shetu66.com/2023/06/29/1688025012523974.png',
                'https://ts1.tc.mm.bing.net/th/id/R-C.6d9d41d07e6c2cea33a54688455a804b?rik=Rxl5Reppi2Z8ag&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f30594%2f9720.jpg_wh300.jpg&ehk=cW7QaKiMVGqMpd5cwrL0TfGQaqZEnYjaTQrsKxEtD4w%3d&risl=&pid=ImgRaw&r=0',
                'https://img.shetu66.com/2023/07/14/1689317568269651.png',
                'https://img.shetu66.com/2023/03/27/1679907039016722.jpg',
                'https://www.keaitupian.cn/cjpic/frombd/2/253/2642123052/2208003096.jpg',
                'https://c-lj.gnst.jp/public/article/detail/a/00/00/a0000276/img/basic/a0000276_main.jpg?20170427165412',
                'https://tse1-mm.cn.bing.net/th?id=OIF-C.GVyA3pzckTl%2b2FGzZNjxBA&rs=1&pid=ImgDetMain',
            ],
        };
    },
    created() {
        this.city = this.$store.state.city;
        const md = new MarkdownIt({
            html: true,        // 在源码中启用 HTML 标签
            breaks: true, // 转换段落里的 '\n' 到 <br>。
        });
        this.compiledMarkdown = md.render(this.markdownContent);
    }
};
</script> -->


<template>
  <div class="container">
    <el-tooltip effect="dark" content="退出登录" placement="top">
      <img
        src="@/assets/image/Home/tuichudenglu2.png"
        class="exit"
        @click="exit"
      />
    </el-tooltip>
    <div class="content-wrapper">
      <div class="left">
        <div class="thinking" v-html="thinkingMarkdown"></div>
        <div v-html="answerMarkdown"></div>
      </div>
      <div class="right">
        <div class="gallery">
          <div class="gallery-item" v-for="(img, index) in imgs" :key="index">
            <img :src="img" :alt="'Gallery image ' + (index + 1)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import axios from "axios";
// let md = new MarkdownIt()
// // 聊天框内容列表
// let chatDatas = ref([])

export default {
  data() {
    return {
      thinkingMarkdown: "",
      answerMarkdown: "",
      answerBuffer: "",
      completeMarkdown: "", // 存储完整的 markdown
      renderTimer: null,
      md: null,
      imgs: [],
    };
  },
  mounted() {
    // this.constructor();
    const md = new MarkdownIt({
      html: true, // 在源码中启用 HTML 标签
      breaks: true, // 转换段落里的 '\n' 到 <br>。
      // 新增标题渲染相关配置，可根据需求调整
      linkify: true,
      typographer: true,
      // 可设置标题渲染深度等
      heading: {
        lvl: 1,
        max: 6,
      },
    });
    this.md = md;
    // this.chatDatas.push(this.arr1)
    const paramName = "city"; // 参数名
    const paramValue = this.$store.state.city; // 参数值
    const url = `${this.$baseUrl}agent/understand`;
    const requestBody = {
      [paramName]: paramValue,
    };

    this.fetchData(url, requestBody);

    // 按顺序依次获取图片
    const requests = [
      { code: 1, apiSuffix: "imgOne", delay: 0 },
      { code: 2, apiSuffix: "imgOne", delay: 1000 },
      { code: 3, apiSuffix: "imgTwo", delay: 2000 },
      { code: 4, apiSuffix: "imgTwo", delay: 3000 },
    ];

    requests.forEach(({ code, apiSuffix, delay }) => {
      setTimeout(() => {
        this.fetchImages(code, apiSuffix);
      }, delay);
    });
  },
  methods: {
    handleEvent(event) {
      if (event.name === "answer") {
        // 1. 处理数据
        const normalizedData = event.data
          .replace(/\\n/g, "\n")
          .replace(/\r?\n\r?\n/g, "\n\n");

        // 2. 更新完整内容
        this.completeMarkdown += normalizedData;

        // 3. 添加到缓冲区
        this.answerBuffer += normalizedData;

        // 4. 使用防抖进行渲染
        // clearTimeout(this.renderTimer);
        // this.renderTimer = setTimeout(() => {
        this.renderMarkdown();
        // }, 100); // 100ms 的防抖时间

        // 5. 强制在特定标记处渲染
        if (this.shouldForceRender(normalizedData)) {
          this.renderMarkdown();
        }
      }
    },
    async fetchData(url, requestBody) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `${this.$store.state.token}`,
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buffer = "";
        let currentEvent = { name: null, data: "" };

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            // 处理最后一个事件
            if (currentEvent.name) {
              this.handleEvent(currentEvent);
            }
            break;
          }
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop();

          for (const line of lines) {
            if (line.trim() === "") {
              // 空行表示一个事件结束
              if (currentEvent.name) {
                this.handleEvent(currentEvent);
                currentEvent = { name: null, data: "" };
              }
            } else if (line.startsWith("event:")) {
              currentEvent.name = line.split(":")[1];
            } else if (line.startsWith("data:")) {
              currentEvent.data += line.slice(5);
            }
          }
        }
      } catch (error) {
        console.error("请求出错:", error);
      }
    },
    shouldForceRender(text) {
      // 定义需要强制渲染的标记
      const forceRenderMarkers = [
        "###",
        "##",
        "####", // 新增这一项
        "\n\n",
        "。",
        "！",
        "？",
      ];
      return forceRenderMarkers.some((marker) => text.includes(marker));
    },

    renderMarkdown() {
      if (!this.answerBuffer) return;

      try {
        // 渲染新内容
        const renderedContent = this.md.render(this.completeMarkdown);

        this.$nextTick(() => {
          // 更新 DOM
          this.answerMarkdown = renderedContent;

          // 清空缓冲区
          this.answerBuffer = "";

          // 滚动到底部（如果需要）
          this.scrollToBottom();
        });
      } catch (error) {
        console.error("Markdown 渲染错误:", error);
      }
    },

    scrollToBottom() {
      const element = this.$el.querySelector(".left");
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    },
    fetchImages(code, apiSuffix) {
      const imgAto = {
        message: this.$store.state.city,
        code,
      };
      axios
        .post(`${this.$baseUrl}agent/${apiSuffix}`, imgAto, {
          headers: {
            token: `${this.$store.state.token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          res.data.forEach((img) => {
            if (!this.imgs.includes(img)) {
              this.imgs.push(img);
            }
          });
        });
    },
    exit() {
      this.changePage("home",'bottom');
      setTimeout(()=>{
this.turnBottom();
      },1000)
      
    },
    changePage(name) {
      if (this.$store.state.token === "") {
        this.$bus.$emit("c-Login", "Login");
      } else {
        this.$bus.$emit("c-" + name, name);
      }
    },
    turnBottom(){
        this.$bus.$emit("turnBottom");
    }
    // 组件销毁时清理
  },
  beforeDestroy() {
    this.imgs = [];
  },
};
</script>



<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: #5c2223;
  background-image: url("@/assets/image/Home/02bck.png");
  background-size: cover;
  background-attachment: fixed;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  .content-wrapper {
    width: 90%;
    max-width: 1400px;
    display: flex;
    gap: 2rem;
    background: rgba(92, 34, 35, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 2rem;
  }

  .left {
    flex: 1;
    padding: 2rem;
    color: #f0f0f0;
    overflow-y: auto;
    max-height: 80vh;

    // 标题样式
    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
      color: #ffcc00;
      margin: 1.5em 0 0.8em;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 204, 0, 0.3);
    }

    ::v-deep h1 {
      font-size: 2.2rem;
      &::after {
        width: 120px;
        height: 4px;
      }
    }

    ::v-deep h2 {
      font-size: 1.8rem;
    }

    // 段落样式
    ::v-deep p {
      margin-bottom: 1.5rem;
      position: relative;
      padding-left: 1rem;

      &::before {
        content: "❯";
        position: absolute;
        left: -0.5rem;
        color: rgba(255, 204, 0, 0.5);
      }
    }

    // 链接样式
    ::v-deep a {
      color: #ff9900;
      text-decoration: none;
      position: relative;
      transition: all 0.3s ease;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: linear-gradient(90deg, #ff9900, transparent);
        transition: width 0.3s ease;
      }

      &:hover {
        color: #ffcc00;

        &::after {
          width: 100%;
        }
      }
    }

    // 列表样式
    ::v-deep ul,
    ::v-deep ol {
      margin: 1.5rem 0;
      padding-left: 2rem;
      list-style: none; // 移除默认列表样式

      li {
        margin-bottom: 0.8rem;
        position: relative;
        padding-left: 1rem;

        &::before {
          position: absolute;
          left: -1rem;
          color: #ff9900;
        }
      }
    }

    ::v-deep ul li::before {
      content: "✦";
    }

    ::v-deep ol {
      counter-reset: item;

      ::v-deep li {
        counter-increment: item;

        &::before {
          content: counter(item) ".";
          font-weight: bold;
        }
      }
    }

    // 引用样式
    ::v-deep blockquote {
      border-left: 3px solid #ff9900;
      background: rgba(255, 153, 0, 0.1);
      padding: 1rem 1.5rem;
      margin: 1.5rem 0;
      border-radius: 0 8px 8px 0;
      position: relative;
      overflow: hidden;

      &::before {
        content: '"';
        position: absolute;
        font-size: 5rem;
        color: rgba(255, 153, 0, 0.1);
        top: -1rem;
        left: 0.5rem;
        font-family: Georgia, serif;
        line-height: 1;
      }

      ::v-deep p {
        position: relative;
        z-index: 1;
        margin: 0;
        padding: 0;

        &::before {
          display: none;
        }
      }
    }

    // 分割线样式
    ::v-deep hr {
      border: 0;
      height: 1px;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(255, 204, 0, 0.75),
        rgba(0, 0, 0, 0)
      );
      margin: 2.5rem 0;
    }

    // 强调文本样式
    ::v-deep strong {
      color: #ffcc00;
      text-shadow: 0 0 5px rgba(255, 204, 0, 0.3);
    }

    ::v-deep em {
      font-style: italic;
      color: #ffcc99;
    }
  }

  .right {
    flex: 1;
    padding: 1rem;

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 1rem;
      max-height: 80vh;
      overflow-y: auto;
      padding: 0.5rem;

      &-item {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;

          &:hover {
            transform: scale(1.05);
          }
        }

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        &:hover::after {
          opacity: 1;
        }
      }
    }
  }

  /* 滚动条样式 */
  .left::-webkit-scrollbar,
  .gallery::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .left::-webkit-scrollbar-track,
  .gallery::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  .left::-webkit-scrollbar-thumb,
  .gallery::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  .left::-webkit-scrollbar-thumb:hover,
  .gallery::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 1024px) {
    .content-wrapper {
      flex-direction: column;
      width: 95%;
    }

    .left,
    .right {
      width: 100%;
      max-height: none;
    }

    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .content-wrapper {
      padding: 1rem;
    }

    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 0.5rem;
    }
  }
}
.exit {
  width: 24px;
  position: absolute;
  z-index: 999;
  top: 30px;
  right: 40px;
  cursor: pointer;
}
</style>