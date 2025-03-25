<template>
  <div class="container">
    <div class="first-box" ref="firstBox">
      <img src="@/assets/image/Home/01bck.png" alt="Header Image" class="header-image" ref="headerImage" />
      <div class="faceBox" ref="faceBox" :class="{ 'faceBox-up': isFaceBoxChange }">
        <div class="first-face-title">
          <p>中华文化</p>
        </div>
        <div class="face-text">
          <p>
            中华传统文化，如涓涓细流汇聚成河，五千年的智慧结晶，闪耀着先哲的光芒。儒家仁爱、道家自然，诗词歌赋吟咏不尽，传统节日传承千年情谊，宛如一幅水墨画卷，诗意盎然，书写着中华民族的灵魂与梦想。
          </p>
        </div>
      </div>
    </div>
    <div class="second-box">
      <div class="wrapper" :style="{
        backgroundColor: nowColor.code ? '#' + nowColor.code : '#ddd',
      }">
        <div class="color-box">
          <div class="color-list">
            <div class="color-item" v-for="(color, index) in colors" :key="index"
              :style="{ borderColor: '#' + color.code }" @click="changeColor(color)">
              <div class="color-top">
                <div class="top-size">
                  <el-progress type="circle" :show-text="false" :percentage="color.C" color="#fff" :width="width30"
                    :stroke-width="strokeWidth" stroke-linecap="butt" class="top-value"
                    define-back-color="rgba(255,255,255,0.2)"></el-progress>
                  <el-progress type="circle" :show-text="false" :percentage="color.M" color="#fff" :width="width30"
                    :stroke-width="strokeWidth" stroke-linecap="butt" class="top-value"
                    define-back-color="rgba(255,255,255,0.2)"></el-progress>
                  <el-progress type="circle" :show-text="false" :percentage="color.Y" color="#fff" :width="width30"
                    :stroke-width="strokeWidth" stroke-linecap="butt" class="top-value"
                    define-back-color="rgba(255,255,255,0.2)"></el-progress>
                  <el-progress type="circle" :show-text="false" :percentage="color.K" color="#fff" :width="width30"
                    :stroke-width="strokeWidth" stroke-linecap="butt" class="top-value"
                    define-back-color="rgba(255,255,255,0.2)"></el-progress>
                </div>
                <div class="top-name" :style="{ color: '#' + color.code }">
                  {{ color.name }}
                </div>
              </div>
              <div class="color-bottom">
                <div class="bottom-name">{{ color.pinyin }}</div>
                <div class="bottom-size">
                  {{ color.R }},{{ color.G }},{{ color.B }}
                </div>
                <div class="bottom-code">{{ color.code }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="message-box">
          <div class="color-value">
            <div class="C cmyk color-son">
              <div class="color-title">
                <p>C</p>
              </div>
              <div class="color-circular">
                <el-progress type="circle" :percentage="nowColor.C" :show-text="false" :width="width" color="#0093D3"
                  stroke-linecap="butt">
                </el-progress>
                <span>{{ nowColor.C }}</span>
              </div>
            </div>
            <div class="M cmyk color-son">
              <div class="color-title">
                <p>M</p>
              </div>
              <div class="color-circular">
                <el-progress type="circle" :percentage="nowColor.M" :show-text="false" :width="width" color="#CC006B"
                  stroke-linecap="butt">
                </el-progress>
                <span>{{ nowColor.M }}</span>
              </div>
            </div>
            <div class="Y cmyk color-son">
              <div class="color-title">
                <p>Y</p>
              </div>
              <div class="color-circular">
                <el-progress type="circle" :percentage="nowColor.Y" :show-text="false" :width="width" color="#FFF10C"
                  stroke-linecap="butt">
                </el-progress>
                <span>{{ nowColor.Y }}</span>
              </div>
            </div>
            <div class="K cmyk color-son">
              <div class="color-title">
                <p>K</p>
              </div>
              <div class="color-circular">
                <el-progress type="circle" :percentage="nowColor.K" :show-text="false" :width="width" color="#000000"
                  stroke-linecap="butt">
                </el-progress>
                <span>{{ nowColor.K }}</span>
              </div>
            </div>
            <div class="R rgb color-son">
              <div class="color-title">
                <p>R</p>
              </div>
              <span>{{ nowColor.R }}</span>
            </div>
            <div class="G rgb color-son">
              <div class="color-title">
                <p>G</p>
              </div>
              <span>{{ nowColor.G }}</span>
            </div>
            <div class="B rgb color-son">
              <div class="color-title">
                <p>B</p>
              </div>
              <span>{{ nowColor.B }}</span>
            </div>
          </div>
          <div class="color-name">
            <p class="p-name">{{ nowColor.name }}</p>
            <p class="p-pinyin">{{ nowColor.pinyin }}</p>
            <p class="p-pinyin">
              {{ nowColor.code ? "#" + nowColor.code : "#ddd" }}
            </p>
          </div>
          <div class="color-img">
            <img src="@/assets/image/Home/03bck.png" alt="" />
          </div>
        </div>
        <div class="wrapper-title">
          <span>一眼千年</span>
          <span>绮彩盈笺</span>
        </div>
      </div>
    </div>
    <div class="third-box" ref="thirdBox">
      <div class="third-top-left" :style="{ transform: `translateY(${topLeftOffset}vh)` }">
        <span>传</span>
      </div>
      <div class="third-top-right" :style="{ transform: `translateY(${topRightOffset}vh)` }">
        <span>统</span>
        <img src="https://news.cgtn.com/event/2022/The-Song-Painted/style/img/introduceFloat02.png" @click="thirdNext"
          class="third-click-btn-next" />
      </div>

      <div class="third-bottom">
        <img src="https://news.cgtn.com/event/2022/The-Song-Painted/style/img/introduceFloat02.png" @click="thirdLast"
          class="third-click-btn-last" v-if="showBtn" />

        <div class="third-bottom-title">
          <div style="width: 20vw; height: 5vh"></div>
          <h2>千年文化韵，流转在今朝</h2>
        </div>
        <div class="third-bottom-contain">
          <div class="third-bottom-contain-left">
            <div class="video-box" @click="showVideo(0)">
              <div class="video-face">
                <div class="face-img">
                  <img src="@/assets/image/Home/gh.png" alt="" />
                </div>
                <div class="face-title">
                  <h2>国画</h2>
                  <p>
                    国画是中国的传统绘画形式，是用毛笔蘸水、墨、彩作画于绢或纸上
                  </p>
                </div>
              </div>
            </div>
            <div class="video-box" @click="showVideo(2)">
              <div class="video-face">
                <div class="face-img">
                  <img src="@/assets/image/Home/cq.png" alt="" />
                </div>
                <div class="face-title">
                  <h2>瓷器</h2>
                  <p>中国是瓷器的故乡，瓷器是古代劳动人民的一个重要的创造</p>
                </div>
              </div>
            </div>
            <div class="video-box" @click="showVideo(1)">
              <div class="video-face">
                <div class="face-img">
                  <img src="@/assets/image/Home/sc.png" alt="" />
                </div>
                <div class="face-title">
                  <h2>丝绸</h2>
                  <p>
                    丝绸是中国的特产，中国古代劳动人民发明并大规模生产丝绸制品，更开启了世界历史上第一次东西方大规模的商贸交流，史称“丝绸之路”
                  </p>
                </div>
              </div>
            </div>
            <div class="video-box" @click="showVideo(3)">
              <div class="video-face">
                <div class="face-img">
                  <img src="@/assets/image/Home/zy.png" alt="" />
                </div>
                <div class="face-title">
                  <h2>中医</h2>
                  <p>
                    中医学有数千年的历史，是中华民族在长期的生产与生活实践中认识生命、维护健康、战胜疾病的宝贵经验总结，是中国传统文化的结晶
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="third-bottom-contain-right">
            <div class="third-bottom-right-son1">
              <div class="son-box" @click="changePage('Jingjv')">
                <div class="son-box-img">
                  <img src="@/assets/image/Home/jj.png" alt="" />
                </div>
                <div class="son-box-text">
                  <h2>京剧</h2>
                  <p>
                    京剧是至今中国戏曲舞台上最具代表性、影响力的剧种，被誉为“国粹”
                  </p>
                </div>
              </div>
              <div class="cloud2">
                <img src="@/assets/image/Home/cloud2.png" alt="" />
              </div>
              <div class="son-box" @click="changePage('Cixiu')">
                <div class="son-box-img">
                  <img src="@/assets/image/Home/syi.png" alt="" />
                </div>
                <div class="son-box-text">
                  <h2>刺绣</h2>
                  <p>
                    刺绣是针和线在织物上的一种艺术，也是中国非物质文化遗产保护中最珍贵的物种之一
                  </p>
                </div>
              </div>
            </div>
            <div class="third-bottom-right-son2">
              <div class="cloud1">
                <img src="@/assets/image/Home/cloud1.png" alt="" />
              </div>
              <div class="cloud2 cloud21">
                <img src="@/assets/image/Home/cloud2.png" alt="" />
              </div>
              <div class="cloud1">
                <img src="@/assets/image/Home/cloud1.png" alt="" />
              </div>
            </div>
            <div class="third-bottom-right-son3">
              <div class="son-box" @click="changePage('Rujia')">
                <div class="son-box-img">
                  <img src="@/assets/image/Home/rj.png" alt="" />
                </div>
                <div class="son-box-text">
                  <h2>儒家文化</h2>
                  <p>
                    儒家文化是以儒家学说为指导思想的文化流派，为历代儒客信众推崇
                  </p>
                </div>
              </div>
              <div class="cloud2">
                <img src="@/assets/image/Home/cloud2.png" alt="" />
              </div>
              <div class="son-box" @click="changePage('Zhongyi')">
                <div class="son-box-img">
                  <img src="@/assets/image/Home/zyi.png" alt="" />
                </div>
                <div class="son-box-text">
                  <h2>中医文化</h2>
                  <p>
                    中医具有完整的理论体系，其独特之处在于天人合一、天人相应的整体观及辨证论治
                  </p>
                </div>
              </div>
            </div>
            <div class="third-bottom-right-son4">
              <div class="son4-box" @click="changePage('Hanfu')">
                <div class="son4-box-img">
                  <img src="@/assets/image/Home/hf.png" alt="" />
                </div>
                <div class="son4-box-text">
                  <h2>汉服</h2>
                  <p>
                    汉服是中国“衣冠上国”“礼仪之邦”“锦绣中华”的体现，承载了中国的染织绣等杰出工艺和美学
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-drawer title="video" size="80%" :visible.sync="isShowVideo" :with-header="false" class="tvBox">
          <video :src="nowVideo" v-if="isShowVideo" controls fit="fill" style="width: 100%; height: 100%"></video>
        </el-drawer>
      </div>
    </div>

    <div class="fourth-box" ref="fourthBox">
      <div class="mapBox">
        <div id="allmap"></div>
      </div>
      <div class="fourth-right">
        <div class="cultureBox" ref="cultureBox">

          <div class="dialogBox">
            <div class="avatarBox">
              <img class="ai" src="@/assets/image/Home/ai.gif" />
            </div>
            <div class="contentBox">
              <div class="contentText">
                <p>我叫古晓，你的个人AI助手<br>我可以为你做以下事:</p>
                <!-- <p>我叫古晓</p> -->
              </div>
              <div class="contentModule">
                <div class="cultureIntroduce">
                  <h4 style="margin: 5px;font-family: kaiti;">文化展示</h4>
                  <p style="margin-left: 5px;line-height: 18px;letter-spacing: 3px;font-family: kaiti;">
                    选择地图上<br>的城市查看当地<br>文化</p>
                </div>
                <div class="questionAnswer">
                  <h4 style="margin: 5px;font-family: kaiti;">知天文<br>地理</h4>
                  <p style="margin-left: 5px;line-height: 18px;letter-spacing: 3px;font-family: kaiti;">为你答疑<br>解惑</p>
                </div>
                <div class="moduleSonBox">
                  <div class="scenicIntroduce" style="text-align: right;">
                    <h4 style="margin: 5px;font-family: kaiti;">景点介绍</h4>
                    <p style="margin-right: 5px;line-height: 18px;letter-spacing: 3px;font-family: kaiti;">寻古人<br>游踪</p>
                  </div>
                  <div class="AIDraw">
                    <h4 style="margin: 5px;font-family: kaiti;">琴棋书画</h4>
                    <p style="margin-left: 5px;line-height: 18px;letter-spacing: 3px;font-family: kaiti;">古法传承<br>AI绘画
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="dialogBox" v-for="(chat, index) in chats" :key="index"
            :class="chat.type === 'user' ? 'dialogBox-right' : ''">
            <div class="avatarBox" :class="chat.type === 'user' ? 'avatarBox-right' : ''">
              <img class="ai" :src="chat.avatar" />
            </div>
            <div class="contentBox" :class="chat.type === 'user' ? 'contentBox-right' : ''">
              <div class="contentText">
                <p>{{ chat.content.trim() }}</p>
              </div>
              <div class="contentModule" v-if="chat.modules.length">
                <div class="cultureIntroduce" :style="{ backgroundImage: `url(${chat.modules[0].bck})` }">
                  <h4 style="margin: 5px;font-family: kaiti;">{{ chat.modules[0].title }}</h4>
                  <p style="margin-left: 5px;line-height: 18px;letter-spacing: 3px;font-family: kaiti;">
                    {{ chat.modules[0].tip }}</p>
                </div>
                <div class="questionAnswer" :style="{ backgroundImage: `url(${chat.modules[1].bck})` }">
                  <h4 style="margin: 5px;font-family: kaiti;">{{ chat.modules[1].title }}</h4>
                  <p style="margin-left: 5px;line-height: 18px;letter-spacing: 3px;font-family: kaiti;">{{
                    chat.modules[1].tip }}</p>
                </div>
                <div class="moduleSonBox">
                  <div class="scenicIntroduce" style="text-align: right;"
                    :style="{ backgroundImage: `url(${chat.modules[2].bck})` }">
                    <h4 style="margin: 5px;font-family: kaiti;">{{ chat.modules[2].title }}</h4>
                    <p style="margin-right: 5px;line-height: 18px;letter-spacing: 3px;font-family: kaiti;">{{
                      chat.modules[2].tip }}</p>
                  </div>
                  <div class="AIDraw" :style="{ backgroundImage: `url(${chat.modules[3].bck})` }">
                    <h4 style="margin: 5px;font-family: kaiti;">{{ chat.modules[3].title }}</h4>
                    <p style="margin-left: 5px;line-height: 18px;letter-spacing: 3px;font-family: kaiti;">{{
                      chat.modules[3].tip }}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="dialogBox" v-if="isThinking">
            <div class="avatarBox">
              <img class="ai" src="@/assets/image/Home/ai.gif" />
            </div>
            <div class="contentBox">
              <div class="contentText">
                <i class="el-icon-loading" style="color: gray;"></i>
              </div>

            </div>
          </div>

        </div>
        <div class="inputBox">
          <div v-if="limitTip" class="limit-tip"><span style="color: red;">{{ textarea.length }}</span><span
              style="color: gray;">/10000</span></div>
          <textarea class="question-textarea" maxlength="10000" v-model="textarea"
            :style="{ height: textareaHeight + 'vh' }" @input="adjustHeight" ref="questionTextarea"
            placeholder="万事疑惑询古晓" @keydown.enter.prevent="sendMessage('')"></textarea>
          <el-tooltip slot="suffix" class="item" effect="light" content="还没说呢" placement="top-end" v-show="isTextEmpty">
            <i :class="iconClass" class="el-icon-s-promotion"></i>
          </el-tooltip>
          <i slot="suffix" :class="iconClass" class="el-icon-s-promotion el-icon-s-promotion-allowed"
            v-show="!isTextEmpty" @click="sendMessage('')"></i>
          <i class="el-icon-microphone "></i>
          <el-tooltip slot="suffix" class="item" effect="light" :content="!isRecording ? '语音输入' : '停止语音输入'"
            placement="top-end">
            <i class="el-icon-microphone" :class="isRecording ? 'saying' : ''" @click="sayingInMessage"></i>
          </el-tooltip>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import allProvinceBoundaries from "@/assets/json/all-province-boundaries.json";
import allCityBoundaries from "@/assets/json/all-city-boundaries.json";
import axios from "axios";
export default {
  name: "Home",

  data() {
    return {
      isFaceBoxChange: false,
      num: 50,
      width: 60,
      width30: 30,
      strokeWidth: 7,
      percentage100: 100,
      percentage10: 10,
      isShowVideo: false,
      nowVideo: "",
      cityName: "",
      provinceFillLayer: null,
      cityBoundaryLayer: null,
      highlightedPolygon: null,
      textarea: '',
      textareaHeight: 3,
      isThinking: false,
      isRecording: false,
      transcript: '',// 存储语音转文字的结果
      recognition: null,// 存储 SpeechRecognition 实例
      cityData: allCityBoundaries, // 直接导入城市边界数据
      topRightOffset: parseFloat(sessionStorage.getItem("topRightOffset")) || 0,
      topLeftOffset: parseFloat(sessionStorage.getItem("topLeftOffset")) || 0,
      showBtn: sessionStorage.getItem("showBtn") === "true", // 初始化 showBtn 状态
      videos: [
        require("@/assets/video/guohua.mp4"), // 使用require确保路径被正确解析
        require("@/assets/video/hanfu.mp4"),
        require("@/assets/video/taoci.mp4"),
        require("@/assets/video/zhongyi.mp4"),
      ],
      nowColor: {
        name: "中国色",
        C: 0,
        M: 0,
        Y: 0,
        K: 0,
        R: 255,
        G: 255,
        B: 255,
        code: "",
        pinyin: "ZHONGGUOSE",
      },
      colors: [
        {
          name: "暗玉紫",
          C: 35,
          M: 94,
          Y: 77,
          K: 53,
          R: 255,
          G: 255,
          B: 255,
          code: "5c2223",
          pinyin: "ANYUZI",
        },
        {
          name: "牡丹粉红",
          C: 0,
          M: 49,
          Y: 27,
          K: 0,
          R: 238,
          G: 162,
          B: 164,
          code: "eea2a4",
          pinyin: "MUDANFENHONG",
        },
        {
          name: "栗紫",
          C: 35,
          M: 100,
          Y: 85,
          K: 54,
          R: 90,
          G: 25,
          B: 27,
          code: "5a191b",
          pinyin: "LIZI",
        },
        {
          name: "香叶红",
          C: 0,
          M: 65,
          Y: 38,
          K: 0,
          R: 240,
          G: 124,
          B: 130,
          code: "f07c82",
          pinyin: "XIANGYEHONG",
        },
        {
          name: "葡萄酱紫",
          C: 35,
          M: 100,
          Y: 80,
          K: 54,
          R: 90,
          G: 18,
          B: 22,
          code: "5a1216",
          pinyin: "PUTAOJIANGZI",
        },
        {
          name: "艳红",
          C: 0,
          M: 77,
          Y: 49,
          K: 0,
          R: 237,
          G: 90,
          B: 101,
          code: "ed5a65",
          pinyin: "YANHONG",
        },
        {
          name: "玉红",
          C: 13,
          M: 83,
          Y: 62,
          K: 3,
          R: 192,
          G: 72,
          B: 81,
          code: "c04851",
          pinyin: "YUHONG",
        },
        {
          name: "茶花红",
          C: 0,
          M: 84,
          Y: 60,
          K: 0,
          R: 238,
          G: 63,
          B: 77,
          code: "ee3f4d",
          pinyin: "CHAHUAHONG",
        },
        {
          name: "高粱红",
          C: 11,
          M: 93,
          Y: 77,
          K: 0,
          R: 192,
          G: 44,
          B: 56,
          code: "c02c38",
          pinyin: "GAOLIANGHONG",
        },
        {
          name: "满江红",
          C: 22,
          M: 76,
          Y: 54,
          K: 12,
          R: 167,
          G: 83,
          B: 90,
          code: "a7535a",
          pinyin: "MANJIANGHONG",
        },
        {
          name: "鼠鼻红",
          C: 5,
          M: 38,
          Y: 20,
          K: 0,
          R: 27,
          G: 180,
          B: 184,
          code: "e3b4b8",
          pinyin: "SHUBIHONG",
        },
        {
          name: "合欢红",
          C: 0,
          M: 50,
          Y: 23,
          K: 0,
          R: 40,
          G: 161,
          B: 181,
          code: "f0a1a8",
          pinyin: "HEHUANHONG",
        },
        {
          name: "春梅红",
          C: 0,
          M: 56,
          Y: 27,
          K: 0,
          R: 41,
          G: 147,
          B: 156,
          code: "f19397",
          pinyin: "CHUNMEIHONG",
        },
        {
          name: "枫叶红",
          C: 10,
          M: 96,
          Y: 82,
          K: 8,
          R: 194,
          G: 31,
          B: 48,
          code: "c21f30",
          pinyin: "FENGYEHONG",
        },
        {
          name: "丹紫红",
          C: 7,
          M: 79,
          Y: 78,
          K: 0,
          R: 210,
          G: 86,
          B: 140,
          code: "d2568c",
          pinyin: "DANZIHONG",
        },
        {
          name: "鼠背灰",
          C: 41,
          M: 64,
          Y: 44,
          K: 36,
          R: 115,
          G: 87,
          B: 92,
          code: "73575c",
          pinyin: "SHUBEIHUI",
        },
        {
          name: "芍药耕红",
          C: 0,
          M: 50,
          Y: 16,
          K: 0,
          R: 35,
          G: 160,
          B: 179,
          code: "eba0b3",
          pinyin: "SHAOYAOGENGHONG",
        },
        {
          name: "品红",
          C: 0,
          M: 86,
          Y: 30,
          K: 0,
          R: 239,
          G: 52,
          B: 115,
          code: "ef3473",
          pinyin: "PINHONG",
        },
        {
          name: "古鼎灰",
          C: 63,
          M: 74,
          Y: 52,
          K: 70,
          R: 54,
          G: 41,
          B: 47,
          code: "36292f",
          pinyin: "GUDINGHUI",
        },
        {
          name: "龙须红",
          C: 11,
          M: 97,
          Y: 10,
          K: 0,
          R: 204,
          G: 85,
          B: 149,
          code: "cc5595",
          pinyin: "LONGXVHONG",
        },
        {
          name: "乌梅紫",
          C: 81,
          M: 87,
          Y: 54,
          K: 84,
          R: 30,
          G: 19,
          B: 29,
          code: "1e131d",
          pinyin: "WUMEIZI",
        },
        {
          name: "桔梗紫",
          C: 54,
          M: 89,
          Y: 12,
          K: 1,
          R: 19,
          G: 60,
          B: 133,
          code: "813c85",
          pinyin: "JIEGENGZI",
        },
        {
          name: "凤信紫",
          C: 21,
          M: 37,
          Y: 12,
          K: 0,
          R: 200,
          G: 173,
          B: 196,
          code: "c8adc4",
          pinyin: "FENGXINZI",
        },
        {
          name: "蕈紫",
          C: 56,
          M: 72,
          Y: 15,
          K: 1,
          R: 129,
          G: 92,
          B: 148,
          code: "815c94",
          pinyin: "XUNZI",
        },
        {
          name: "晶石紫",
          C: 98,
          M: 93,
          Y: 48,
          K: 73,
          R: 31,
          G: 32,
          B: 64,
          code: "1f2040",
          pinyin: "JINGSHIZI",
        },
        {
          name: "远山紫",
          C: 23,
          M: 18,
          Y: 12,
          K: 1,
          R: 204,
          G: 204,
          B: 214,
          code: "ccccd6",
          pinyin: "YUANSHANZI",
        },
        {
          name: "燕颔蓝",
          C: 100,
          M: 86,
          Y: 54,
          K: 78,
          R: 19,
          G: 24,
          B: 36,
          code: "131824",
          pinyin: "YANHANLAN",
        },
        {
          name: "钢青",
          C: 100,
          M: 82,
          Y: 51,
          K: 64,
          R: 20,
          G: 35,
          B: 52,
          code: "142334",
          pinyin: "GANGQING",
        },
        {
          name: "海涛蓝",
          C: 100,
          M: 67,
          Y: 36,
          K: 3,
          R: 21,
          G: 85,
          B: 154,
          code: "15559a",
          pinyin: "HAITAOLAN",
        },
        {
          name: "花青",
          C: 95,
          M: 45,
          Y: 10,
          K: 1,
          R: 35,
          G: 118,
          B: 183,
          code: "2376b7",
          pinyin: "HUAQING",
        },
        {
          name: "星蓝",
          C: 53,
          M: 19,
          Y: 15,
          K: 1,
          R: 147,
          G: 181,
          B: 207,
          code: "93b5cf",
          pinyin: "XINGLAN",
        },
        {
          name: "云水蓝",
          C: 35,
          M: 13,
          Y: 13,
          K: 0,
          R: 186,
          G: 204,
          B: 217,
          code: "baccd9",
          pinyin: "YUNSHUILAN",
        },
        {
          name: "牵牛花蓝",
          C: 98,
          M: 42,
          Y: 16,
          K: 3,
          R: 17,
          G: 119,
          B: 176,
          code: "1177b0",
          pinyin: "QIANNIUHUALAN",
        },
        {
          name: "井天蓝",
          C: 32,
          M: 8,
          Y: 13,
          K: 0,
          R: 195,
          G: 215,
          B: 223,
          code: "c3d7df",
          pinyin: "JINGTIANLAN",
        },
        {
          name: "釉蓝",
          C: 96,
          M: 34,
          Y: 18,
          K: 4,
          R: 3,
          G: 129,
          B: 181,
          code: "1781b5",
          pinyin: "YOULAN",
        },
        {
          name: "云峰白",
          C: 21,
          M: 6,
          Y: 10,
          K: 0,
          R: 216,
          G: 227,
          B: 231,
          code: "d8e3e7",
          pinyin: "YUNFENGBAI",
        },
        {
          name: "苍蓝",
          C: 100,
          M: 52,
          Y: 46,
          K: 43,
          R: 19,
          G: 72,
          B: 87,
          code: "134857",
          pinyin: "CANGLAN",
        },
        {
          name: "夏云灰",
          C: 65,
          M: 40,
          Y: 44,
          K: 26,
          R: 97,
          G: 113,
          B: 114,
          code: "617172",
          pinyin: "XIAYUNHUI",
        },
        {
          name: "石绿",
          C: 78,
          M: 36,
          Y: 0,
          K: 0,
          R: 87,
          G: 195,
          B: 194,
          code: "57c3c2",
          pinyin: "SHILV",
        },
        {
          name: "竹绿",
          C: 96,
          M: 0,
          Y: 64,
          K: 0,
          R: 26,
          G: 167,
          B: 132,
          code: "1ba784",
          pinyin: "ZHULV",
        },
        {
          name: "深海绿",
          C: 98,
          M: 46,
          Y: 73,
          K: 63,
          R: 6,
          G: 59,
          B: 50,
          code: "1a3b32",
          pinyin: "SHENHAILV",
        },
        {
          name: "飞泉绿",
          C: 82,
          M: 32,
          Y: 60,
          K: 20,
          R: 73,
          G: 117,
          B: 104,
          code: "497568",
          pinyin: "FEIQUANLV",
        },
        {
          name: "蛙绿",
          C: 86,
          M: 0,
          Y: 63,
          K: 0,
          R: 69,
          G: 183,
          B: 135,
          code: "45b787",
          pinyin: "WALV",
        },
        {
          name: "葱绿",
          C: 90,
          M: 7,
          Y: 73,
          K: 0,
          R: 64,
          G: 160,
          B: 112,
          code: "40a070",
          pinyin: "CONGLV",
        },
        {
          name: "荷叶绿",
          C: 100,
          M: 31,
          Y: 91,
          K: 25,
          R: 26,
          G: 104,
          B: 64,
          code: "1a6840",
          pinyin: "HEYELV",
        },
        {
          name: "玉簪绿",
          C: 49,
          M: 5,
          Y: 37,
          K: 0,
          R: 164,
          G: 202,
          B: 182,
          code: "a4cab6",
          pinyin: "YUZANLV",
        },
        {
          name: "蟾绿",
          C: 93,
          M: 24,
          Y: 76,
          K: 2,
          R: 60,
          G: 149,
          B: 102,
          code: "3c9566",
          pinyin: "CHANLV",
        },
        {
          name: "毛绿",
          C: 75,
          M: 0,
          Y: 61,
          K: 0,
          R: 102,
          G: 193,
          B: 140,
          code: "66c18c",
          pinyin: "MAOLV",
        },
        {
          name: "狼烟灰",
          C: 62,
          M: 43,
          Y: 52,
          K: 34,
          R: 93,
          G: 101,
          B: 95,
          code: "5d655f",
          pinyin: "LANGYANHUI",
        },
        {
          name: "玉髓绿",
          C: 89,
          M: 0,
          Y: 96,
          K: 0,
          R: 65,
          G: 179,
          B: 73,
          code: "41b349",
          pinyin: "YUSUILV",
        },
        {
          name: "姚黄",
          C: 28,
          M: 4,
          Y: 44,
          K: 0,
          R: 208,
          G: 22,
          B: 170,
          code: "d0deaa",
          pinyin: "YAOHUANG",
        },
        {
          name: "佛手黄",
          C: 1,
          M: 18,
          Y: 94,
          K: 0,
          R: 254,
          G: 215,
          B: 26,
          code: "fed71a",
          pinyin: "FOSHOUHUANG",
        },
        {
          name: "草黄",
          C: 17,
          M: 27,
          Y: 94,
          K: 4,
          R: 210,
          G: 180,
          B: 44,
          code: "d2b42c",
          pinyin: "CAOHUANG",
        },
        {
          name: "潭水绿",
          C: 48,
          M: 48,
          Y: 100,
          K: 45,
          R: 100,
          G: 88,
          B: 34,
          code: "645822",
          pinyin: "TANSHUILV",
        },
        {
          name: "柠檬黄",
          C: 0,
          M: 20,
          Y: 87,
          K: 0,
          R: 252,
          G: 211,
          B: 55,
          code: "fcd337",
          pinyin: "NINGMENGHUANG",
        },
        {
          name: "月灰",
          C: 28,
          M: 26,
          Y: 45,
          K: 7,
          R: 183,
          G: 174,
          B: 143,
          code: "b7ae8f",
          pinyin: "YUEHUI",
        },
        {
          name: "乳鸭黄",
          C: 0,
          M: 26,
          Y: 94,
          K: 0,
          R: 255,
          G: 201,
          B: 22,
          code: "ffc90c",
          pinyin: "RUYAHUANG",
        },
        {
          name: "栀子黄",
          C: 3,
          M: 36,
          Y: 99,
          K: 0,
          R: 235,
          G: 177,
          B: 13,
          code: "ebb10d",
          pinyin: "ZHIZIHUANG",
        },
        {
          name: "莲子白",
          C: 11,
          M: 18,
          Y: 39,
          K: 1,
          R: 229,
          G: 211,
          B: 170,
          code: "e5d3aa",
          pinyin: "LIANZIBAI",
        },
        {
          name: "燕羽灰",
          C: 47,
          M: 47,
          Y: 65,
          K: 42,
          R: 104,
          G: 94,
          B: 72,
          code: "685e48",
          pinyin: "YANYUHUI",
        },
        {
          name: "淡肉色",
          C: 1,
          M: 15,
          Y: 38,
          K: 0,
          R: 248,
          G: 224,
          B: 176,
          code: "f8e0b0",
          pinyin: "DANROUSE",
        },
        {
          name: "榴萼黄",
          C: 0,
          M: 44,
          Y: 84,
          K: 0,
          R: 249,
          G: 166,
          B: 51,
          code: "f9a633",
          pinyin: "LIUEHUANG",
        },
        {
          name: "北瓜黄",
          C: 0,
          M: 56,
          Y: 87,
          K: 0,
          R: 252,
          G: 140,
          B: 35,
          code: "fc8c23",
          pinyin: "BEIGUANHUANG",
        },
        {
          name: "驼色",
          C: 37,
          M: 65,
          Y: 84,
          K: 49,
          R: 102,
          G: 70,
          B: 42,
          code: "66462a",
          pinyin: "TUOSE",
        },
        {
          name: "鹿皮褐",
          C: 7,
          M: 52,
          Y: 71,
          K: 1,
          R: 217,
          G: 145,
          B: 86,
          code: "d99156",
          pinyin: "LUPIHE",
        },
        {
          name: "麂棕",
          C: 0,
          M: 64,
          Y: 93,
          K: 0,
          R: 222,
          G: 118,
          B: 34,
          code: "de7622",
          pinyin: "JIZONG",
        },
        {
          name: "初桃粉红",
          C: 0,
          M: 19,
          Y: 19,
          K: 0,
          R: 246,
          G: 220,
          B: 206,
          code: "f6dcce",
          pinyin: "CHUTAOFENHONG",
        },
        {
          name: "晨曦红",
          C: 0,
          M: 58,
          Y: 67,
          K: 0,
          R: 234,
          G: 137,
          B: 88,
          code: "ea8958",
          pinyin: "CHENXIHONG",
        },
        {
          name: "藕荷",
          C: 2,
          M: 31,
          Y: 31,
          K: 0,
          R: 237,
          G: 195,
          B: 134,
          code: "edc3ae",
          pinyin: "OUHE",
        },
        {
          name: "绀红",
          C: 20,
          M: 72,
          Y: 96,
          K: 9,
          R: 166,
          G: 82,
          B: 44,
          code: "a6522c",
          pinyin: "GANHONG",
        },
        {
          name: "筍皮紫",
          C: 30,
          M: 89,
          Y: 100,
          K: 39,
          R: 155,
          G: 46,
          B: 18,
          code: "732e12",
          pinyin: "SUNPIZI",
        },
        {
          name: "龙睛鱼红",
          C: 0,
          M: 72,
          Y: 82,
          K: 0,
          R: 239,
          G: 99,
          B: 43,
          code: "ef632b",
          pinyin: "LONGJINGYUHONG",
        },
        {
          name: "貂紫",
          C: 36,
          M: 81,
          Y: 64,
          K: 54,
          R: 93,
          G: 49,
          B: 49,
          code: "5d3131",
          pinyin: "DIAOZI",
        },
        {
          name: "淡菽红",
          C: 0,
          M: 81,
          Y: 66,
          K: 0,
          R: 237,
          G: 72,
          B: 69,
          code: "ed4845",
          pinyin: "DANSHUHONG",
        },
        {
          name: "鹤顶红",
          C: 0,
          M: 92,
          Y: 95,
          K: 0,
          R: 212,
          G: 37,
          B: 23,
          code: "d42517",
          pinyin: "HEDINGHONG",
        },
        {
          name: "石板灰",
          C: 39,
          M: 60,
          Y: 58,
          K: 51,
          R: 98,
          G: 73,
          B: 65,
          code: "624941",
          pinyin: "SHIBANHUI",
        },
        {
          name: "蟹螯红",
          C: 18,
          M: 80,
          Y: 92,
          K: 7,
          R: 177,
          G: 75,
          B: 40,
          code: "b14b28",
          pinyin: "XIEAOHONG",
        },
        {
          name: "龟背黄",
          C: 35,
          M: 47,
          Y: 71,
          K: 33,
          R: 130,
          G: 107,
          B: 72,
          code: "826b48",
          pinyin: "GUIBEIHUANG",
        },
        {
          name: "铅灰",
          C: 28,
          M: 5,
          Y: 30,
          K: 5,
          R: 187,
          G: 181,
          B: 172,
          code: "bbb5ac",
          pinyin: "QIANHUI",
        },
        {
          name: "鱼肚白",
          C: 4,
          M: 4,
          Y: 0,
          K: 0,
          R: 247,
          G: 244,
          B: 237,
          code: "f7f4ed",
          pinyin: "YUDUBAI",
        },
        {
          name: "蛟青",
          C: 35,
          M: 44,
          Y: 80,
          K: 30,
          R: 135,
          G: 114,
          B: 62,
          code: "87723e",
          pinyin: "JIAOQING",
        },
        {
          name: "尘灰",
          C: 26,
          M: 37,
          Y: 51,
          K: 10,
          R: 182,
          G: 164,
          B: 118,
          code: "b6a476",
          pinyin: "CHENHUI",
        },
      ],
      provinceColors: {
        北京市: "#DAF7A6",
        天津市: "#DAF7A6",
        河北省: "#DAF7A6",
        山西省: "#FFC300",
        内蒙古自治区: "#FF5733",
        辽宁省: "#33FFF6",
        吉林省: "#33FFF6",
        黑龙江省: "#33FFF6",
        上海市: "#DAF7A6",
        江苏省: "#DAF7A6",
        浙江省: "#DAF7A6",
        安徽省: "#FFC300",
        福建省: "#DAF7A6",
        江西省: "#FFC300",
        山东省: "#DAF7A6",
        河南省: "#FFC300",
        湖北省: "#FFC300",
        湖南省: "#FFC300",
        广东省: "#DAF7A6",
        广西壮族自治区: "#FF5733",
        海南省: "#DAF7A6",
        重庆市: "#FF5733",
        四川省: "#FF5733",
        贵州省: "#FF5733",
        云南省: "#FF5733",
        西藏自治区: "#FF5733",
        陕西省: "#FF5733",
        甘肃省: "#FF5733",
        青海省: "#FF5733",
        宁夏回族自治区: "#FF5733",
        新疆维吾尔自治区: "#FF5733",
      },
      chats: [
        {
          type: 'ai',
          avatar: 'http://localhost:8080/img/ai.d3e17c3d.gif',
          content: "欢迎使用智能语音机器人！",

          modules: [
            {
              title: '文化展示',
              tip: "您好，我是您的智能语音机器人。",
              bck: 'http://localhost:8080/img/mei.24b2b9c2.jpg',
              content: '123456789012345678990'
            },
            {
              title: '文化展示',
              tip: "您好，我是您的智能语音机器人。",
              bck: 'http://localhost:8080/img/mei.24b2b9c2.jpg',
              content: '123456789012345678990'
            },
            {
              title: '文化展示',
              tip: "您好，我是您的智能语音机器人。",
              bck: 'http://localhost:8080/img/mei.24b2b9c2.jpg',
              content: '123456789012345678990'
            },
            {
              title: '文化展示',
              tip: "您好，我是您的智能语音机器人。",
              bck: 'http://localhost:8080/img/mei.24b2b9c2.jpg',
              content: '123456789012345678990'
            },
          ]
        },
        {
          type: 'user',
          avatar: 'http://localhost:8080/img/ai.d3e17c3d.gif',
          content: "你为什么叫这个名字",

          modules: [

          ]
        },
        {
          type: 'ai',
          avatar: 'http://localhost:8080/img/ai.d3e17c3d.gif',
          content: "我的名字的含义是古意今情，悉了然于心。寓意既含往昔之韵，亦揽当今之情，志在融古今于一体，以启心灵之悟。",

          modules: [

          ]
        },
        {
          type: 'user',
          avatar: 'http://localhost:8080/img/ai.d3e17c3d.gif',
          content: "你能干什么",

          modules: [

          ]
        },
        {
          type: 'ai',
          avatar: 'http://localhost:8080/img/ai.d3e17c3d.gif',
          content: "欢迎使用智能语音机器人！",

          modules: [
            {
              title: '文化展示',
              tip: "您好，我是您的智能语音机器人。",
              bck: 'http://localhost:8080/img/mei.24b2b9c2.jpg',
              content: '123456789012345678990'
            },
            {
              title: '文化展示',
              tip: "您好，我是您的智能语音机器人。",
              bck: 'http://localhost:8080/img/mei.24b2b9c2.jpg',
              content: '123456789012345678990'
            },
            {
              title: '文化展示',
              tip: "您好，我是您的智能语音机器人。",
              bck: 'http://localhost:8080/img/mei.24b2b9c2.jpg',
              content: '123456789012345678990'
            },
            {
              title: '文化展示',
              tip: "您好，我是您的智能语音机器人。",
              bck: 'http://localhost:8080/img/mei.24b2b9c2.jpg',
              content: '123456789012345678990'
            },
          ]
        },
      ],
    };
  },
  computed: {
    iconClass() {
      return {
        "icon-color-empty": this.isTextEmpty,
        "icon-color-filled": !this.isTextEmpty,
      };
    },
    limitTip() {
      if (this.textarea.length > 9500) {
        return true
      } else {
        return false
      }
    },
    isTextEmpty() {
      // 使用正则表达式判断字符串是否为空或全为空格
      return /^\s*$/.test(this.textarea);
    }
  },
  created() {
    // 页面创建时，从 sessionStorage 加载数据
    this.topRightOffset =
      parseFloat(sessionStorage.getItem("topRightOffset")) || 0;
    this.topLeftOffset =
      parseFloat(sessionStorage.getItem("topLeftOffset")) || 0;
    this.showBtn = sessionStorage.getItem("showBtn") === "true"; // 恢复 showBtn 状态
  },
  async mounted() {
    try {
      await this.loadBMapGL();
      await this.initMap(); // 确保顺序执行
    } catch (error) {
      console.error("地图初始化失败:", error);
      // 可在此处添加错误提示
    }

    this.setupMouseEvents();

    const chatContainer = this.$refs.cultureBox;
    if (chatContainer) {
      // 将滚动条位置设置到容器的最底部
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // 获取 SpeechRecognition 构造函数，兼容不同浏览器
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      // 创建 SpeechRecognition 实例
      this.recognition = new SpeechRecognition();
      // 设置识别语言为中文
      this.recognition.lang = 'zh-CN';
      // 设置连续识别
      this.recognition.continuous = true;
      //返回临时识别结果
      this.recognition.interimResults = true;
      //       // 获取更多可能的识别结果
      this.recognition.maxAlternatives = 3;
      // 记录上一次处理的结果索引
      let lastResultIndex = 0;
      // 初始化 Web Audio API 相关对象
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      let microphoneStream;
      const gainNode = audioContext.createGain();
      gainNode.gain.value = 5; // 适当增加音量，可根据实际情况调整

      // 获取麦克风权限并设置音频处理
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          microphoneStream = stream;
          const source = audioContext.createMediaStreamSource(stream);
          source.connect(gainNode);
          gainNode.connect(audioContext.destination);
        })
        .catch((error) => {
          console.error('无法获取麦克风权限:', error);
        });
      // 当识别有结果时触发的事件处理函数
      this.recognition.onresult = (event) => {
        // 从事件结果中提取文字信息
        // const transcript = Array.from(event.results)
        //   .map((result) => result[0])
        //   .map((result) => result.transcript)
        //   .join('');
        // 将识别结果赋值给 transcript 数据
        // this.transcript = transcript;
        let newFinalTranscript = '';
        let newInterimTranscript = '';

        // 只处理新的结果
        for (let i = Math.max(lastResultIndex, event.resultIndex); i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            newFinalTranscript += result[0].transcript;
          } else {
            newInterimTranscript += result[0].transcript;
          }
        }

        // 更新最后处理的结果索引
        lastResultIndex = event.results.length;

        // 将新的识别结果追加到原有的 transcript 后面
        // this.transcript = this.transcript + newFinalTranscript + newInterimTranscript;
        this.textarea = this.textarea + newFinalTranscript + newInterimTranscript;
        this.adjustHeight();
      };

     // 当识别结束时触发的事件处理函数
    this.recognition.onend = () => {
        // 标记录音结束
        this.isRecording = false;
        if (microphoneStream) {
            microphoneStream.getTracks().forEach((track) => track.stop());
        }
    };

    } else {
      // 浏览器不支持语音识别功能时，在控制台输出提示信息
      this.$message.error("浏览器不支持语音识别功能")
    }
  },
  beforeDestroy() {
    this.cleanupMouseEvents();
    if (this.map) this.map.destroy(); // 明确销毁地图实例
  },

  methods: {
    setupMouseEvents() {
      const headerImage = this.$refs.headerImage;
      const firstBox = this.$refs.firstBox;

      firstBox.addEventListener("mousemove", this.handleMouseMove);
      firstBox.addEventListener("mouseleave", this.handleMouseLeave);
      firstBox.addEventListener("wheel", this.handleMouseWheel, {
        passive: false,
      });
      this.homeImg = headerImage;
      this.firstBox = firstBox;
    },
    cleanupMouseEvents() {
      const firstBox = this.$refs.firstBox;
      firstBox.removeEventListener("mousemove", this.handleMouseMove);
      firstBox.removeEventListener("mouseleave", this.handleMouseLeave);
      firstBox.removeEventListener("wheel", this.handleMouseWheel, {
        passive: false,
      });
    },
    handleMouseMove(e) {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      // 计算偏移量，可以根据实际需求调整系数以改变晃动强度
      const offsetX = -(mouseX - 0.5) * 20; // X轴上的偏移
      const offsetY = -(mouseY - 0.5) * 20; // Y轴上的偏移

      // 应用变换
      this.homeImg.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    },
    handleMouseLeave() {
      // 鼠标移出窗口时重置位置
      this.homeImg.style.transform = "translate(-50%, -50%)";
    },
    handleMouseWheel(event) {
      if (this.isFaceBoxChange === false) {
        event.preventDefault(); // 阻止页面滚动
      }
      if (event.deltaY > 0) {
        this.isFaceBoxChange = true;
        // 执行向下滚动的操作
      } else if (event.deltaY < 0) {
        this.isFaceBoxChange = false;
        // 执行向上滚动的操作
      }
    },
    changeColor(color) {
      this.nowColor = color;
    },
    adjustHeight() {
      const questionTextarea = this.$refs.questionTextarea;
      const maxHeight = 13;

      // 先将高度设为auto，以便scrollHeight能正确反映当前内容高度
      questionTextarea.style.height = 'auto';

      // 获取上下padding值
      const computedStyle = window.getComputedStyle(questionTextarea);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);
      const totalPadding = paddingTop + paddingBottom;
      // 计算不包含padding的内容高度
      const contentHeight = questionTextarea.scrollHeight - totalPadding;

      const height = Math.min((contentHeight / window.innerHeight) * 100 - 2.39568345323741, maxHeight);


      this.textareaHeight = height;
    },
    thirdNext() {
      this.topLeftOffset -= 100;
      this.topRightOffset += 100;

      // 更新 sessionStorage
      sessionStorage.setItem("topLeftOffset", this.topLeftOffset);
      sessionStorage.setItem("topRightOffset", this.topRightOffset);

      setTimeout(() => {
        this.showBtn = true;
        sessionStorage.setItem("showBtn", this.showBtn); // 更新 showBtn 状态到 sessionStorage
      }, 480);
    },
    thirdLast() {
      this.topLeftOffset += 100;
      this.topRightOffset -= 100;

      // 更新 sessionStorage
      sessionStorage.setItem("topLeftOffset", this.topLeftOffset);
      sessionStorage.setItem("topRightOffset", this.topRightOffset);
      setTimeout(() => {
        this.showBtn = false;
        sessionStorage.setItem("showBtn", this.showBtn); // 更新 showBtn 状态到 sessionStorage
      }, 100);
    },
    showVideo(index) {
      // if (this.nowVideo === this.videos[index]) return; // 避免重复赋值
      console.log("old:" + this.nowVideo);
      this.isShowVideo = true;
      this.nowVideo = this.videos[index];
      console.log("now:" + this.nowVideo);
    },
    changePage(name) {
      this.$bus.$emit("c-" + name, name);
    },
    async loadBMapGL() {
      return new Promise((resolve, reject) => {
        if (window.BMapGL) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src =
          "https://api.map.baidu.com/api?type=webgl&v=1.0&ak=FKauit31L7Y5Fl6uJY66t9lP1zfsasYi&callback=initBMapGL";
        script.onerror = (err) => {
          reject(new Error("加载百度地图失败"));
        };

        window.initBMapGL = () => {
          resolve();
          delete window.initBMapGL;
        };

        document.head.appendChild(script);
      });
    },

    async initMap() {
      if (!window.BMapGL) throw new Error("BMapGL未加载");

      const map = new BMapGL.Map("allmap");
      const point = new BMapGL.Point(103.834, 36.061);
      map.centerAndZoom(point, 5);
      map.enableScrollWheelZoom(true);

      // 将地理编码和点击事件移到此处
      const geoc = new BMapGL.Geocoder();
      map.addEventListener("click", (e) => {
        const pt = e.latlng;
        geoc.getLocation(pt, (rs) => {
          const addComp = rs.addressComponents;
          const cityName = addComp.city || addComp.district;
          this.cityName = cityName;
          // console.log("点击的是" + this.cityName);

          if (cityName) this.highlightCity(cityName);
        });
      });

      this.map = map;

      // 确保地图初始化后再加载数据
      await this.getAllProvincesBoundaries(allProvinceBoundaries);
      await this.getAllCityBoundaries(allCityBoundaries);
    },
    getAllProvincesBoundaries(provinceData) {
      this.addFillLayer(provinceData);
    },

    addFillLayer(provinceData) {
      this.provinceFillLayer = new BMapGL.FillLayer({
        crs: "GCJ02",
        style: {
          fillColor: [
            "match",
            ["get", "name"],
            ...Object.entries(this.provinceColors).flatMap(([key, value]) => [
              key,
              value,
            ]),
            "#ccc",
          ],
          fillOpacity: 0.5,
          strokeWeight: 2,
          strokeColor: "black",
        },
        zIndex: 2,
      });

      this.provinceFillLayer.setData(provinceData);
      this.map.addNormalLayer(this.provinceFillLayer);
    },

    getAllCityBoundaries(cityData) {
      this.drawCityBoundaries(cityData);
    },

    drawCityBoundaries(data) {
      const lineLayer = new BMapGL.LineLayer({
        crs: "GCJ02",
        style: {
          lineWidth: 0.5,
          lineDasharray: [4, 4],
          lineCap: "butt",
          lineJoin: "miter",
          lineColor: "#000",
        },
        zIndex: 1,
      });
      lineLayer.setData(data);
      this.map.addNormalLayer(lineLayer);
    },

    highlightCity(cityName) {
      if (this.highlightedPolygon !== null) {
        this.map.clearOverlays();
      }


      const feature = this.cityData.features.find(
        (feature) => feature.properties.name === cityName
      );
      if (feature) {
        this.drawHighlightedCityBoundary(feature);
      }
      this.sendMessage(cityName)
    },

    drawHighlightedCityBoundary(feature) {
      const coordinates = feature.geometry.coordinates;
      const polygons = coordinates.map((polygonCoords) =>
        polygonCoords[0].map((point) => new BMapGL.Point(point[0], point[1]))
      );

      polygons.forEach((points) => {
        this.highlightedPolygon = new BMapGL.Polygon(points, {
          strokeColor: "red",
          strokeWeight: 2,
          strokeOpacity: 1,
          fillColor: "rgba(255, 0, 0, 0.35)",
          fillOpacity: 0.35,
        });
        this.map.addOverlay(this.highlightedPolygon);
      });
    },
    sendMessage(city = '') {
      if (this.isTextEmpty&&!city) {
        this.$message.error("还没说呢");
        return;
      } else {
        let message = {
          type: 'user',
          avatar: this.$store.state.avatar,
          content: city ? `我想了解${city}的文化` : this.textarea,
          modules: []
        };
        console.log(message);

        const aiMessage = {
          type: 'ai',
          avatar: 'http://localhost:8080/img/ai.d3e17c3d.gif',
          content: "请求超时，服务器繁忙，没想出来",
          modules: []
        };
        const aiMessage2 = {
          type: 'ai',
          avatar: 'http://localhost:8080/img/ai.d3e17c3d.gif',
          content: "这是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本",
          modules: [
          ]
        };
        this.chats.push(message);
        this.isThinking = true;
        this.$nextTick(() => {
          const chatContainer = this.$refs.cultureBox;
          if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
          }
        });
        const source = axios.CancelToken.source();
        const timeoutId = setTimeout(() => {
          source.cancel('请求超时');
          this.isThinking = false;
          this.chats.push(aiMessage);
          this.$nextTick(() => {
            const chatContainer = this.$refs.cultureBox;
            if (chatContainer) {
              chatContainer.scrollTop = chatContainer.scrollHeight;
            }
          });
        }, 60000);

        axios.post(`${this.$baseUrl}user/sendMessage`, message.content, {
          headers: {
            token: `${this.$store.state.token}`,
          },
          cancelToken: source.token
        }).then((response) => {
          clearTimeout(timeoutId);
          this.isThinking = false;
          this.chats.push(response.data.data);
          this.$nextTick(() => {
            const chatContainer = this.$refs.cultureBox;
            if (chatContainer) {
              chatContainer.scrollTop = chatContainer.scrollHeight;
            }
          });
        }).catch((error) => {
          clearTimeout(timeoutId);
          this.isThinking = false;
          if (axios.isCancel(error)) {
            console.log('请求被取消: ', error.message);
          } else {
            this.$message.error("ERROR：" + error.message);
            this.chats.push(aiMessage2)
          }
        });

        this.textarea = '';
        this.textareaHeight = 3;
      }
    },
    sayingInMessage() {
      this.isRecording = !this.isRecording;
      console.log(this.isRecording);

      if (this.isRecording) {
        this.recognition.start();

      } else {
        this.recognition.stop();
      }
    },

  },
};
</script>

