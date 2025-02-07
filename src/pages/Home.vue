<template>
  <div class="container">
    <div class="first-box" ref="firstBox">
      <img
        src="@/assets/image/Home/01bck.png"
        alt="Header Image"
        class="header-image"
        ref="headerImage"
      />
      <div
        class="faceBox"
        ref="faceBox"
        :class="{ 'faceBox-up': isFaceBoxChange }"
      >
        <div class="face-title">
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
      <div
        class="wrapper"
        :style="{
          backgroundColor: nowColor.code ? '#' + nowColor.code : '#ddd',
        }"
      >
        <div class="color-box">
          <div class="color-list">
            <div
              class="color-item"
              v-for="(color, index) in colors"
              :key="index"
              :style="{ borderColor: '#' + color.code }"
              @click="changeColor(color)"
            >
              <div class="color-top">
                <div class="top-size">
                  <el-progress
                    type="circle"
                    :show-text="false"
                    :percentage="color.C"
                    color="#fff"
                    :width="width30"
                    :stroke-width="strokeWidth"
                    stroke-linecap="butt"
                    class="top-value"
                    define-back-color="rgba(255,255,255,0.2)"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :show-text="false"
                    :percentage="color.M"
                    color="#fff"
                    :width="width30"
                    :stroke-width="strokeWidth"
                    stroke-linecap="butt"
                    class="top-value"
                    define-back-color="rgba(255,255,255,0.2)"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :show-text="false"
                    :percentage="color.Y"
                    color="#fff"
                    :width="width30"
                    :stroke-width="strokeWidth"
                    stroke-linecap="butt"
                    class="top-value"
                    define-back-color="rgba(255,255,255,0.2)"
                  ></el-progress>
                  <el-progress
                    type="circle"
                    :show-text="false"
                    :percentage="color.K"
                    color="#fff"
                    :width="width30"
                    :stroke-width="strokeWidth"
                    stroke-linecap="butt"
                    class="top-value"
                    define-back-color="rgba(255,255,255,0.2)"
                  ></el-progress>
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
              <div class="color-title"><p>C</p></div>
              <div class="color-circular">
                <el-progress
                  type="circle"
                  :percentage="nowColor.C"
                  :show-text="false"
                  :width="width"
                  color="#0093D3"
                  stroke-linecap="butt"
                >
                </el-progress>
                <span>{{ nowColor.C }}</span>
              </div>
            </div>
            <div class="M cmyk color-son">
              <div class="color-title"><p>M</p></div>
              <div class="color-circular">
                <el-progress
                  type="circle"
                  :percentage="nowColor.M"
                  :show-text="false"
                  :width="width"
                  color="#CC006B"
                  stroke-linecap="butt"
                >
                </el-progress>
                <span>{{ nowColor.M }}</span>
              </div>
            </div>
            <div class="Y cmyk color-son">
              <div class="color-title"><p>Y</p></div>
              <div class="color-circular">
                <el-progress
                  type="circle"
                  :percentage="nowColor.Y"
                  :show-text="false"
                  :width="width"
                  color="#FFF10C"
                  stroke-linecap="butt"
                >
                </el-progress>
                <span>{{ nowColor.Y }}</span>
              </div>
            </div>
            <div class="K cmyk color-son">
              <div class="color-title"><p>K</p></div>
              <div class="color-circular">
                <el-progress
                  type="circle"
                  :percentage="nowColor.K"
                  :show-text="false"
                  :width="width"
                  color="#000000"
                  stroke-linecap="butt"
                >
                </el-progress>
                <span>{{ nowColor.K }}</span>
              </div>
            </div>
            <div class="R rgb color-son">
              <div class="color-title"><p>R</p></div>
              <span>{{ nowColor.R }}</span>
            </div>
            <div class="G rgb color-son">
              <div class="color-title"><p>G</p></div>
              <span>{{ nowColor.G }}</span>
            </div>
            <div class="B rgb color-son">
              <div class="color-title"><p>B</p></div>
              <span>{{ nowColor.B }}</span>
            </div>
          </div>
          <div class="color-name">
            <p class="p-name">{{ nowColor.name }}</p>
            <p class="p-pinyin">{{ nowColor.pinyin }}</p>
            <p class="p-pinyin">{{ nowColor.code ? '#' + nowColor.code : '#ddd' }}</p>
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
    <div class="third-box"></div>
  </div>
</template>

<script>
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
          Y: 122,
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
          Y: 122,
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
    };
  },
  mounted() {
    this.setupMouseEvents();
  },
  beforeDestroy() {
    this.cleanupMouseEvents();
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
  },
};
</script>

<style lang="css" scoped>
.first-box {
  position: relative;
  width: 100vw;
  height: 100vh;
  /* 使用视口单位 */
  overflow: hidden;
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
  user-select: none; /* 文本不可选中 */
  font-family: KaiTi;
  transition: all 1s ease-in-out;
}

.faceBox-up {
  background-color: #202020;
  opacity: 0.8;
  transform: translateY(-100vh);
}

.face-title {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  display: flex;
  /* background-color: aqua; */
}

.face-title p {
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
  font-family: "xingshu"; /* 可以是任意名称 */
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
  -ms-overflow-style: none; /* Internet Explorer 和 Edge */
  scrollbar-width: none; /* Firefox 私有属性 */
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
  flex-wrap: wrap; /* 允许子元素换行 */
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
  writing-mode: vertical-rl; /* 文本从上到下、从右到左 */
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
  transform: rotate(90deg); /* 顺时针旋转90度 */
  color: #fff;
  font-size: 11px;
}
.top-value {
  margin-top: 3px;
}
.wrapper-title{
  position: absolute;
  /* top: 10%; */
  right: 3%;
  width: 25%;
  height: 75%;
  text-align: center;
  /* background-color: aqua; */
}
.wrapper-title span{
  /* display: block; */
  font-family: 'xingshu',kaiti;
  font-size: 130px;
  margin-top: 80px;
  margin-right: 80px;
  color: #fff;
  writing-mode: vertical-lr;
}
</style>