<style scoped>
.first-box {
  position: relative;
  width: 100vw;
  height: 100vh;
  /* 使用视口单位 */
  overflow: hidden;
  background-image: url("@/assets/image/Home/02bck.png");
}

.header-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  height: 102%;
  /* 根据需要调整 */
}

.faceBox {
  width: 100vw;
  height: 200vh;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  /* 文本不可选中 */
  font-family: KaiTi;
  transition: all 1s ease-in-out;
}

.faceBox-up {
  background-color: #202020;
  opacity: 0.8;
  transform: translateY(-100vh);
}

.first-face-title {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  display: flex;
  /* background-color: aqua; */
}

.first-face-title p {
  font-weight: 800;
  font-size: 50px;
  letter-spacing: 20px;
  color: rgb(234, 230, 238);
}

.face-text {
  width: 100vw;
  height: 100vh;
  /* background-color: pink; */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  display: flex;
}

.face-text p {
  width: 40vw;
  /* height: 40vh; */
  word-wrap: break-word;
  font-size: 40px;
  letter-spacing: 10px;
  color: rgb(213, 202, 202);
}

@font-face {
  font-family: "xingshu";
  /* 可以是任意名称 */
  src: url("@/assets/font/xingshu.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.second-box {
  width: 100vw;
  height: 103vh;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

.third-box {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  overflow: hidden;
  position: relative;
  background-color: #5c2223;
  background-image: url("@/assets/image/Home/02bck.png");
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/image/Home/02bck.png");
  transition: background-color 2s ease-in;
  /* background-color: #ddd; */
}

.color-box {
  position: absolute;
  width: 30%;
  height: 90%;
  /* background-color: aqua; */
  top: 10%;
  left: 8%;
  overflow: scroll;
  /*隐藏滚动条*/
  -ms-overflow-style: none;
  /* Internet Explorer 和 Edge */
  scrollbar-width: none;
  /* Firefox 私有属性 */
}

.message-box {
  position: absolute;
  width: 30%;
  height: 75%;
  top: 10%;
  right: 30%;
  display: flex;
  margin-top: 5px;
}

.color-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* 允许子元素换行 */
}

.color-value {
  width: 16%;
  height: 100%;
}

.color-son {
  width: 100%;
  height: 14.13%;
  /* background-color: red; */
  position: relative;
  border-bottom: #fff 1px solid;
  color: #fff;
  transition: 1s;
}

.C {
  border-top: #fff 2px solid;
}

.color-title {
  width: 100%;
  height: 10%;
  position: relative;
}

.color-title p {
  position: absolute;
  top: 0%;
  left: 10%;
  font-size: 12px;
}

.color-circular {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 25%;
  left: 20%;
}

.color-circular span {
  position: absolute;
  top: 22%;
  left: 15%;
  font-size: 18px;
  width: 35px;
  /* background-color: aqua; */
  text-align: center;
}

.rgb span {
  display: block;
  position: absolute;
  bottom: 7%;
  right: 5%;
  font-size: 200%;
  font-weight: 300;
}

.color-name {
  width: 70%;
  height: 100%;
  text-align: center;
  color: #fff;
}

.p-name {
  font-size: 750%;
  font-family: "xingshu", kaiti;
  margin-top: 10%;
  margin-left: 7vw;
  writing-mode: vertical-rl;
  /* 文本从上到下、从右到左 */
}

.p-pinyin {
  font-size: 21px;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
}

.color-img {
  width: 14%;
  height: 100%;
}

.color-img img {
  width: 65%;
  height: 70%;
  margin-top: 55%;
}

.color-item {
  /* background-color: palegoldenrod; */
  border-top: 7px solid;
  width: 13%;
  height: 265px;
  margin: 3px;
  margin-top: 5px;
  cursor: pointer;
  transition: opacity 0.6s;
}

.color-item:hover {
  opacity: 0.5;
}

.color-top {
  display: flex;
  margin-top: 13px;
}

.top-name {
  writing-mode: vertical-rl;
  margin-left: 5px;
}

.color-bottom {
  margin-top: 12px;
  margin-right: 20px;
  transform: rotate(90deg);
  /* 顺时针旋转90度 */
  color: #fff;
  font-size: 11px;
}

.top-value {
  margin-top: 3px;
}

.wrapper-title {
  position: absolute;
  /* top: 10%; */
  right: 3%;
  width: 25%;
  height: 75%;
  text-align: center;
  /* background-color: aqua; */
}

.wrapper-title span {
  /* display: block; */
  font-family: "xingshu", kaiti;
  font-size: 130px;
  margin-top: 80px;
  margin-right: 80px;
  color: #fff;
  writing-mode: vertical-lr;
}

.third-bottom {
  width: 100vw;
  height: 100vh;
  position: relative;
  /* background-color: #202020; */
  background-image: url("@/assets/image/Home/02bck.png");
}

.third-top-left,
.third-top-right {
  width: 50%;
  height: 100%;
  text-align: center;
  color: #5c2223;
  background-color: #202020;
  background-image: url("@/assets/image/Home/02bck.png");
  font-size: 500px;
  font-family: "xingshu", kaiti;
  position: absolute;
  transition: 0.7s;
  /* border: #fff 1px solid; */
  z-index: 10;
}

.third-top-left {
  top: 0;
  left: 0;
}

.third-top-right {
  top: 0;
  right: 0;
}

.third-top-left span,
.third-top-right span {
  position: absolute;
  /* background-color: #fff; */
  top: 20%;
  right: 20%;
}

.third-click-btn-next {
  width: 60px;
  position: absolute;
  /* background-color: #fff; */
  bottom: 10%;
  right: 20%;
  cursor: pointer;
  /* transition: 0.5s; */
  animation: img-breath 2.5s linear infinite;
}

.third-click-btn-last {
  width: 60px;
  position: absolute;
  top: 100vh;
  left: 0;
  margin-top: -95vh;
  margin-left: 3.5vw;
  cursor: pointer;
  transition: 0.7s;
  animation: img-breath 2.5s linear infinite;
}

@keyframes img-breath {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.35;
  }

  100% {
    opacity: 1;
  }
}

.third-bottom-contain {
  width: 100vw;
  height: 85vh;
}

.third-bottom-title {
  width: 80vw;
  height: 15vh;
  /* background-color: aqua; */
  margin-left: 12vw;
  text-align: center;
}

.third-bottom-title h2 {
  font-family: kaiti;
  font-size: 60px;
  /* background-color: beige; */
  display: block;
  color: #fff;
  letter-spacing: 15px;
}

.third-bottom-contain-left {
  width: 16vw;
  height: 83vh;
  /* background-color: palegoldenrod; */
  margin-left: 1vw;
  margin-top: -2vh;
}

.video-box {
  width: 100%;
  height: 22%;
  /* background-color: aqua; */
  margin-top: 2.5vh;
  cursor: pointer;
  border-radius: 8px;
}

.video-face {
  width: 16vw;
  height: 18.26vh;
  overflow: hidden;
  transition: 0.5s;
  /* background-color: red; */
  position: absolute;
  z-index: 0;
  border-radius: 8px;
}

.video-face:hover {
  transform: scale(1.1);
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.face-img img {
  width: 16vw;
  height: 18.26vh;
  border-radius: 8px;
}

.face-title {
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  color: #fff;
}

.face-title h2 {
  font-size: 18px;
  font-family: kaiti;
  margin-bottom: 10px;
  transform: translateY(200px);
  transition: 0.5s;
}

.video-face:hover .face-title h2 {
  transform: translate(0);
  transition-delay: 0.3s;
}

.face-title p {
  font-size: 13px;
  font-weight: 300;
  font-family: kaiti;
  line-height: 20px;
  white-space: 2px;
  transform: translateY(250px);
  letter-spacing: 2px;
  transition: 0.5s;
}

.video-face:hover .face-title p {
  transform: translateY(0);
  transition-delay: 0.15s;
}

.third-bottom-contain-right {
  width: 80vw;
  height: 82.2vh;
  background-color: rgba(33, 1, 1, 0.65);
  margin-left: 18vw;
  margin-top: -83vh;
  border-radius: 5px;
  display: flex;
}

.third-bottom-right-son1,
.third-bottom-right-son2,
.third-bottom-right-son3,
.third-bottom-right-son4 {
  width: 19.5vw;
  height: 77vh;
  margin-left: 20px;
  margin-top: 19px;
  /* background-color: aqua; */
  font-family: kaiti;
}

.third-bottom-right-son2 {
  width: 15vw;
  margin-left: 5px;
}

.third-bottom-right-son3 {
  margin-left: 5px;
}

.third-bottom-right-son4 {
  width: 22vw;
}

.son-box {
  width: 19.5vw;
  height: 30.5vh;
  /* background-color: blueviolet; */
  transition: 0.5s;
  cursor: pointer;
  margin-bottom: 1vh;
  margin-top: 1vh;
}

.son-box:hover,
.son4-box:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
}

.cloud2 {
  width: 15vw;
  height: 13vh;
  /* background-color: rgb(15, 15, 11); */
}

.cloud2 img {
  transform: scaleX(-1);
  float: right;
  margin-right: -1.5vw;
  margin-top: 1vh;
  height: 11vh;
}

.cloud21 img {
  margin-right: 1.3vw;
}

.cloud1 {
  width: 15vw;
  height: 31.5vh;
  /* background-color: rgb(77, 77, 12); */
}

.cloud1 img {
  height: 14vh;
  margin-top: 6.5vh;
  margin-left: 3vw;
}

.son-box-img img {
  width: 19.5vw;
  height: 21.6vh;
}

.son-box h2,
.son-box p {
  display: block;
}

.son-box h2 {
  color: #fff;
  font-size: 20px;
  margin: 2px;
}

.son-box p {
  color: #fff;
  font-size: 16px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.son4-box {
  width: 22vw;
  height: 75vh;
  transition: 0.5s;
  cursor: pointer;
}

.son4-box-img img {
  width: 22vw;
  height: 63vh;
}

.son4-box-text h2 {
  color: #fff;
  font-size: 20px;
  margin: 5px;
}

.son4-box-text p {
  color: #fff;
  font-size: 16px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.fourth-box {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.mapBox {
  width: 50vw;
  height: 100vh;
}

#allmap {
  width: 100%;
  height: 100%;
}

.cultureBox {
  width: 50vw;
  /* max-height: 90vh;
  min-height: 87vh; */
  height: 95vh;
  background-color: #5c2223;
  position: relative;
  overflow: auto;
  /* background: linear-gradient(90deg, rgba(255, 215, 186, 0.3) 0%, rgba(251, 228, 216, 0.3) 100%); */
  background-image: url("@/assets/image/Home/02bck.png");
}

/* 设置整个滚动条的宽度 */
.cultureBox::-webkit-scrollbar {
  width: 6px;
  /* 滚动条宽度设置得较窄以显得更细 */
}

/* 滚动条轨道 */
.cultureBox::-webkit-scrollbar-track {
  background: rgba(204, 204, 214, 0.4);
  /* 轨道背景色透明度较低，使轨道不那么明显 */
  border-radius: 10px;
}

/* 滚动条滑块 */
.cultureBox::-webkit-scrollbar-thumb {
  background: rgba(204, 204, 214, 0.7);
  /* 滑块颜色稍微深一点，但仍然保持低调 */
  border-radius: 10px;
}

/* 当用户悬停在滚动条上时，改变滑块的颜色 */
.cultureBox::-webkit-scrollbar-thumb:hover {
  background: rgba(204, 204, 214, 1);
  cursor: pointer;
  /* 鼠标悬停时，滑块颜色变得更深一些 */
}

.avatarBox {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 15px;
  /* background-color: beige; */
}

.avatarBox-right {
  order: 2;
}

.avatarBox img {
  position: absolute;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 20px;
}

.fourth-right {
  width: 50vw;
  height: 100vh;
  display: flex;
  background-image: url("@/assets/image/Home/02bck.png");
  /* background-color: #ccccd6; */
  flex-direction: column;
  /* 垂直排列子元素 */
  align-items: flex-start;
  /* 子元素沿交叉轴（在这个案例中是水平方向）的起点对齐 */
}

.dialogBox {
  width: 100%;
  /* padding:10px; */
  /* background-color: #a17b7c; */
  background-image: url("@/assets/image/Home/02bck.png");
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;
  /* 让子元素在交叉轴起始位置对齐 */
}

.dialogBox-right {
  justify-content: flex-end;
}

.contentBox {
  max-width: 76%;
  margin-top: 10px;
  height: auto;
  padding: 20px;
  background-color: #f7f4ed;
  background-image: url("@/assets/image/Home/02bck.png");
  border-radius: 15px;

}

.contentBox-right {
  order: 1;
}

.contentText {
  height: auto;
  display: flex;
}

.contentText p {

  font-family: kaiti;
  font-size: 18px;
  word-wrap: break-word;
  margin: 0;
  padding: 0;
}

.contentModule {
  /* width: 640px; */
  /* height: 350px; */
  margin-top: 10px;
  /* background-color: #5c2223; */
  display: flex;
}

.cultureIntroduce {
  width: 200px;
  height: 300px;
  background-color: aqua;
  border-radius: 15px;
  background: url('@/assets/image/Home/mei.jpg') center center;
  background-size: cover;
  cursor: pointer;
  transition: 0.6s;
}

.questionAnswer {
  width: 200px;
  height: 300px;
  border-radius: 15px;
  margin-left: 20px;
  background: url('@/assets/image/Home/lan.jpg');
  background-size: cover;
  cursor: pointer;
  transition: 0.6s;
}

.moduleSonBox {
  margin-left: 20px;
}

.scenicIntroduce {
  width: 200px;
  height: 180px;
  border-radius: 15px;
  background: url('@/assets/image/Home/zhu.jpg') center center;
  background-size: cover;
  cursor: pointer;
  transition: 0.6s;
}

.AIDraw {
  width: 200px;
  height: 105px;
  border-radius: 15px;
  margin-top: 15px;
  background: url('@/assets/image/Home/jv.jpg') center center;
  background-size: cover;
  cursor: pointer;
  transition: .6s;
}

.cultureIntroduce:hover,
.questionAnswer:hover,
.scenicIntroduce:hover,
.AIDraw:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.3);
}

.el-icon-s-promotion {
  font-size: 30px;
  position: absolute;
  right: 3vh;
  bottom: 0.5vh;
  width: 5vh;
  height: 5vh;
  border-radius: 100%;
  background-color: #fff;
  cursor: not-allowed;
  transition: color 0.3s;
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}

.el-icon-s-promotion-allowed {
  cursor: pointer;
}

.icon-color-empty {
  color: gray;
  /* 无文字时的颜色 */

}

.icon-color-filled {
  color: #2ba257;
  /* 有文字时的颜色 */
}

.el-icon-microphone {
  font-size: 30px;
  padding: 5px;
  border-radius: 100%;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  position: absolute;
  bottom: 0.5vh;
  right: 9vh;
  transition: 0.3s;
}

.saying {
  background-color: rgb(244, 52, 52);
  color: #fff;
}

.el-icon-microphone:hover {
  color: #2ba257;
}

.saying:hover {
  color: #fff;
}

.inputBox {
  width: 100%;
  background-color: #d8e3e7;
  transition: 0.5s;
  display: flex;
  position: relative;
  padding: 0.5vh;
  box-sizing: border-box;
  transition: border 0.5s;
  border: 1.5px solid rgba(255, 0, 0, 0);
  /* border-radius: 15px 15px 0 0; */
}

.inputBox:hover {
  border-color: #2376b7;
}

.question-textarea {
  width: 40vw;
  resize: none;
  font-size: 20px;
  padding: 10px;
  margin-left: 1vw;
  font-family: kaiti;
  border: none;
  outline: none;
  background-color: #d8e3e7;
  /* background-color: red; */
  caret-color: #2376b7;
  /* 修改光标颜色为红色 */
}

/* 设置整个滚动条的宽度 */
.question-textarea::-webkit-scrollbar {
  width: 6px;
  /* 滚动条宽度设置得较窄以显得更细 */
}

/* 滚动条轨道 */
.question-textarea::-webkit-scrollbar-track {
  background: rgba(204, 204, 214, 0.4);
  /* 轨道背景色透明度较低，使轨道不那么明显 */
  border-radius: 10px;
}

/* 滚动条滑块 */
.question-textarea::-webkit-scrollbar-thumb {
  background: rgba(235, 235, 237, 0.995);
  /* 滑块颜色稍微深一点，但仍然保持低调 */
  border-radius: 10px;
}

/* 当用户悬停在滚动条上时，改变滑块的颜色 */
.question-textarea::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 249, 250);
  /* 鼠标悬停时，滑块颜色变得更深一些 */
  cursor: pointer;
}

/* 禁止 placeholder 文字被选中 */
::-webkit-input-placeholder {
  user-select: none;
}

::-moz-placeholder {
  user-select: none;
}

:-ms-input-placeholder {
  user-select: none;
}

::placeholder {
  user-select: none;
}

.limit-tip {
  position: absolute;
  right: 2.5vh;
  bottom: 6.5vh;
}
</style>